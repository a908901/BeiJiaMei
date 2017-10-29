import Vue from 'vue';
import axios from 'axios';
//import '../mock/test.js';
import layer from '../lib/layer.js';
import '../lib/layer.css';
import Login from 'components/login/login.vue';
import Forgot from 'components/login/forgot.vue';
import Register from 'components/login/register.vue';
import Index from 'components/index/index.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/forgot', component: Forgot},
    { path: '/index', component: Index},
    { path: '/register', component: Register}
];


const router = new VueRouter({
     //ES6缩写语法，相当于routes:routes
    routes

});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');