<template>
  <div>
    Sample Component
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SampleComponent',
  props: {
    test:{
      default:'test'
    }
  },
  emits:[],
  setup(){
    return{

    }
  },
  mounted(){

  },
  created(){

  }

})
</script>
