<template>
    <div class="login">
        <div class="login_box">
            <div class="logo">
                <img src="~assets/img/logo.png" alt="">
            </div>
            <el-form class="demo-ruleForm" label-width="40px">
                <el-form-item label="账户" >
                    <el-input type="text"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button type="primary">登录</el-button>
                    <el-button type="success">注册</el-button>
                    <el-button type="info">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style lang="less" scoped>
.login{
    width: 100%;
    height: 100%;
    background-color: teal;
    position: relative;
    .login_box{
        width: 500px;
        height: 400px;
        background-color: aliceblue;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        .logo{
            position: absolute;
            left: 50%;
            width: 150px;
            height: 150px;
            background-color: aliceblue;
            transform: translate(-50%,-50%);
            border-radius: 50%;
            padding:15px;
            box-shadow: 0 0 10px rgb(243, 241, 238);
            img{
                width: 130px;
                height: 110px;
                border-radius: 50%;
            }

        }
        .el-form{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0 20px;
        }


    }
}
</style>
