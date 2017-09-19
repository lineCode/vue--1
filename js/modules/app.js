define(['modules/home/home','modules/list/list','modules/product/product'],function(HomeComponent,ListComponent,ProductComponent){
	// 注册组件product
	Vue.component('home',HomeComponent);
	Vue.component('list',ListComponent);
	Vue.component('product',ProductComponent);
	var app = new Vue({
		el:"#app",
		data:{
			view:'home',
			// searchKey:"",
			// myKey:""
		},
	})
	
	return app
})