import { api } from 'boot/axios'
import { authStore } from 'src/stores/auth';

export const guard_auth = (to, from, next) => {
  const auth_store = authStore()
  function auth(callback){
    api.get('/auth/').then(response=>{
      if(response.data.ok){
        auth_store.setSession(response.data.session_data)
        callback(true)
      }else{
        callback(false)
      }
    }).catch(error=>{
      console.error('AXIOS ERROR : ', error)
      callback(false)
    })
  }
  if(to.meta.requiresAuth){
    if(auth_store.isLoggedIn){
      next()
    }else{
      auth((status)=>{
        if(status){
          next()
        }else{
          auth_store.clearSession()
          next({
            path: '/login',
            query: { redirect: to.fullPath },
          })
        }
      })
    }
  }else{
    if(auth_store.isLoggedIn){
      next('/home')
    }else{
      auth((status)=>{
        if(status){
          next('/home')
        }else{
          auth_store.clearSession()
          next()
        }
      })
    }
  }
}
