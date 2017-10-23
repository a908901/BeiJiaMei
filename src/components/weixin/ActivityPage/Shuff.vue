<template>
<div class="jin-wrap" >
	<div class="swiper-container" >
	    <div class="swiper-wrapper" >
	        <div class="swiper-slide" v-for="key in img">
	            <div class="swiper_pic"  :style="{backgroundImage:'url('+key.pic+')'}" ></div>
	        </div>
	    </div>
	    <div class="swiper-pagination"></div>
	</div> 
</template>
<style type="text/css">
		.swiper_pic{
			height:150px;background-size: 100% 100%;width:100%;
		}

</style>

<script>
   
    export default{
        data() {
            return {
               	img:[
               		{pic:'../../../images/1.jpg'},
               		{pic:'../../../images/2.jpg'},
               		{pic:'../../../images/1.jpg'},
               		{pic:'../../../images/2.jpg'}
               	]
            }
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
				        autoplay : 5000,
				        autoplayDisableOnInteraction : false,
				        observer:true,
						observeParents:true

    						});	
        	}


        }
    }
</script>
