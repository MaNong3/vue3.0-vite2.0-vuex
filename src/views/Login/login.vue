<template>
  <h3>登陆页面</h3>
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="username"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script>
import { useSigninEffect } from "./hook/login.ts";
export default {
  name: "Test",
  setup(props) {
    const { onSubmit, username, password } = useSigninEffect();
    return {
      onSubmit,
      username,
      password,
    };
  },
};
</script>
<style >
h3{
  text-align: center;
  padding: 10px 0;
}
</style>