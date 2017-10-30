<template>
	<div>
        <div class="headlist_all" id="headlist_all">
            <div class="headlist_main">
                <div class="headlist_main_pic"></div>
            </div> 
            <div class="headlist_center">
                <div>
                   <div></div>
                </div>
                <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                <div>
                   <div></div>
                </div>
                <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                <div>
                   <div></div>
                </div>
                <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
                 <div>
                   <div></div>
                </div>
            </div>
            <div class="headlist_footer">
                <div class="headlist_footer_nav">共收到好友<span>1</span>份礼物</div>
                <div class="headlist_footer_main">
                    <div class="gift">
                        <div class="gift_left">
                            <div class="gift_left_pic"><img src="../../../images/1.jpg"></div>
                            <div class="gift_left_title">
                                <span>天亮了</span>
                                <div>08月28日19:00</div>
                            </div>
                        </div>
                        <div class="gift_right">
                            <img src="../../../images/1.jpg">
                        </div>
                    </div>
                     <div class="gift">
                        <div class="gift_left">
                            <div class="gift_left_pic"><img src="../../../images/1.jpg"></div>
                            <div class="gift_left_title">
                                <span>天亮了</span>
                                <div>08月28日19:00</div>
                            </div>
                        </div>
                        <div class="gift_right">
                            <img src="../../../images/1.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css">
    .headlist_all{
        width:90%;
        border:1px solid #DC2F43;
        margin:0 auto;
        margin-top:40px;
        border-radius:5px 5px 0 0;
    }
    .headlist_main{
        width:100%;
        height:60px;
        background: #DC2F43;
        position: relative;
        /*border-radius:5px 5px 0 0;*/
    }
    .headlist_center>div{
        width:12.3%;
        height:50px;
        /*border:1px solid red;*/
        display: inline-block;
        margin-right: -3px;
      
    }
   
    
    .headlist_center>div>div{
        width:36px; 
        height:36px;
        border-radius:40px;
        
        margin:14px auto;
         background:url(../../../images/1.jpg) no-repeat; 
        background-size: 100% 100%;
            }
   


    .headlist_main_pic{
        width:60px;
        height:60px;
        border-radius: 60px;
        position: absolute;
        top:-30px;
        left:44%;
        background: #ddd;
    }
    .headlist_center{
        width:100%;
        height:170px;
    }
    .headlist_footer_nav{
        width:100%;
        height:50px;
        line-height:50px;
        background:#DC2F43;
        text-align: center;
        font-size: 22px;
        color:#fff;
    }
    .headlist_footer_nav>span{
        color:yellow;
    }
    .headlist_footer{
        background: #fff;
    }
    .gift{
        width:90%;
        height:53px;
        margin:17px 0 0 5%;
        display: flex;
        justify-content:space-between;
    }
    .gift_left{
        display: flex;
    }
    .gift_left_pic{
        width:35px;
        height:35px;
        border-radius: 35px;
       
    }
    .gift_left_pic>img{
        width:100%;
        height:100%;
        border-radius: 35px;

    }
    .gift_left_title{
        margin-left:3px;
    }
    .gift_right{
        width:30px;
        height:30px;
        border-radius: 30px;
    }
    .gift_right>img{
        width:100%;
        height:100%;
        border-radius: 30px;
    }
</style>
<script type="text/javascript">
    import { Hub } from '../../../js/other.js';
    export default{
        data() {
            return {
                num:'',
                screeWidth:document.body.clientWidth,
                divWidth: ''        
            }
        },
       
        computed: {
        
        },
        created() {  
           
        },
        mounted () {
            alert(this.screeWidth);
           this.GotoWidth();
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screeWidth = document.body.clientWidth
                    that.screeWidth = window.screeWidth
                })()
                    }
          
         },
         watch: {
            // divWidth (val) {
            //     console.log(val+'^^^^^^^^^^^^^^^^^^^^^^^^^^');
            //         },
            screeWidth (val) {
                  //this.GotoWidth();
                  console.log(5);
                    }

            },
        methods: {
           GotoWidth:function(){
                var v = document.getElementById('headlist_all');
                //alert((v.offsetWidth-2)/8);
                this.divWidth = (v.offsetWidth-2)/8;

            }

        }
    }
   </script>