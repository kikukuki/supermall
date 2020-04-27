import axios from 'axios'

//第一种：
// export function Request(config,success,failure){
//     //1、创建实例
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     //发送请求
//     instance (config)
//     .then(res=>{
//         //成功后回调函数
//         success(res)
//     })
//     .catch(err=>{
//         //失败后回调函数
//         failure(err)
//     })
// }

//第二种

// export function Request(config){
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     //发送请求
//     instance (config.baseConfig)
//     .then(res=>{
//         //成功后回调函数
//         config.success(res)
//     })
//     .catch(err=>{
//         //失败后回调函数
//         config.failure(err)
//     })
// }

//第三种promise
export function Request(config)
{
    return new Promise((resolve,reject)=>{
         //1、创建实例
    const instance=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //2、拦截器
    //请求拦截
    instance.interceptors.request.use(res=>{
        console.log(res)
        //拦截成功后返回
        return res
    },err=>{
        console.log(err)
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res)
        //拦截成功后返回数据
        return res.data
    },err=>{
        console.log(err)
    })

    //3、发送请求   这里可以直接返回 return instance (config)
    instance (config)
    .then(res=>{
        //成功后回调函数
        resolve(res)
    })
    .catch(err=>{
        //失败后回调函数
        reject(err)
    })

    // return instance (config)
    })
}