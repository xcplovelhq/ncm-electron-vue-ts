import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import store from '../render/store';
// import { getStorage, deleteStorage } from '../render/lib/store';
const serve = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
    responseType: 'json'
});
// 添加请求拦截器

serve.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    error => {
        return Promise.resolve(error);
    }
);
// 添加响应拦截器
serve.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    error => {
        // 对响应错误做点什么
        // 需要登录
        if (error.response.status === 301) {
            // if (getStorage('userInfo')) {
            //     deleteStorage('userInfo');
            //     deleteStorage('likeSongSheet');
            //     store.commit('SET_USER_INFO', {});
            //     store.commit('GET_USER_SONG_SHEET', []);
            // }
        }
        return Promise.reject(error);
    }
);
export default {
    get(url: string, params?: unknown) {
        return Promise.resolve(
            serve
                .get(url, {
                    params
                })
                .then((response: AxiosResponse<ResponseData<T>>) => {
                    resolve(response.data);
                })
                .catch(err => {
                    return err.response;
                })
        );
    },
    post(url: string, params?: unknown, config?: AxiosRequestConfig) {
        return Promise.resolve(
            serve.post(url, data, config).catch(err => {
                return err.response;
            })
        );
    }
};
