import { CDN_ROOT } from '../api/config.js'

// 时间格式化
export function formatDate (now) {
	var date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
		minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
		second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	month >= 1 && month <= 9 ? (month = "0" + month) : "";
	day >= 0 && day <= 9 ? (day = "0" + day) : "";
	var timer = year + '-' + month + '-' + day;
	return timer;
}

// 全局跳转
export function goto (url, data) {
	console.log(url, data)
	url = url + (url.indexOf('?') < 0 ? '?' : '&') + param(data)
	uni.navigateTo({
		url
	})
}

function param(data) {
	let url = ''
	for(let k in data) {
		let value = data[k] !== 'undefined' ? data[k] : '';
		 url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
}

// 省市区转换
export function locationConvert (province, city, district) {
	if(province === city) {
		return `${city}·${district}`
	} else {
		return `${province}·${city}`
	}
}

// 图片处理
export const getImage = (path) => {
  if (path) {
    if (path.indexOf('http://') === 0 || path.indexOf('https://') === 0) {
      return path
    }
    let param = ''
    let objSize = {}

    return CDN_ROOT + path + param
  } else {
    return null
  }
}


