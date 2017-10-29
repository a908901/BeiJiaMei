<template>
	<div class="user-container">
        <div class="register-content user-background">
            <div class="register-top usertop">
                <p><strong>用户注册</strong></p>
            </div>
            <div class="name user-input">
                <input type="" name="userName" placeholder="请输入您的用户名" v-model="info.phone">
            </div>
            <div class="name user-input">
                <input type="passWord" name="newpw" placeholder="请输入您的登录密码" v-model="info.pwdOne">
            </div>
            <div class="password user-input">
                <input type="passWord" name="confirmpw" placeholder="请确认您的登录密码" v-model="info.pwdTwo">
            </div>
	        <div class="security-code">
                <input type="" name="code" placeholder="请输入您的验证码" v-model="info.code">
                <div class="code" v-if="getCodeBtnDisable == false">{{conut_time}}</div>
                <div class="code" v-if="getCodeBtnDisable" @click.prevent="getCode">{{ conut_time === "0s" ? '重获' : '获取' }}</div>
	         </div>
             <div class="userlogin user-login-register">
                <button   :disabled="!buttonEnable" v-bind:class="{ 'bg-color-3d':!buttonEnable}" @click="Gotomodification()">提交</button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
 import { countdown  } from '../../js/other.js';
    export default{
        data() {
            return {
            	 	getCodeBtnDisable:true,
                    info:{
                        phone:'',
                        code:'',
                        pwdOne:'',
                        pwdTwo:''
                    },
                    conut_time: 60

            }
        },
     
        computed:{
                    buttonEnable() {
                        return (this.info.phone!= ""&&this.info.code!=""&&this.info.pwdOne!= ""&&this.info.pwdTwo!= "");
                    }
                },
            methods:{
                //手机号正则
                    checkPhone: function (phone) {
                        const tel = /^1(3|4|5|7|8|9)\d{9}$/.test(phone);
                        return tel;
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
                  
                //获取验证码
                  getCode: function () {
                        const tel = this.checkPhone(this.info.phone)
                        if (!tel) {
                            this.errorTip('手机号码有误！');
                            return false;
                        }
                        this.getCodeBtnDisable = false;
                        this.conut_time = '...';

                            if (true) {
                                const _this = this;
                                countdown(60,function (time) {
                                    _this.conut_time = time + 's';
                                    if (time === 0) {
                                    _this.getCodeBtnDisable = true;
                                    }
                                });
                            } else {
                                this.getCodeBtnDisable = true;
                            }
        
                     
        
                    },
                Gotomodification:function(){
                        const _this = this;
                          const params = {
                            手机号码: _this.info.phone,
                             验证码:  _this.info.code,
                             密码:  _this.info.pwdOne                 
                        		}
                        if(_this.info.pwdOne === _this.info.pwdTwo){
                           
                                    if(true){
                                      alert("注册成功了");
                                    }else{
                                        alert("注册失败")
                                    }
                        }else{
                            this.errorTip("两次密码不一致");
                        }
                     }
                     
                }
    }
</script>