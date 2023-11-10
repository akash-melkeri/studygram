import { boot } from 'quasar/wrappers'
import axios from 'axios'

import { authStore } from 'src/stores/auth'
import { Cookies } from 'quasar'

const api = axios.create({
  baseURL: '/api',
   withCredentials: true,
})
api.defaults.headers.post['Content-Type'] = 'application/json';
api.defaults.headers.delete['Content-Type'] = 'application/json';

export default boot(({app,router}) => {
  const auth_store = authStore()
  api.interceptors.response.use((response) => {
    return response;
  },
  (error) => {
    console.error(error);
    if (error.response.status === 401) {
      auth_store.clearSession();
      router.push('/login')
      return new Promise(() => {
      });
    }
    else{
      return Promise.reject(error);
    }
  });

  api.interceptors.request.use((request) => {
    request.headers['X-CSRFToken'] = Cookies.get('_csrf_token');
    return request;
  });


  app.config.globalProperties.$axios = api
})

export { api }

