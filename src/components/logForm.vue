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
      useridModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status

      if (this.useridModel=='admin')
      {
        status = true
        errorText = ''
      }
      else if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g.test(this.useridModel)) {
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
    passwordErrors () {
      let errorText, status

      if (this.passwordModel=='admin')
      {
        status = true
        errorText = ''
      }
      else if (/^[a-zA-Z0-9]{1,6}$/g.test(this.passwordModel)) {
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
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '部分选项未通过'
      }
      else {
        this.$ajax.post('/api/log', {
        params: {
          id: this.useridModel,
          password:this.passwordModel
        }
      })
      .then((response)=>{
        if (response.data.code==100){
          this.Notify("登陆成功! 嘻嘻");
          
          this.setCookie('username',response.data.name,1)
          this.setCookie('userid',response.data.id,1)
          this.$store.dispatch('getusernameAction',response.data);
          this.$emit('has-log', response.data.name)

          location.reload();
        }
        else if (response.data.code==101)
        {
           this.Notify("密码错误....哦或")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-form-input input {
  width: 100%;
}
.g-form-label {
    width: 85px;
}
.g-form-btn {
  padding-left: 85px;
}
</style>
