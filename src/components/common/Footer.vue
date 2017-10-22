<template>
	<div class="footer_left">
		<div class="footer_left_main">
			<div class="f_left_header">
				<div class="header_title">模块列表</div> 
				<div class="header_input">
					<input type="" placeholder="搜索模块名称">
					<img src="../../icon/CN_galss.png" style="width:20px;height:20px;background-size:100% 100%;position:absolute;top:4px;left:5px;">
								
				</div>
			</div>
			<div class="f_left_main" v-for="(key,index_) in img" @click="GotoSelect(index_)" :class="{'bg-color-ddd':info.type == index_}">
				<img :src="key.pic">
				<div>{{key.name}}</div>
			</div>
			
		</div>
	</div>
</template>
<style>
	/*公共样式*/
	.bg-color-ddd{
		background: #ddd;
	}
	/**/
	.footer_left{
		width:300px;
		height:850px;
		border:1px solid #ddd;
		background: #E9EFF3;
		position: fixed;	
	}	
	.header_title{
		border-left: 3px solid #30c15a;
	    line-height:18px;
	    padding: 1px 0 0 6px;
	    margin:5px 0 0 5px;
	}
	.header_input{
		width:88%;
		margin:16px auto; 
		position: relative;
	}
	.header_input>input{
		width:85%;
		height:26px;
		padding-left:25px;
		border:1px solid #ddd;
		border-radius: 555px;
		
	}
	.footer_left_main{
		width:300px;
		padding-top:3px;
	}
	.f_left_header{
		width:100%;
		height:100px;
	}
	/****/
	.f_left_main{
		width:73px;
		height:70px;
		border-bottom:1px solid #ddd;
		border-right:1px solid #ddd;
		display: inline-block;
		background: #fff;
	}
	.f_left_main>div{
		text-align: center;
		font-size: 14px;
	}
	.f_left_main>img{
		width:40%;
		height:30px;
		background-size:100% 100%;
		margin:6px 30%;
	}
	.f_left_main:hover{
		border:1px solid #02B2FC;
	}







	/*.header_title{
		border-left: 0.025rem solid #30c15a;
	    line-height:0.12rem;
	    padding: 0.01rem 0 0 0.05rem;
	    margin:0.05rem 0 0 0.05rem;
	}
	.header_input{
		width:88%;
		margin:16px auto; 
		position: relative;
	}
	.header_input>input{
		width:85%;
		height:26px;
		padding-left:25px;
		border:1px solid #ddd;
		border-radius: 555px;
		
	}
	.footer_left_main{
		width:100%;
		padding-top:3px;
	}
	.f_left_header{
		width:100%;
		height:100px;
		border-bottom: 1px solid #ddd;
	}
	.f_left_main{
		width:24.6%;
		height:0.45rem;
		border-bottom:1px solid #ddd;
		border-right:1% solid #ddd;
		display: inline-block;
	}*/
	/*.f_left_main:hover{
		background: #ddd;
		color:#fff;
	}*/
	
	/*.f_left_main>div{
		text-align: center;
		font-size: 0.1rem;
	}
	.f_left_main>img{
		width:40%;
		height:0.15rem;
		background-size:100% 100%;
		margin:0.06rem 30%;
		color:red;
	}*/
	

</style>
<script>
	import { XHRPost,XHRGet } from '../../js/ajax.js';
    export default{
        data() {
            return {
                img:[
	                	{pic:'../../icon/CN_roast.png',name:"轮播图"},
		                {pic:'../../icon/CN_title.png',name:"字体"},
		                {pic:'../../icon/CN_header.png',name:"头像"},
		                {pic:'../../icon/CN_gift.png',name:"礼物"},
		                {pic:'../../icon/CN_button.png',name:"底部按钮"}
	                	],
	                info:{
	                	type:"0"
	                }
            }
        },
         components: {
        	
    		},
        computed: {
           
        },
        methods: {
        	GotoSelect:function(ret){
        		this.info.type = ret;
        	}
           
        }
    }
</script>