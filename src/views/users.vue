<template>
  <div class="top">
    <h1>用户管理</h1>
    <el-table :data="items" border style="width: 100%">
      <el-table-column prop="UserId" label="用户id" width="80"></el-table-column>
      <el-table-column prop="UserName" label="用户名" width="100"></el-table-column>
      <el-table-column prop="Sex" label="用户性别"></el-table-column>
      <el-table-column prop="Place" label="所在地" width="80"></el-table-column>
      <el-table-column prop="Tel" label="手机号"></el-table-column>
      <el-table-column prop="Email" label="邮箱"></el-table-column>
      <el-table-column prop="Age" label="年龄"></el-table-column>
      <el-table-column prop="Pwd" label="密码"></el-table-column>
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
import { getUsersUrl } from "../api/api";
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
      getUsersUrl(obj).then(res => {
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
  }
};
</script>