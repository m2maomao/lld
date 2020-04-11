import {API_ROOT} from './config.js'
// uni-app请求封装
export default class Request {
	http(router, data = {}, method) {
		let header = {
			'context-type': 'application/json',
			'Authorization': 'Bearer '+uni.getStorageSync('token')|| 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0YWNjb3VudCIsImNyZWF0ZWQiOjE1ODY1ODg4MzE5NzYsImV4cCI6MTU4NzE5MzYzMX0.CngxCvDZyYqWuxt0qcJtSCTNUS3KUGNJhq6_magr7cjGqASBx7MkKFa0pSnFzHxyrsDT5bzgniZNVGS0YREtSg'
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
							icon:'none',
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
