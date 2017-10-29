import Vue from 'vue';
import axios from 'axios';
//import '../mock/test.js';
import layer from '../lib/layer.js';
import '../lib/layer.css';
import Center from 'components/common/Center.vue';
import Test from 'components/weixin/ActivityPage/headlist.vue';

const routes = [
    { path: '/', component: Center }, 
    
];
//const routes = [
//    { path: '/', component: Index },
//    { path: '/main', component: Main },
//    { path: '/name', component: Name },
//    { path: '/phone', component: Phone},
//    { path: '/inviter', component: Inviter},
//    { path: '/phone01', component: Phone01 },
//    { path: '/mima', component: Mima },
//    { path: '/dlmima', component: Dlmima },
//    //{ path: '/zfmima', component: Zfmima},
//    //{ path: '/zfmima01', component: Zfmima01},
//    { path: '/zfmima02', component: Zfmima02},
//    //{ path: '/zfmima03', component: Zfmima03},
//    //{ path: '/zfmima04', component: Zfmima04},
//    { path: '/connection', component: Connection}
//
//];

const router = new VueRouter({
     //ES6缩写语法，相当于routes:routes
    routes

});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');