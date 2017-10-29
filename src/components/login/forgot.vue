<template>
	 <div class="user-container">
        <div class="forgot-content user-background">
            <div class="forgot-top usertop">
                <p><strong>找回密码</strong></p>
            </div>
             <div class="name user-input">
                <input type="text"  placeholder="请输入你的手机号" v-model="info.phone">
            </div>
            <div class="name user-input">
                <input type="passWord" name="newpw" placeholder="请输入您的新密码" v-model="info.pwdOne">
            </div>
            <div class="password user-input">
                <input type="passWord" name="confirmpw" placeholder="请确认您的新密码" v-model="info.pwdTwo">
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
<style type="text/css">
	.user-container {
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    position: absolute;
    height: 100%;
    background: url(../../images/bg.jpg) no-repeat;
    background-size: 100% 100%;
    opacity: 0.8;
}
.user-container .bg-color-3d{
    background:#ddd;
    color:#000;
}

.usertop {
    border-bottom: 1px solid #7393e2;
    font-size: 20px;
    letter-spacing: 2px;
    color: white;
    padding: 3%
}

.user-input input {
    text-indent: 5px;
    margin: 15px 0;
    border-radius: 5px;
    border: none;
    width: 80%;
    font-size: 14px;
    line-height: 35px;
    background: #90aeff;
}
.user-login-register button{
    text-align: center;
    width:100%;border-radius:5px;border:0;padding:4% 0;background-color: #2c57d9;color: white;
}
.user-background {
    width: 400px;
    text-align: center;
    right: 250px;
    position: fixed;
    margin-top: 245px;
    background-color: #426eb5;
    opacity: 0.8;
    border-radius: 5px;
}

.user-login-register {
    margin: 5% 10%;
    border-radius: 5px;
    letter-spacing: 15px;
    color: white;
}

.rememberpw {
    display: inline-block;
    float: left;
    margin: -2% 0 0 10%;
    font-size: 13px;
}

.rememberpw input {
    margin-top: 1%;
}

.forgotpw {
    display: inline-block;
    float: right;
    margin: -2% 10% 0 0;
    font-size: 13px;
}

.security-code input {
    text-indent: 5px;
    margin: 15px 0px 0% 10%;
    border-radius: 5px;
    border: none;
    width: 50%;
    font-size: 14px;
    line-height: 35px;
    float: left;
    background: #90aeff;
}

.security-code {
    margin-bottom: 20%;
}

.code {
    display: inline-block;
    float: left;
    width: 26%;
    border-radius: 5px;
    margin: 4% 0 0 3%;
    line-height: 35px;
    background: #90aeff;
}

:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: white;
    opacity: 1;
}

::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: white;
    opacity: 1;
}

input:-ms-input-placeholder {
    color: white;
    opacity: 1;
}

input::-webkit-input-placeholder {
    color: white;
    opacity: 1;
}
</style>
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
                                      alert("你妹成功了");
                                    }else{
                                        alert("修改失败")
                                    }
                        }else{
                            this.errorTip("两次密码不一致");
                        }
                     }
                     
                }
    }
</script>

	
