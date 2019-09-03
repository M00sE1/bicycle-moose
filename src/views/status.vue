<template>
  <div>
    <el-row>
      <el-col :span="4" class="side">
        <el-menu default-active="userSexStatus" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/userSexStatus">用户性别统计</el-menu-item>
          <el-menu-item index="/userPlaceStatus">用户地区分布</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.side {
  padding: 10px;
}
</style>