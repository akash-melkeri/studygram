import {defineStore} from 'pinia';

export const authStore = defineStore('auth', {
  state: () => ({
    session: {
      is_logged_in: false,
      user_id: '',
      username: '',
      extra_details: {},
    },
  }),
  getters: {
    sessionData:(state) => state.session,
    isLoggedIn:(state) => state.session.is_logged_in,
    newUser:(state) => state.session.extra_details?.new_user || false,
  },
  actions: {
    setSession(data){
      this.session.is_logged_in = true
      this.session.user_id = data.user_id
      this.session.username = data.username
      this.session.extra_details = data.extra_details
    },
    clearSession(){
      this.session.is_logged_in = false
      this.session.user_id = ''
      this.session.username = ''
      this.session.extra_details = {}
    }
  }
})
