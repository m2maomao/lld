import {API_ROOT} from './config.js'
// uni-app请求封装
export default class Request {
	http(router, data = {}, method) {
		let header = {
			'context-type': 'application/json',
			'Authorization': 'Bearer ' + uni.getStorageSync('token')
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
