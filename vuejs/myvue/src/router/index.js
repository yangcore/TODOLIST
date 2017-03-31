//import Vue from 'vue'
//import VueRouter from 'vue-router'
//import Hello from '@/components/Hello'
var Vue=require('vue');
var VueRouter = require('vue-router');
var Hello=require('../components/Hello');
Vue.use(VueRouter);


//export default new VueRouter({
//routes: [
//  {
//    path: '/',
//    name: 'Hello',
//    component: Hello
//  }
//]
//})
//console.info(VueRouter)
module.exports=new VueRouter({
routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
]
})
	