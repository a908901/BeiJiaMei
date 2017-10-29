<template>
	 <div class="user-container">
        <div class="login-content user-background"">
            <div class="login-top usertop">
                <p><strong>Alcede建站</strong></p>
            </div>
            <div class="name user-input">
                <input type="text" name="userName" placeholder="请输入您的用户名" v-model="phone">
            </div>
            <div class="password user-input">
                <input type="passWord" name="passWord" placeholder="请输入您的登录密码" v-model="pwd">
            </div>
            <div class="rememberpw">
                <label>记住密码</label>
                <input type="checkbox" name=""  v-model="checked">
            </div>
            <div class="forgotpw">
            	<router-link to="/forgot" class="click_a">
                	<label>忘记密码?</label>
                </router-link>
            </div>
            <div class="userlogin user-login-register">
        		<button class="userlogin " @click="GotoLogin()">登录</button>
        	</div>
        	<div class="userlogin user-login-register">
        		<router-link to="/register" class="click_a">
            		<button class="userregister">注册</button>
            	</router-link>
        	</div>
            
        </div>

    </div>
</template>
<style type="text/css">
	.click_a{
		width:100%;height:100%;
	}
	a:link{
		text-decoration:none;
		color:#000;
	}
	a:visited{
		text-decoration:none;
		color:#000;
	}
	a:hover{
		text-decoration:none;
		color:#000;
	}
	a:active{
		text-decoration:none;
		color:#000;
	}
</style>
<script type="text/javascript">
    export default{
        data() {
            return {
              	phone:"",
				pwd:"",
				checked:false
            }
        },
     //页面加载调用获取cookie值
		mounted(){
		        this.getCookie()
		        },
      methods:{
				//手机号正则
				checkPhone:function (phone) {
					const tel = /^1(3|4|5|7|8|9)\d{9}$/.test(phone);
					return tel;
				},
				Gotologining:function(){
					this.logining = true;
					this.isLogin = false;
								},
				
				//登录
				GotoLogin:function(){
					var name = this.phone;
			        //保存的密码
			        var pass = this.pwd;
			       	alert(this.checked);
			         if(this.checked == true){
				          this.setCookie(name,pass,7);
				        }else{
				         this.clearCookie();
				    }
					const _this = this;
					var parame = {
												
						}
					if(_this.istel() === true){
							console.log("登录你妹啊");
							_this.$router.push({ path: '/index'});
						}
							
				},
				
				 //错误提示方法
                    errorTip: function (msg) {
                        layer.open({
                            content: msg,
                            btn: ['确定','取消'],
                            yes: function () {
                                layer.closeAll();
                            },
                            no:function(){
                                layer.closeAll();
                            }
                        });
                    },
				//用户验证前端验证
				istel: function() {
						const tel = this.checkPhone(this.phone);
						const _this = this;
						if(this.phone === ""){
								_this.errorTip('登录名不能为空');
								return false
						}
						if(!tel){
							alert("手机格式错误");
							return false
						}
						if(this.pwd ===''|| this.pwd.length<6){
								alert("密码输入不正确");
								return false
						}
						return true;
					},
					//设置cookie
						  setCookie(c_name,c_pwd,exdays) {
						    var exdate=new Date();
						    exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);
						   
						    window.document.cookie="phone"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
						    window.document.cookie="pwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
						  },
						  
						  //读取cookie
						  getCookie:function () {
						    if (document.cookie.length>0) {
						      var arr=document.cookie.split('; ');
						      for(var i=0;i<arr.length;i++){
						        var arr2=arr[i].split('=');//切割		       
						        if(arr2[0]=='phone'){
						          this.phone=arr2[1];
						        }else if(arr2[0]=='pwd'){
						          this.pwd=arr2[1];
						        }
						      }
						    }
						  },
						  //清除cookie
						  clearCookie:function () {
						    this.setCookie("","",-1);
						  }
						
						
					//////
					
				}
    }
</script>
