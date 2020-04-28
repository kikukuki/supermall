import axios from 'axios'



//第三种promise
export function Request(config) {
    return new Promise((resolve, reject) => {
        //1、创建实例
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        //2、拦截器
        //请求拦截
        instance.interceptors.request.use(res => {
            //拦截成功后返回
            return res
        }, err => {
            return err
        })

        //响应拦截
        instance.interceptors.response.use(res => {
            //拦截成功后返回数据
            return res
        }, err => {
            return err
        })

        //3、发送请求   这里可以直接返回 return instance (config)
        instance(config)
            .then(res => {
                //成功后回调函数
                resolve(res)
            })
            .catch(err => {
                //失败后回调函数
                reject(err)
            })

        // instance(config).then(res => {
        //     resolve(res)
        // }).catch(err => {
        //     reject(err)
        // })
    })
}