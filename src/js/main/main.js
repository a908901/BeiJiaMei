import Vue from 'vue';
import axios from 'axios';
// import layer from '../lib/layer.js';
// import '../lib/layer.css';
import main from 'components/main/main.vue';
const routes = [
    { path: '/main', component: main }
];

const router = new VueRouter({
     //ES6缩写语法，相当于routes:routes
    routes

});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');