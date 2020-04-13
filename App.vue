<script>
	import { mapState, mapMutations} from 'vuex';
	export default {
		onLaunch: function() {
			let _accountInfo = uni.getStorageSync('accountInfo');
			if(_accountInfo) {
				uni.getStorage({
					key: 'accountInfo',
					success:(res) => {
						this.setAccountInfo(res.data)
					}
				})
			}
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		},
		onUnload:function() {
			
		},
		methods: {
			...mapMutations(['setAccountInfo'])
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
