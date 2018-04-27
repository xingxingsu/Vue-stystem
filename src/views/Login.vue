<template>
  <div class="login">
    <!-- 这里只能有一个根节点 -->
    <!-- model表示表单数据对象 -->
    <el-form ref="loginForm" :model="loginForm" class="container" :rules="loginRules">
      <el-form-item>
        <div class="avatar">
          <img src="../assets/avatar.jpg" alt="">
        </div>
      </el-form-item>
      <el-form-item prop="username">
        <!-- 通过prefix-icon属性加图标 -->
        <el-input v-model="loginForm.username" prefix-icon="myicon myicon-user" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password"  prefix-icon="myicon myicon-key" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {checkLogin} from '@/api'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      //定义校验规则
      loginRules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
        ]
      }
    }
  },
  methods:{
    login(){
      console.log(111)
      //在这里调用我们引入的登录checkLogin函数
      checkLogin({username:this.loginForm.username,password:this.loginForm.password})
        .then(res=>{
          if(res.meta.status === 200){
            //跳转到首页
            this.$router.push({name:'Home'})
          }else{
            //提示错误信息
            this.$message.ereror(res.meta.msg)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
/* // scoped表示局部样式，就是说下面的样式只能再Login组件中使用，在其他组件使用无效 */
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
