<template>
  <el-card class="box-card" style="width:450px; margin:120px auto;">
    <div slot="header" class="clearfix">
      <span>用户登陆</span>
    </div>
    <el-form :model="loginForm" ref="ValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="username"
        label="账号"
        :rules="[
      { required: true,message: '请输入账号', trigger: 'blur' }
    ]"
      >
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item
        prop="password"
        label="密码"
        :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]"
      >
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('ValidateForm')">登陆</el-button>
    </el-form>
  </el-card>
</template>

<style>
</style>

<script type="es6">
import { loginUserUrl } from "../api/api";
import axios from "axios";
import { Notification } from "element-ui";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const data = {
            username: this.loginForm.username,
            pwd: this.loginForm.password
          };
          loginUserUrl(data).then(
            function(res) {
              if (res.data == "success") {
                this.$router.push({ path: "/home" });
              } else {
                Notification({
                  title: "提示",
                  type: "error",
                  message: "用户名或者密码错误"
                });
              }
            }.bind(this)
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {}
};
</script>
