import axios from 'axios';
import NProgress from 'nprogress';
import '../../static/css/progress.css';
import store from "../vuex/store";
import {getCookie} from "../common";
import myApi from "../url/api";
import QI_NIU_CONFIG from "./QI_NIU_CONFIG";

//页面头部进度条
NProgress.configure({ showSpinner: false, ease: 'ease', speed: 800, trickleSpeed: 80 })

let questTimer = 0;
let backTimer = 0;

/**
 * 总请求
 * @param method
 * @param url
 * @param data
 * @param params
 * @param config
 * @returns {Promise<any>}
 */
export const AxiosConfig = function (method, url, {data = {},params = {}}, config = {}) {
  const token = getCookie('token');
  const Authorization = token ? `Bearer ${token}` : '';

  if (config.loadingBar) {
    if (NProgress.isStarted()) {
      NProgress.done(true);
    }
    NProgress.start();
  }

  const headers = config.headers || {};

  return new Promise((resolve, reject) => {
    if (!window.navigator.onLine) {
      store.dispatch('changeOffline', true);
      if (backTimer >= questTimer) {
        NProgress.done();
      }
      return reject('无网络');
    }
    questTimer++;
    axios({
      method,
      url,
      data,
      params,
      headers:{
        Authorization,
        ...headers
      }
    })
      .then(response => {
        if(response.status === 200){
          try {
            //替换错误数据图片域名
            const back_data = JSON.stringify(response.data).replace(/http:\/\/p31zexqbd.bkt.clouddn.com/g,QI_NIU_CONFIG.FILE_URL_PREFIX);
            response.data = JSON.parse(back_data);
          }catch (e) {
            console.log(e)

          }
          resolve(response);
        }else {
          reject(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        const response = error.response || {config:{},status:500}
        const url = response.config.url ? response.config.url : (error.config.url||'XXXXXXXXXXXXXXXX');
        if (response.status === 401) {
          const urls = [myApi("login"),myApi('allWarning')];
          if (urls.indexOf(url) === -1) {
            store.dispatch('changeIsLogin', true);
          }
        }
        reject(response.data);
      })
      .finally(() => {
        backTimer++;
        if (backTimer >= questTimer) {
          NProgress.done();
        }
      })
  });
};