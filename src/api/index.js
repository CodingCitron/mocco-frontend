import axios from 'axios'
import router from '@/router'

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    baseURL: process.env.VUE_APP_API_URL
})

// 요청 인터셉터 추가하기
instance.interceptors.request.use(function (config) {
    // 요청 보내기 전 수행
    // console.time('api 요청')

        return config
    }, function (error) {
    // 요청 오류가 있는 작업 수행

    return Promise.reject(error)
})

// 응답 인터셉터 추가하기
instance.interceptors.response.use(function (response) {
    // 2xx 범위

    // console.timeEnd('api 요청')
        return response
    }, async function (error) { // 응답 오류가 있는 작업 수행
    // 2xx 외의 범위

    return Promise.reject(error)
})

export default instance