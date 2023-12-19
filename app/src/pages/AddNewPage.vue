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
    <div class=" tw-flex tw-flex-col tw-gap-4">
      <div class="tw-border-b tw-relative">
        <div class="tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center tw-absolute tw-top-0 tw-left-0 tw-text-gray-500 tw-bg-gray-100 tw-font-bold">
          Tap here to upload a photo
        </div>
        <q-img ref="display_image" src="" fit="cover" @click="$refs.uploader.pickFiles()" class="tw-w-full tw-aspect-square "></q-img>
      </div>
      <div class="tw-px-4 tw-pb-4 tw-flex tw-flex-col tw-gap-4">
        <q-input
          v-model="caption"
          label="Caption"
          type="textarea"
          outlined
          :autocomplete="false"
          :rules="[]"
          lazy-rulesk
        >
        </q-input>
        <q-btn
          label="Post"
          icon-right="check"
          color="primary"
          class="tw-rounded-md tw-w-full"
          @click="create_post()"
        ></q-btn>
      </div>
    </div>
    <div class="tw-p-4 tw-hidden">
      <q-uploader
        ref="uploader"
        class="tw-w-full"
        @added="files_picked"
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
      form_data:ref({}),
      caption:ref('')
    }
  },
  methods:{
    files_picked(files){
      console.log(files);
      if(files.length < 1){
        this.$router.go(-1)
        return
      }
      this.form_data = new FormData()
      this.form_data.append('file', files[0])
      const reader = new FileReader()
      reader.onload = (e)=>{
        this.$refs.display_image.src= e.target.result
      }
      reader.readAsDataURL(files[0])

    },
    create_post(){
      if(!this.form_data || !this.form_data.has('file')){
        this.$q.notify({
          type:'negative',
          message:'Select file before posting'
        })
        return
      }
      this.$api
        .post("/user/create-post", this.form_data)
        .then((response) => {
          if (response.data.ok) {
            this.$q.notify({
              type: "positive",
              message: response.data.message
            })
          } else {
            this.$q.notify({
              type: "negative",
              message: response.data.message
            });
          }
        })
        .catch((error) => {
          console.error(error);
          this.$q.notify({
            type: "negative",
            message: "Unknown Error occured!"
          });
        });
    },
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
