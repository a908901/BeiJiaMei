<template>
	<div class="chui_right" id="chui_right" :style="{width:num+'px'}">
		<div class="phone">
			<div class="right_main">
				<div class="need_main">
					<chui-shuff v-if="info.listShow"></chui-shuff>
					<head-list></head-list>
				</div>
				<!-- <chui-shuff v-if="info.listShowOne"></chui-shuff>-->
				<div @click="GotoPreservation()" class="Preservation">保存</div>
			</div>
		</div>     
				
	</div>
		
</template>
<style>
	.need_main{
		height:550px;overflow:scroll;
		margin-right: -10px;
		overflow-x:hidden;
		overflow-y:scroll;
	}
	
	.chui_right{
		position: absolute;
		height:850px;
		background: #fff;
		margin-left:300px;
			}
	.right_main{
		width:85%;
		margin:30px auto;
		padding-top: 100px;
		position: relative;
	}
	.phone{
			box-shadow: 0px 0px 0px 2px #aaa;
			background: #111;
			border-radius: 60px;
			width:420px;
			height:750px;
			margin:0 auto;
	}
	.Preservation{
		margin:20px auto;width:50px;border-radius:500px;background:#fff;height:50px;text-align:center;line-height:50px;
	}
	

</style>
<script type="text/javascript">
	import chuiShuff from '../weixin/ActivityPage/Shuff.vue';
	import headList from '../weixin/ActivityPage/headlist.vue';
	
    import { XHRPost,XHRGet } from '../../js/ajax.js';
    import { Hub } from '../../js/other.js';
   	//var Hup = new Vue();
    export default{
        data() {
            return {
               	num:'',
               	screenWidth:document.body.clientWidth,
               	info:{
               		listShow:false,
               		listShowOne:false
               	}         
            }
        },
        components: {
        	chuiShuff,
    		headList
    		},
        computed: {
         
        },
      	created() {
           // const _this = this;
           //  Hub.$on('change', function(val) {
           //  	 if(val == "轮播图" && _this.info.listShow == true){
           //  			 _this.info.listShowOne = true;
           //  			 console.log(8);
           //  		}else if(val == "轮播图"){
	          //       _this.info.listShow = true;
	          //       console.log(_this.info.listShow);
           //  		}else{
           //  			console.log('开发者');
           //  		}
           //  }) 
           //  Hub.$on('changeOne', function(val) {
           //  	if(_this.info.listShow == val){
           //  		_this.info.listShow = val;
           //  	}else{
           //  		_this.info.listShowOne = val;
           //  	}
           //  }) 
            const _this = this;
            Hub.$on('change', function(val) {
            	 if(val == "轮播图"){
	                _this.info.listShow = true;
	                console.log(_this.info.listShow);
            		}else{
            			console.log('开发者');
            		}
            }) 
            Hub.$on('changeOne', function(val) {
            		_this.info.listShow = val;
            }) 
            	
        },
        mounted () {
         	this.GotoWidth();
	        const that = this
	        window.onresize = () => {
	            return (() => {
	                window.screenWidth = document.body.clientWidth
	                that.screenWidth = window.screenWidth
	            })()
	        		}
	      
   		 },
   		watch: {
	          screenWidth (val) {
	              this.num = val-200-300-260;
	              console.log(this.num);
	          		}
      		},

        methods: {
        	//一进去就获取宽度
        	GotoWidth:function(){
				this.num = this.screenWidth-200-300-260;
				console.log(this.num);

        	},
        	Gototest:function(){
        		var box = document.getElementById('chui_right'); 
	       		alert(box.innerHTML);
        	},
        	//保存组件的状态到数据库
        	GotoPreservation:function(){
        			console.log(JSON.stringify(this.info));
        	}

        }
    }
   </script>