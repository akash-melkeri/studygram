<template>
  <div class="post">
    <q-separator />
    <div class="tw-px-3 tw-py-2 tw-flex tw-items-center tw-justify-between ">
      <div class="tw-flex  tw-items-center tw-gap-3">
        <q-img :src="data.profile_picture" class="tw-w-9 tw-h-9 tw-rounded-full tw-shrink-0 " />
        <div class="tw-h-full tw-w-full tw-text-ellipsis ">
          <div class="tw-font-bold text-lg">
            {{ data.name }}
          </div>
          <div></div>
        </div>
      </div>
      <q-btn icon="more_vert" dense flat class="tw-h-full tw-aspect-square " />
    </div>
    <q-separator />
    <div class="tw-relative">
      <!-- <q-img :src="data.contents[0].url" class="tw-w-full "></q-img> -->

      <!-- <div class="tw-w-full tw-aspect-square bg-grey-10"></div> -->
      <!-- <q-img :src="data.post.image_url" class="tw-w-full "></q-img> -->
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="grey-5"
        navigation
        arrows
        ref="carousel"
        class="tw-h-auto tw-p-0"
      >
        <q-carousel-slide v-for="(content,index) in data.contents" :name="index" :key="content.id" class="tw-min-h-min">
          <q-img v-if="content.type == 'image'" :src="content.url" class="tw-w-full "></q-img>
        </q-carousel-slide>
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="0.5em" :icon="btnProps.icon" class="tw-text-blue-500/90" flat round dense @click="onClick" />
          <q-btn v-else size="0.5em" :icon="btnProps.icon" class="tw-text-white/70" flat round dense @click="onClick" />
        </template>
        <template v-slot:control>

          <q-carousel-control
            position="left"
            :offset="[18, 0]"
            class="tw-h-full tw-flex tw-flex-col tw-justify-center"
          >
            <q-btn
              round dense class="tw-bg-white/50 tw-text-black" icon="chevron_left"
              @click="$refs.carousel.previous()"
            />
          </q-carousel-control>
          <q-carousel-control
            position="right"
            :offset="[18, 0]"
            class="tw-h-full tw-flex tw-flex-col tw-justify-center"
          >
            <q-btn
            round dense class="tw-bg-white/50 tw-text-black" icon="chevron_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
      <!-- <q-btn icon="chevron_left" size="0.8em" dense rounded flat class="tw-shadow-sm tw-absolute tw-left-3 tw-top-[50%] tw-bg-gray-100 tw-opacity-60 tw-translate-y-[-50%]" />
      <q-btn icon="chevron_right" size="0.8em" dense rounded flat class="tw-shadow-sm tw-absolute tw-right-3 tw-top-[50%] tw-bg-gray-100 tw-opacity-60 tw-translate-y-[-50%]" />
      <div class="tw-flex tw-gap-1 tw-absolute tw-bottom-3 tw-left-1/2 tw-translate-x-[-50%]">
        <span v-for="i in 5" :key="i" class="tw-inline-block tw-w-2 tw-h-2 tw-rounded-full tw-bg-gray-400"></span>
      </div> -->
    </div>
    <div>
      <!-- {{ item }} -->
      <div class="tw-flex tw-justify-between tw-px-2 tw-py-1.5">
        <div class="tw-flex tw-gap-3">
          <svg v-if="data.is_liked" xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7 tw-text-red-500" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.222 5.364A6.002 6.002 0 0 1 12 4.758a6.002 6.002 0 0 1 7.778 9.091l-5.657 5.657a3 3 0 0 1-4.242 0L4.222 13.85a6 6 0 0 1 0-8.485Z" clip-rule="evenodd"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l-.604-5.437C4.223 5.007 5.825 3.864 7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.465c-1.415.67-3.017-.472-2.844-2.028L5 12Zm0 0h7"/></svg>
        </div>
        <div>
          <svg v-if="data.is_saved" xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.447.894L12 19.118l5.553 2.776A1 1 0 0 0 19 21V5a3 3 0 0 0-3-3H8Z" clip-rule="evenodd"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3H8a2 2 0 0 0-2 2v16l6-3l6 3V5a2 2 0 0 0-2-2Z"/></svg>
        </div>
      </div>
      <div class="tw-px-2">
        <div class="">
          {{ data.likes_count }} likes
        </div>
        <div class="tw-flex tw-gap-2">
          <div class="tw-shrink-0">Username</div>
          <div class="tw-font-light tw-grow  tw-flex">
            <div class="tw-w-1/2 tw-grow-0 ellipsis tw-overflow-hidden">
              CaptionCaptionCaptionCaptionCaptionCaptionCaptionCaptionCaption
            </div>
            <div class="tw-grow tw-font-bold tw-text-gray-500">
              More
            </div>
          </div>
        </div>
      </div>
      <div class="tw-text-gray-500 tw-px-2">
        View comments
      </div>
      <div class="tw-px-2 tw-text-[0.7em] tw-text-gray-400 tw-uppercase">4 Days Ago</div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PostComponent',
  props: {
    test:{
      default:'test'
    },
    data:{
      type:Object,
      required:true,
    }
  },
  emits:[],
  setup(){
    return{
      slide:ref(0),
    }
  },
  mounted(){

  },
  created(){

  }

})
</script>
<style>
.post .q-carousel__slide{
  padding:0 !important;
}
.post .q-carousel__navigation .q-btn{
  margin:0 2px;
  padding:0;
}
.post .q-btn--dense.q-btn--round{
  padding:0 0px;
  min-width: 0;
  min-height: 0;
}
</style>
