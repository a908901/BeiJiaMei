<template>
	<div class="chui_right" :style="{width:num+'px'}">
		<div>预览页</div>
		<div class="right_main">
			<chui-shuff></chui-shuff>
		</div>
	</div>
</template>
<style>
	.chui_right{
		position: absolute;
		height:850px;
		background: #fff;
		margin-left:300px;
			}
	/*.right_main{
		width:100%;
		height:1rem;
		background: red;
	}
	*/
/*	@media screen and (min-width: 1523px) {
		.chui_right{
			position: absolute;
			width:5rem;
			height:850px;
			background: #fff;
			background: red;
			margin-left:300px;
				}
	}*/
</style>
<script type="text/javascript">
	import chuiShuff from '../weixin/ActivityPage/Shuff.vue';
    import { XHRPost,XHRGet } from '../../js/ajax.js';
    var width = document.documentElement.clientWidth; 
    export default{
        data() {
            return {
               	num:'',
               	screenWidth:document.body.clientWidth  
         
            }
        },
        components: {
        	chuiShuff
    		},
        computed: {
         
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

        	}

           

        }
    }