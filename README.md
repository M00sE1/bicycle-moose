一、环境搭建
1、安装项目（脚手架）
2、安装elementui 
cnpm install element-ui -S
在main.js 引入element-ui ，并使用
1)引入了element-ui里面所有的组件
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)
需要在webpack.config.js里面添加loader
 {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
 }
 3、安装axios
 cnpm install axios -S
 4、安装vue-router
 cnpm install vue-router -S
 5、关掉ESlint提示
 config/index.js里配置
useEslint: true, // 改为false即可