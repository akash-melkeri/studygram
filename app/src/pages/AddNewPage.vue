<template>
  <q-page class="">
    <div class="tw-drop-shadow-sm tw-w-full tw-flex tw-items-center">
      <q-btn
        icon="arrow_back"
        class="tw-h-12 tw-w-12"
        flat
        dense
        v-close-popup
        @click="$router.go(-1)"
      ></q-btn>
      <div class="tw-text-bold tw-text-xl">Add new post</div>
    </div>
    <q-separator />
    <div class="tw-p-4">
      <q-uploader
        ref="uploader"
        class="tw-w-full"
      />
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AddNewPage',
  components:{},
  setup(){
    return{

    }
  },
  computed:{

  },
  mounted(){
    this.$refs.uploader.pickFiles()
  },
  created(){

  }

})
</script>
