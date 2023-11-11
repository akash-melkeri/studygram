import { boot } from 'quasar/wrappers'

import { authStore } from 'src/stores/auth'

const auth_store = authStore()

export default boot(({ app }) => {
  app.config.globalProperties.$store = {
    auth:auth_store,
  }

})


