<template>
		<div class="layui-layout layui-layout-admin">
		    <div class="layui-header" style="background:#fff;box-shadow: 0 1px 4px 0 rgba(51,69,54,.15);">
		        <div class="layui-logo">翠鸟快速建站</div>
		         <div class="layui-body_main dis_flex">
		        	<div class="edit" :class="{'bg-color-23262E':edit == 1}" @click="GotoEdit(1)">1.编辑</div>
		        	<div class="preview" :class="{'bg-color-23262E':edit == 2}" @click="GotoEdit(2)">2.发布</div>
		        </div>
		        <!-- 头部区域（可配合layui已有的水平导航） -->
		        <!-- <ul class="layui-nav layui-layout-left">
		            <li class="layui-nav-item" @click="Gotolist(1)" v-bind:class='{"bg-color-red":num == 1}'>编辑</li>
		            <li class="layui-nav-item" @click="Gotolist(2)" v-bind:class='{"bg-color-red":num == 2}'>预览</li>
		        </ul> -->
		       
		        <ul class="layui-nav layui-layout-right">
		            <li class="layui-nav-item">
		                <a @click="GotoDataShow()" style="color:#000;">
		                    <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
		                    贤心
		                </a>
		                <dl class="layui-nav-child" v-if="info.isAShow">
		                    <dd><a>基本资料</a></dd>
		                    <dd><a>安全设置</a></dd>
		                </dl>
		            </li>
		            <li class="layui-nav-item"><a href="" style="color:#000;">退出</a></li>
		        </ul>
		        <!--  <div style="margin-left:210px;height:60px;line-height:60px;color:#fff;">888</div> -->
		    </div>

		    <div class="layui-side layui-bg-black">
		        <div class="layui-side-scroll">
		            <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
		            <ul class="layui-nav layui-nav-tree"  lay-filter="test">
		                <li class="layui-nav-item layui-nav-itemed" v-for="(key,index_) in test" >
		                	<div @click="GotoAccordion(index_+1)">
		                    	<a class="" href="javascript:;">{{key.brigade}}</a>
		                    </div>
		                    <dl class="layui-nav-child">
		                        <dd v-for="(is,it) in test[index_].info" v-if="type == index_+1" @click="GotoTagPage(test[index_].info[it].pageID)"><a>{{is.content}}</a></dd>
		                        <!-- <dd><a href="javascript:;">列表二</a></dd> -->
		                    </dl>
		                </li>
		              
		            </ul>
		        </div>
		    </div>

		    <div class="layui-body" style="bottom:0;">
		        <!-- 内容主体区域 -->
		       <!--  <div class="layui-body_main dis_flex">
		        	<div class="edit" :class="{'bg-color-23262E':edit == 1}" @click="GotoEdit(1)">编辑</div>
		        	<div class="preview" :class="{'bg-color-23262E':edit == 2}" @click="GotoEdit(2)">发布</div>
		        </div> -->
		        <div class="dis_flex">
		        	<chui-footer></chui-footer>
		        	<chui-center></chui-center>
		        	<chui-right></chui-right>	
		        </div>
		        
		    </div>

		    
		</div>

</template>
<style type="text/css">
	/*公共样式*/
	.dis_flex{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.dis_no{
		display:none;
	}
	.bg-color-red{
		background: red;
	}
	.bg-color-23262E{
		background: #23262E;
		color:#fff;
	}
	/*.font01{font-size: 16px;}*/
	.font01{font-size: 0.15rem;}
	/*单页样式*/
	
	.layui-nav-item>.layui-nav-child{display: block;}
		.layui-body_main{
			width:2.4rem;
			margin:0 auto;
		}
	    .edit,.preview{
			width:1.2rem;
			height:60px;
			line-height:60px;
			text-align:center;
			font-size: 20px;
			}
		

	/*@media(max-width:1290px) {
		.layui-body_main{
			width:3.5rem;
			margin:0.15rem auto;
		}
	    .edit,.preview{
			width:1.5rem;
			height:40px;
			line-height:40px;
			border-radius:0.3rem;
			border:1px solid #ddd;
			text-align:center;
			}
		}
	@media(min-width:1290px) {
		.layui-body_main{
			width:2.5rem;
			margin:0.15rem auto;
		}
	    .edit,.preview{
			width:1.2rem;
			height:40px;
			line-height:40px;
			border-radius:0.2rem;
			border:1px solid #ddd;
			text-align:center;
			}
		}*/
	
</style>

<script type="text/javascript">
	import chuiFooter from '../common/footer.vue';
	import chuiCenter from '../common/Center.vue';
	import chuiRight from '../common/Right.vue';
    import { XHRPost,XHRGet } from '../../js/ajax.js';
    export default{
        data() {
            return {
                test:[
                	{brigade:'微信',info:[{content:'摄影单页',pageID:'1'},{content:'母婴单页',pageID:'2'}]},
                	{brigade:'电商',info:[{content:'母婴产品',pageID:'3'},{content:'生活用品',pageID:'4'}]},
                	{brigade:'门店',info:[{content:'超市活动',pageID:'5'},{content:'品牌活动',pageID:'6'}]},
                	{brigade:'医院',info:[{content:'医院官网',pageID:'7'},{content:'药品作用',pageID:'8'},{content:'医生简介',pageID:'12'}]},
                	{brigade:'学校',info:[{content:'学校官网',pageID:'9'},{content:'学校招生',pageID:'10'},{content:'学生就业',pageID:'11'}]}
                	
                ],
                info:{
                	isAShow:false	

                },
                edit:'1',
                type:'',
                arr:[],
                num:''
            }
        },
        components: {
        	chuiFooter,
        	chuiCenter,
        	chuiRight
    		},
        computed: {
           
        },
        mounted:function(){
				//this.Gototest();
				},
        methods: {
        	Gototest:function(){
        		var width = document.documentElement.clientWidth; 
				alert(width);
        	},
            //错误提示方法
            errorTip: function (msg) {
                layer.open({
                    content: msg,
                    btn: ['确定'],
                    yes: function () {
                        layer.closeAll();
                    }
                });
            },
            //成功提示
            successTip: function (msg) {
                const _this = this;
                layer.open({
                    content: msg,
                    btn: ['确定'],
                    yes: function () {
                        XHRGet('/api/MyCenter/logOut', {}, function () {
                           window.location.href = '/index/login_register/login.html'
                           })
                        layer.closeAll();
                    }
                });
            },
            //手风琴
           GotoAccordion:function(ret){
           		if(this.type == ret){
           	          //this.type = ret;
           	          this.type = '';
           	      }else{
           	      		this.type = ret;
     	      }
            		// for(var a=0;a<this.test.length;a++){
            		// 		this.test[a].selected = false;
            		// }
            		
            		// if(this.test[ret].selected == false){
            		// 		this.test[ret].selected = true;
            		// 		$(".layui-nav-item>layui-nav-child").eq(ret).addClass('dis_no');
            		// 		}else{
            		// 			this.test[ret].selected = false;;
            		// 		}
            		//  alert(JSON.stringify(this.test));


            },
            Gotolist:function(ret){
            	this.num = ret;
            },
            GotoDataShow:function(){
            	if(this.info.isAShow == false){
	            	this.info.isAShow = true;
	            }else{
	            	this.info.isAShow = false;
	            }

            },
            GotoEdit:function(ret){
            	this.edit = ret;
            },
            GotoTagPage:function(ret){
            	alert(ret);

            }
           

        }
    }
</script>