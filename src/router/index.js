import Vue from 'vue'
import Router from 'vue-router'
import home from "@/views/home"
import data from "@/views/data"
import status from "@/views/status";
import users from "@/views/users"
import bikes from "@/views/bikes"
import rider from "@/views/rider"
import login from "@/views/login"
import index from "@/views/index"
import bikesDetail from "@/views/bikesDetail"
import riderDetail from "@/views/riderDetail"
import bikesStatus from "@/views/userPlaceStatus"
import userStatus from "@/views/userSexStatus"

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: "/login",
      component: login
    },
    {
      path: "/",
      component: index,
      children: [
        {
          path: "/home",
          component: home
        },
        {
          path: "/data",
          component: data,
          redirect:"/users",
          children: [
            {
              path: "/users",
              component: users
            },
            {
              path: "/bikes",
              component: bikes
            },
            {
              path: "/rider",
              component: rider
            }
            ,
            {
              path: "/bikesDetail/:Id",
              component: bikesDetail
            }
            ,
            {
              path: "/riderDetail/:Id",
              component: riderDetail
            }
          ]
        },
        {
          path: "/status",
          component: status,
          redirect:"/userSexStatus",
          children: [
            { path: "/userSexStatus", component: userStatus },
            { path: "/userPlaceStatus", component: bikesStatus }
          ]
        },
        {
          path: "/login",
          component: login
        }
      ]
    }
  ]
})
