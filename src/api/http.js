'use strict'

import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
    // loading
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

function checkStatus(response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
        // 如果不需要除了data之外的数据，可以直接 return response.data
    }
    // 异常状态下，把错误信息返回去
    return {
        response: response,
        status: response.status,
        errorMessage: response.data.errorMessage,
    }
}

function checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        console.log(res.msg)
    }
    if (res.data && (!res.data.success)) {
        //    alert(res.data.error_msg)
    }
    return res
}
const baseAddress = {
    // officialAddress: 'https://www.onewho.net/wanhu-api/api/v2',
    // testAddress: 'http://106.14.185.249:8080/manage-api/api/v2',
    // pushMessageAddress: 'http://139.224.19.60:8081/manage-service/api',
    hostAddress: 'http://dingtalk.chamrich.com/api'
}
export default {
    post(url, data) {
        return axios({
            method: 'post',
            baseURL: baseAddress.hostAddress,
            url,
            // data: qs.stringify(data),
            data,
            timeout: 10000,
            headers: {
                'token': localStorage.getItem('token')
                // 'X-Requested-With': 'XMLHttpRequest',
                // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }).then((res) => {
            return checkCode(res)
        })
    },
    get(url, params) {
        return axios({
            method: 'get',
            baseURL: baseAddress.hostAddress,
            url,
            params,
            timeout: 10000,
            headers: {
                // 'token': 'a1ab3c31-3887-4293-a955-876334c125ee'
                'token': localStorage.getItem('token')
                // 'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    }
}
