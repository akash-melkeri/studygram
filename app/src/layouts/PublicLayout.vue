<!-- src/layouts/PublicLayout.vue -->

<template>
  <q-layout view="lHr LpR lFr">
    <q-page-container class="tw-max-w-md tw-mx-auto tw-overflow-hidden">
      <router-view class="tw-max-w-md tw-mx-auto" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PublicLayout",

  setup() {
    return {};
  },
});
</script>

<style scoped>
/* Add your styling here */
</style>
