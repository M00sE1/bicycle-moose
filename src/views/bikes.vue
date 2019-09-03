<template>
  <div class="top">
    <h1>单车管理</h1>
    <el-table :data="items" border style="width: 100%">
      <el-table-column prop="Id" label="编号" width="100"></el-table-column>
      <el-table-column prop="Lng" label="经度" width="270"></el-table-column>
      <el-table-column prop="Lat" label="纬度" width="270"></el-table-column>
      <el-table-column prop="QCode" label="二维码" width="200">
        <template scope="scope">
          <img :src="scope.row.QCode" width="80" height="80" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <router-link :to="{path:'/bikesDetail/'+scope.row.Id}">
            <el-button type="text" size="small">查看</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="changePage"
      :page-size="pagenation.PageSize"
      :page-count="pagenation.PageCount"
    ></el-pagination>
  </div>
</template>

<style>
.top {
  padding: 10px;
}
</style>

<script type="es6">
import { getBikesUrl } from "../api/api";
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      pagenation: {
        CurrentPage: 1, //当前页数
        PageSize: 5, //一页多少条数据
        PageCount: 0
      }
    };
  },
  methods: {
    getItems() {
      let obj = {
        CurrentPage: this.pagenation.CurrentPage,
        PageSize: this.pagenation.PageSize
      };
      getBikesUrl(obj).then(res => {
        console.log(res);
        this.items = res.data.DataList;
        this.pagenation.PageCount = res.data.PageCount;
      });
    },
    changePage(value) {
      this.pagenation.CurrentPage = value;
      this.getItems();
    }
  },
  mounted() {
    this.getItems();
    console.log(this.items);
  }
};
</script>