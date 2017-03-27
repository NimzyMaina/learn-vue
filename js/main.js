window.Event = new Vue({
	methods: {
		fire(event,data = null){
			this.$emit(event,data);
		},
		listen(event,callback) {
			this.$on(event,callback);
		}
	}
});


var coupon = Vue.component('coupon',{
	template: '<input placeholder="Enter coupon" @blur="onCouponApplied"/>',
	methods: {
		onCouponApplied() {
			Event.fire('applied');
		},
		lolo() {
			alert('Lolo babe')
		}
	},
	created () {
		Event.listen('dick', () => this.lolo());
	}
});

var app = new Vue({

	el: "#app",
	data: {
		couponApplied: false
	},
	methods:{
		onCouponApplied () {
			this.couponApplied = true
		},
		fire () {
			Event.fire('dick');
		}
	},
	created() {
		Event.listen('applied', () => alert('Handling it!'));
	}
});