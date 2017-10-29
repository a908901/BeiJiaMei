<template>
  <div class="jin-wrap" >
  	<div class="swiper-container" v-on:mouseenter="dataDetails()" v-on:mouseleave="hiddenDetail()">
        <div class="del" @click="GotoSelect()" v-if="info.delShow">X</div>
  	    <div class="swiper-wrapper" >
  	        <div class="swiper-slide" v-for="key in img">
  	            <div class="swiper_pic"   >
                    <img :src="key.pic" style="width:100%;height:100%;border:0;"> 
                </div>
  	        </div>
  	    </div>
  	    <div class="swiper-pagination"></div>
  	</div>
  </div> 
</template>
<style type="text/css">
    .swiper-slide{
      width:100% !important;
    }
		.swiper_pic{
			height:250px;background-size: 100% 100%;
		}
    .del{
      width:20px;height:20px;line-height:20px;text-align:center;background:red;border-radius:2000px;position:absolute;top:0px;right:0px;z-index:9999;
      color:#fff;
    }
</style>

<script>
   import { Hub } from '../../../js/other.js';
    export default{
        data() {
            return {
               	img:[
               		{pic:'../../../images/1.jpg'},
               		{pic:'../../../images/2.jpg'},
               		{pic:'../../../images/1.jpg'}
               	],
                info:{
                  listShow:false,
                  delShow:false
                },
                imgClone:[]  
            }
        },
        created() {
          const _this = this;
          //图片1
          Hub.$on('upPic', function(val) {
             //console.log(val);
             _this.img[0].pic =  val;
             // alert(JSON.stringify(_this.img));
          }) 
          //2
          Hub.$on('upPicTwo', function(val) {
              //console.log(val);
             _this.img[1].pic =  val;
             
          }) 
          Hub.$on('upPicThree', function(val) {
              //console.log(val);
             _this.img[2].pic =  val;
             
          }) 
        },
        components: {
        	
    		},
        computed: {
         
        },
         
   		 mounted () {
   		 	this.Gototest(); 
   		 },
       
   		
        methods: {
        	//一进去就获取宽度
        	Gototest:function(){
        		 var swiper = new Swiper('.swiper-container', {
				        pagination: '.swiper-pagination',
				        slidesPerView: 1,
				        paginationClickable: true,
				        autoplay : 500000,
				        autoplayDisableOnInteraction : false,
				        observer:true,
						    observeParents:true

    						});	
        	},
          GotoSelect:function(){
            //alert(ret);
            this.info.listShow = false;
            Hub.$emit('changeOne',this.info.listShow);
          },
          dataDetails:function(){
            this.info.delShow = true;
          },
          hiddenDetail:function(){
            this.info.delShow = false;
          }

        }
    }
</script>
