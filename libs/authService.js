export function isLogin () {
	return uni.getStorageSync("token")
}