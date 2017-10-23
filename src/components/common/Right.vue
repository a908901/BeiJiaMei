<template>
	<div class="chui_center">
		<div class="chui_center_main">
			<div class="chui_center_main_header">
				<span>图片数量</span>
				<div class="center_num">{{one}}</div>
				<div class="center_pic" @click="GotoListShow()"><img src="../../icon/CN_down.png"></div>
				<div class="center_list" v-if="info.listShow">
					<div class="center_list_div" v-for="(key,index_) in num" @click="GotoSelect(num[index_].one)">{{key.one}}</div>
					<!-- <div class="center_list_div">3</div>
					<div class="center_list_div">4</div>
					<div class="center_list_div">5</div> -->
				</div>
				
			</div>
		</div>
	</div>
</template>
<style>
	/*全局样式*/
	.color-fff{
		color:#ddd;
	}
	/*000*/
	.chui_center{
		width:260px;
		height:850px;
		background:#221812;
		position: fixed;
		top:60px;
		right:0;
	}	
	.chui_center_main{
		width:90%;
		height:500px;
		margin:10px auto;
		background: #fff;
	}
	.chui_center_main_header{
		width:100%;
		height:30px;
		line-height: 30px;
		box-shadow: 0 1px 4px 0 rgba(51,69,54,.15);
		position: relative;
	}
	.chui_center_main_header>span{
		margin-left:10px;
	}
	.center_num{
		display:inline-block;
		width:16px;
		text-align: center;
		margin-left:15px;
	}
	.center_pic{
		display:inline-block;
		width:16px;
		text-align: center;
	}
	.chui_center_main_header>.center_pic>img{
		width:100%;
	}
	.center_list{
		display:inline-block;
		position: absolute;
		background:#fff;
		width:80px;
		height:120px;
		top:25px;
		left:60px;
		box-shadow: 0 1px 4px 0 rgba(51,69,54,.15);

	}
	.center_list_div{
		width:100%;
		height:29px;
		border-bottom: 1px solid #ddd;
		text-align: center;
	}
	.center_list_div:hover{
		border-left: 2px solid #30c15a;
	}
</style>
<script type="text/javascript">
	
    export default{
        data() {
            return {
               	info:{
               		listShow:false
               	},
               	num:[
               		{one:2},
               		{one:3},
               		{one:4},
               		{one:5}
               	],
               	one:2     	
            }
        },
        computed: {
         
        },
       
   		
        methods: {
        	GotoListShow:function(){
        		if(this.info.listShow == false){
		        		this.info.listShow = true;
		        	}else{
		        		this.info.listShow = false;
		        	}
       			 },

       		GotoSelect:function(ret){
       			//alert(ret);
       			this.one = ret;
       			if(this.info.listShow == false){
		        		this.info.listShow = true;
		        	}else{
		        		this.info.listShow = false;
		        	}
       		}	 
    	}
    }
   </script>