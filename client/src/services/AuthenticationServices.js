import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// Authenticationservice.register({
//  email: "testing@gmail.com",
//  password: "123456"
// });
