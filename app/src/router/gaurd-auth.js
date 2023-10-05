import axios from 'axios'
import { api } from 'boot/axios'
import { authStore } from 'src/stores/auth';

export const guard_auth = (to, from, next) => {
  const auth_store = authStore()
  if(to.meta.requiresAuth && !auth_store.isLoggedIn()){
    return {
      path: '/login',
      query: { redirect: to.fullPath },
    }
  }else{

  }
}
