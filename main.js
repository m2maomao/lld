import Vue from 'vue'
import App from './App'
import { formatDate, goto, locationConvert, getImage } from './libs/tools.js'

Vue.config.productionTip = false

App.mpType = 'app'

// 挂载全局时间格式化方法
Vue.prototype.formatTime = (t) => {
	return formatDate(t)
}

// 全局跳转方法
Vue.prototype.goto = (url, params) => {
	goto(url, params)
}

// 地区转换
Vue.prototype.locationConvert = (province, city, district) => {
	return locationConvert(province, city, district)
}

// 图片处理
Vue.prototype.getImage = (path) => {
	return getImage(path)
}

const app = new Vue({
    ...App
})
app.$mount()
