<template>
  <div>
    <h1>Register</h1>
    <input
      v-model="email"
      type="email"
      name="email"
      placeholder="email" >
    <br>
    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="password" >
    <br>
    <button
      @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationServices from '@/services/AuthenticationServices'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '23'
    }
  },
  mounted () {
  },
  methods: {
    async register () {
      const response = await AuthenticationServices.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
