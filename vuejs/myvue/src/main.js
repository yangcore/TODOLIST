var Vue=require('vue');
var router=require('./router/index');
var App=require('./App');
Vue.config.productionTip = false
module.exports= new Vue({
	el: '#app',
	router:require('./router'),
	template: '<App/>',
	components: { App:App }
})
