<template>
  <div>
    <div class="tw-drop-shadow-sm tw-w-full tw-flex tw-items-center">
      <q-btn
        icon="arrow_back"
        class="tw-h-12 tw-w-12"
        flat
        dense
        v-close-popup
        @click="$router.go(-1)"
      ></q-btn>
      <div class="tw-text-bold tw-text-xl">Post</div>
    </div>
    <q-separator />
    <Post :data="page_post" />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import demo_posts from '../../public/data/demo_posts.json'
import Post from 'src/components/Post.vue'

export default defineComponent({
  name: 'SamplePage',
  components:{
    Post
  },
  setup(){
    return{
      page_post:ref({}),
    }
  },
  computed:{

  },
  mounted(){

  },
  created(){
    let self = this
    console.log(self.$route, demo_posts);
    if(self.$route.params && self.$route.params.id){
      if(parseInt(self.$route.params.id)){
        self.page_post = demo_posts[0][parseInt(self.$route.params.id)]
      }
    }else{
      self.page_post = demo_posts[0][Math.floor(Math.random() * ((demo_posts[0].length-1) - 0) + 0)]
    }
    console.log(self.page_post, 12313);
  }

})
</script>
