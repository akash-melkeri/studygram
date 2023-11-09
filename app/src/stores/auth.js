import {defineStore} from 'pinia';

export const authStore = defineStore('auth', {
  state: () => ({
    session: {
      is_logged_in: false,
      user_id: '',
    },
  }),
  getters: {
    isLoggedIn:(state) => state.session.is_logged_in
  },
  actions: {
    setSession(data){
      this.session.is_logged_in = true
      this.session.user_id = data.user_id
    },
    clearSession(){

      this.session.is_logged_in = false
      this.session.user_id = ''
    }
  }
})
