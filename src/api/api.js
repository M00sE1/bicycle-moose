import axios from "axios"
import { Notification } from 'element-ui';
import router from "../router"
const baseUrl = "http://localhost:6712/api"

axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    var message = "";
    switch (error.response.status) {
        case 401:
            message: "授权错误"
            router.push({ path: "/login" });
            break;
    }
    Notification({
        title: "出错了",
        type: "error",
        message: message

    });
    return Promise.reject(error);
});

/*用户登陆*/
export const loginUserUrl = params => {
    var url = baseUrl + "/users/login";
    return axios.post(url, params);
}

/*获取用户数据*/
export const getUsersUrl = params => {
    var url = baseUrl + "/users/get";
    return axios.post(url, params);
}

/*获取单车数据*/
export const getBikesUrl = params => {
    var url = baseUrl + "/bikes/get";
    return axios.post(url, params);
}

/*获取单车详细定位*/

export const getBikesDetailUrl = params => {
    var url = baseUrl + "/bikes/GetBikesDetail";
    return axios.post(url, params);
}

/* 获取行程数据 */

// export const getRiderListUrl=params=>{
//     var url=baseUrl+"/rider/GetRiderList";
//     return axios.post(url,params);
// }

// /*读取行程详细数据*/

// export const getRiderDetail=params=>{
//     var url=baseUrl+"/rider/GetRiderDetail";
//     return axios.post(url,params);
// }

/* 获取用户数据统计 */
export const getUserDataUrl = params => {
    var url = baseUrl + "/users/GetUserData";
    return axios.post(url, params);
}

/* 获取行程数据统计 */
export const getBikesDataUrl = params => {
    var url = baseUrl + "/bikes/getBikesData";
    return axios.post(url, params);
}
