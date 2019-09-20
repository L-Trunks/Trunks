import QS from 'qs'; 
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/api';//本地
// axios.defaults.baseURL = 'http://149.129.59.121:3000/api';//正式服

axios.defaults.withCredentials = true 
/**
 * get方法，对应get请求
 * @param {String} url [url地址]
 * @param {Object} params [参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params:params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [url地址] 
 * @param {Object} params [参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        console.log(params)
         axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}