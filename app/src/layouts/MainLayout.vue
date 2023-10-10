<template>
  <q-layout view="lHr LpR lFr">
    <q-page-container>
      <router-view class="tw-max-w-md tw-mx-auto" />
    </q-page-container>
    <ToolbarMain class="tw-max-w-md tw-mx-auto" />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import ToolbarMain from "src/components/ToolbarMain.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    ToolbarMain
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>
