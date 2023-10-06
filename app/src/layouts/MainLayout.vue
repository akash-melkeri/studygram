<template>
  <q-layout view="lHr LpR lFr">

    <q-page-container>
      <router-view />
    </q-page-container>

    <ToolbarMain />

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ToolbarMain from 'src/components/ToolbarMain.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    ToolbarMain
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
