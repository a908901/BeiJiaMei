<template>
	<div class="chui_center">
		<div class="chui_center_main">
			<div class="chui_center_main_header">
				<span>图片数量</span>
				<div class="center_num">{{one}}</div>
				<div class="center_pic" @click="GotoListShow()"><img src="../../icon/CN_down.png"></div>
				<div class="center_list" v-if="info.listShow">
					<div class="center_list_div" v-for="(key,index_) in num" @click="GotoSelect(num[index_].one)">{{key.one}}</div>
				</div>
			</div>
			<!--图片展示-->
			<div class="pic_show" v-if="info.twoShow == 1">
				<div class="pic_show_two" v-bind:class="{ 'bg-color-2bc': colorOne }">
					<div>1</div>
				</div>
			</div>
			<div class="pic_show" v-if="info.twoShow == 2">
				<div class="pic_show_three" style="margin-right:2%;" v-bind:class="{ 'bg-color-2bc': colorOne }">
					<div>1</div>
				</div>
				<div class="pic_show_three" v-bind:class="{ 'bg-color-2bc': colorTwo}">
					<div>2</div>
				</div>
			</div>
			<div class="pic_show" v-if="info.twoShow == 3">
				<div class="pic_show_four" style="margin-right:2%;" v-bind:class="{ 'bg-color-2bc': colorOne }">
					<div>1</div>
				</div>
				<div class="pic_show_four" style="margin-right:2%;" v-bind:class="{ 'bg-color-2bc': colorTwo}">
					<div>2</div>
				</div>
				<div class="pic_show_four" v-bind:class="{ 'bg-color-2bc': colorThree}">
					<div>3</div>
				</div>
			</div>
			<!--图片上传-->
			<div class="upload_pic" v-on:mouseenter="uploadOne()" v-on:mouseleave="updownOne()" > 
				1.上传图片
				<input type="file" @change="onFileChange">
			</div>
			<div class="upload_pic"  v-on:mouseenter="uploadTwo()" v-on:mouseleave="updownTwo()" v-if="info.twoShow == 2||info.twoShow == 3">
		 		2.上传图片
				<input type="file"  @change="onFileChangetwo" >
			</div>
			<div class="upload_pic" v-if="info.twoShow == 3" v-on:mouseenter="uploadThree()" v-on:mouseleave="updownThree()" >
				3.上传图片
				<input type="file"  @change="onFileChangethree">
			</div>
			
		</div>
	</div>
</template>
<style>
	/*全局样式*/
	.color-fff{
		color:#ddd;
		/*background:#02B2FC;*/
	}
	.pic_show>.bg-color-2bc{
		background:#02B2FC;
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
		height:90px;
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
	.pic_show{
		margin:10px auto;
		width:90%;
		height:100px;
		/*border:1px solid #ddd;*/
		display: flex;
	}
	.pic_show_two{
		width:100%;height:100px;background:#6FCEF5;
	}
	.pic_show_two>div{
		width:30px;height:30px;border:2px solid #fff;border-radius: 30px;line-height:30px;text-align:center;margin:35px auto;color:#fff;font-size:18px;
		}
	.pic_show_three{
		width:49%;height:100px;background:#6FCEF5;
	}
	.pic_show_three>div{
		width:30px;height:30px;border:2px solid #fff;border-radius: 30px;line-height:30px;text-align:center;margin:35px auto;color:#fff;font-size:18px;
		}
	.pic_show_four{
		width:32%;height:100px;background:#6FCEF5;
	}
	.pic_show_four>div{
		width:30px;height:30px;border:2px solid #fff;border-radius: 30px;line-height:30px;text-align:center;margin:35px auto;color:#fff;font-size:18px;
		}
	.upload_pic{
		width:90%;height:30px;margin:20px auto;background:#E8F7FD;text-align:center;line-height:30px;color:#9B9EA0;position:relative;

	}
	.upload_pic:hover{
	background:#B2E8F7;
		}
	.upload_pic>input{
		opacity:0;width:100%;height:30px;position:absolute;top:0;left:0;
	}
</style>
<script type="text/javascript">
	import { Hub } from '../../js/other.js';
    export default{
        data() {
            return {
               	info:{
               		listShow:false,
               		twoShow:1
               	},
               	num:[
               		{one:1},
               		{one:2},
               		{one:3}
               	],
               	one:1,
               	pic:{
               		imagestwo:'',
               		imagesthree:'',
               		imagesfour:''
               	},
               	colorOne:false,
               	colorTwo:false,
               	colorThree:false,
               	imgClone:[] 	
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
       			this.one = ret;
       			if(this.info.listShow == false){
		        		this.info.listShow = true;
		        	}else{
		        		this.info.listShow = false;
		        	}

		       if(ret == 1){
		        	this.info.twoShow = 1;
		        }else if(ret == 2){
		        	this.info.twoShow = 2;
		        }else{
		        	this.info.twoShow = 3;
		        }
       		},
       		//上传图片
       		onFileChange(e){
		                var files = e.target.files || e.dataTransfer.files;
		                if (!files.length)return; 
		                this.createImage(files);
		           },
		    createImage(file){
		                if(typeof FileReader==='undefined'){
		                    alert('您的浏览器不支持图片上传，请升级您的浏览器');
		                    return false;
		                }
		                var image = new Image();       
		                var vm = this;
		                var leng=file.length;
		                 this.testimg = file[0];
		                for(var i=0;i<leng;i++){
		                    var reader = new FileReader();
		                    reader.readAsDataURL(file[i]); 
		                    
		                    reader.onload =function(e){
		                    	vm.pic.imagestwo = encodeURI(e.target.result);
		                    	// vm.imgClone.push(encodeURI(e.target.result));
		                    	// console.log(JSON.stringify(vm.imgClone));
		                    	Hub.$emit('upPic',vm.pic.imagestwo);
		                    };                 
		                }   
		              
		            },
            //笨方法	
            onFileChangetwo(e){
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)return; 
                this.createImagetwo(files);
           },
		    createImagetwo(file){
		                if(typeof FileReader==='undefined'){
		                    alert('您的浏览器不支持图片上传，请升级您的浏览器');
		                    return false;
		                }
		                var image = new Image();       
		                var vm = this;
		                var leng=file.length;
		                 this.testimg = file[0];
		                for(var i=0;i<leng;i++){
		                    var reader = new FileReader();
		                    reader.readAsDataURL(file[i]); 
		                    reader.onload =function(e){
		                    	vm.pic.imagesthree = encodeURI(e.target.result);
		                    	//console.log(vm.pic.imagesthree);
		                    	Hub.$emit('upPicTwo',vm.pic.imagesthree);
		                    };                 
		                }   
		              
		            },
		     //继续笨方法	
		            onFileChangethree(e){
		                var files = e.target.files || e.dataTransfer.files;
		                if (!files.length)return; 
		                this.createImagethree(files);
		           },
				    createImagethree(file){
				                if(typeof FileReader==='undefined'){
				                    alert('您的浏览器不支持图片上传，请升级您的浏览器');
				                    return false;
				                }
				                var image = new Image();       
				                var vm = this;
				                var leng=file.length;
				                 this.testimg = file[0];
				                for(var i=0;i<leng;i++){
				                    var reader = new FileReader();
				                    reader.readAsDataURL(file[i]); 
				                    reader.onload =function(e){
				                    	vm.pic.imagesfour = encodeURI(e.target.result);
				                    	//console.log(vm.pic.imagesthree);
				                    	Hub.$emit('upPicThree',vm.pic.imagesfour);
				                    };                 
				                }   
				              
				            },
		      //鼠标移上去
		            uploadOne:function(){
		            	this.colorOne = true;
		            },
		            updownOne:function(){
		            	this.colorOne = false;
		            },
		            uploadTwo:function(){
		            	this.colorTwo = true;
		            },
		            updownTwo:function(){
		            	this.colorTwo= false;
		            },
		            uploadThree:function(){
		            	this.colorThree = true;
		            },
		            updownThree:function(){
		            	this.colorThree= false;
		            }
		    //*********************************

    	}
    }
   </script>