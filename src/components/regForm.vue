<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="email" 
          v-model="useridModel" placeholder="请输入登陆账号(邮箱)">
        </div>

        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
  
        <div class="g-form-line">
        <span class="g-form-label">昵称：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入昵称">
        </div>

        <span class="g-form-error">{{ usernameErrors.errorText }}</span>
      </div>

      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <el-button type="success" class="buttton_edit" @click="onLogin()"  plain>登录</el-button>
          <el-button type="danger" class="buttton_edit" @click="close()"  plain>取消</el-button>
          <p style="display: inline-block;margin-left:1em;color: red;">{{ errorText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel:'',
      useridModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status

      if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g.test(this.useridModel)) {
        status = false
        errorText = '请输入正确邮箱'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    usernameErrors () {
      let errorText, status

      if (this.usernameModel.length<1) {
        status = false
        errorText = '请输入昵称'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.usernameFlag) {
        errorText = ''
        this.usernameFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (/^[a-zA-Z0-9]{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '请输入六位以上密码'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
     close(){
      this.$emit('on-close')
    },
    Notify(inf) {
        const h = this.$createElement;
        this.$notify({
          title: '消息通知',
          message: h('i', { style: 'color: teal'}, inf)
        });
      },
    onLogin () {
      if (!this.userErrors.status || !this.passwordErrors.status || !this.usernameErrors.status) {
        this.errorText = '部分选项未通过'
      }
    else {
        this.setCookie('username',usernameModel,1)
        this.setCookie('userid',useridModel,1)
        this.$emit('has-log',usernameModel)
/*        location.reload();*/
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
