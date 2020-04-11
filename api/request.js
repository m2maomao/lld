import {API_ROOT} from './config.js'
// uni-app请求封装
export default class Request {
	http(router, data = {}, method) {
		let header = {
			'context-type': 'application/json',
			'Authorization': 'Bearer '+uni.getStorageSync('token')|| 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0YWNjb3VudCIsImNyZWF0ZWQiOjE1ODY1MjM5NTI3NDUsImV4cCI6MTU4NzEyODc1Mn0.flaOMlLbTmgPWludAeVPb6SKEY1m1Q-wVwAR3nsu0uvdj3qgaURysBGtqk8IEhEJ4Hin8ghazJL9z7sOibv8-w'
		}
		// 返回promise
		return new Promise((resolve, reject) => {
			// 请求
			uni.request({
				header,
				url: `${API_ROOT}${router}`,
				data: data,
				method: method,
				success: (res) => {
					// 拦截，并弹窗
					if (res.data.code !== 'OK') {
						uni.showToast({
							title: res.data.message
						})
						reject()
					} else {
							resolve(res.data)
					}
				}
			})
		})
	}
}
