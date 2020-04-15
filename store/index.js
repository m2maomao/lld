import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		accountInfo: {
			avatar: null,
			name: null,
			gender: null,
			mobile: null,
			dept: null,
			job: null
		}
	},
	mutations: {
		setAccountInfo(state, provider) {
			state.accountInfo.avatar = provider.avatar
			state.accountInfo.name = provider.name
			state.accountInfo.gender = provider.gender
			state.accountInfo.mobile = provider.mobile
			state.accountInfo.dept = provider.dept
			state.accountInfo.job = provider.job
			// 写入缓存
			uni.setStorage({
				key: 'accountInfo',
				data: state.accountInfo
			})
		},
		setAvatar(state, provider) {
			state.accountInfo.avatar = provider.avatar
		},
		setGender(state, provider) {
			state.accountInfo.gender = provider.gender
		},
		setName(state, provider) {
			state.accountInfo.name = provider.name
		}
	},
	action: {}
})

export default store