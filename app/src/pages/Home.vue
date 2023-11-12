<template>
  <div>
    <q-header
      class="tw-bg-white tw-text-black tw-border-b-[0.0001em] tw-border-b-gray-200"
    >
      <q-toolbar class="bg-transparent">
        <q-toolbar-title>
          <img src="/text-studygram.png" class="tw-h-10" />
        </q-toolbar-title>
        <div class="tw-flex tw-gap-4 tw-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="tw-h-[1.75em] tw-w-[1.75em]"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 20.325q-.35 0-.713-.125t-.637-.4l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125ZM11.05 6.75q-.725-1.025-1.55-1.562t-2-.538q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837q1.287 1.375 2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575q1.287-1.375 2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .537T12.95 6.75q-.175.25-.425.375T12 7.25q-.275 0-.525-.125t-.425-.375Zm.95 4.725Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="tw-h-6 tw-w-6"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.038 19.927A9.933 9.933 0 0 1 7.7 19L3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48c1.993 1.7 2.93 4.043 2.746 6.346M19 16l-2 3h4l-2 3"
            />
          </svg>
        </div>
      </q-toolbar>
    </q-header>
    <q-page class="">
      <div v-if="$store.auth.newUser" class="tw-p-2">
        <div>
          <div class="tw-text-lg tw-font-bold tw-flex tw-justify-between">
            <div>
              Complete Your Profile
            </div>
            <q-btn icon="close" dense flat size="0.6em" class="tw-rounded-md"></q-btn>
          </div>
          <div class="tw-uppercase tw-text-gray-400 tw-font-bold tw-hidden">
            <span class="tw-text-green-600">2 </span>
            <span class="tw-text-green-600">of </span>
            <span class="tw-text-green-600">4 </span>
            <span>Complete</span>
          </div>
        </div>
        <div class="tw-border tw-border-gray-300 tw-rounded-lg tw-p-4 tw-mt-4">
          <div>
            <div class="tw-flex tw-justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="tw-h-24 tw-w-24 tw-border-4 tw-border-gray-700 tw-rounded-full tw-p-3" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm6 8H6q-.825 0-1.413-.588T4 18v-.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.588 1.413T18 20ZM6 18h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2v.8Zm6-8q.825 0 1.413-.588T14 8q0-.825-.588-1.413T12 6q-.825 0-1.413.588T10 8q0 .825.588 1.413T12 10Zm0-2Zm0 10Z"/></svg>
            </div>
            <div class="tw-text-[1.2em] tw-font-bold tw-text-center tw-mt-4">Add Your Name</div>
            <div class="tw-text-gray-400 tw-px-8 tw-text-center">Add your full name so your friends know it's you.</div>
          </div>
          <div class="tw-text-center tw-mt-8">
            <q-btn unelevated no-caps dense class="tw-px-4 tw-rounded-md" color="primary" label="Complete your profile"></q-btn>
          </div>
        </div>
      </div>
      <div>
        <template v-for="item in posts" :key="item.id">
          <div class="post">
            <q-separator />
            <div class="tw-px-3 tw-py-2 tw-flex tw-items-center tw-justify-between ">
              <div class="tw-flex  tw-items-center tw-gap-3">
                <q-img :src="item.profile_picture" class="tw-w-9 tw-h-9 tw-rounded-full tw-shrink-0 " />
                <div class="tw-h-full tw-w-full tw-text-ellipsis ">
                  <div class="tw-font-bold text-lg">
                    {{ item.name }}
                  </div>
                  <div></div>
                </div>
              </div>
              <q-btn icon="more_vert" dense flat class="tw-h-full tw-aspect-square " />
            </div>
            <q-separator />
            <div class="tw-relative">
              <!-- <q-img :src="item.contents[0].url" class="tw-w-full "></q-img> -->

              <!-- <div class="tw-w-full tw-aspect-square bg-grey-10"></div> -->
              <!-- <q-img :src="item.post.image_url" class="tw-w-full "></q-img> -->
              <q-carousel
                v-model="item.slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="grey-5"
                navigation
                arrows
                class="tw-h-auto tw-p-0"
              >
                <q-carousel-slide v-for="(content,index) in item.contents" :name="index" :key="content.id" class="tw-min-h-min">
                  <q-img v-if="content.type == 'image'" :src="content.url" class="tw-w-full "></q-img>
                </q-carousel-slide>
                <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                  <q-btn v-if="active" size="0.5em" :icon="btnProps.icon" color="blue-6" flat round dense @click="onClick" />
                  <q-btn v-else size="0.5em" :icon="btnProps.icon" color="grey-5" flat round dense @click="onClick" />
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
              <div class="tw-flex tw-justify-between tw-p-2">
                <div class="tw-flex tw-gap-3">
                  <svg v-if="item.is_liked" xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7 tw-text-red-500" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.222 5.364A6.002 6.002 0 0 1 12 4.758a6.002 6.002 0 0 1 7.778 9.091l-5.657 5.657a3 3 0 0 1-4.242 0L4.222 13.85a6 6 0 0 1 0-8.485Z" clip-rule="evenodd"/></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l-.604-5.437C4.223 5.007 5.825 3.864 7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.465c-1.415.67-3.017-.472-2.844-2.028L5 12Zm0 0h7"/></svg>
                </div>
                <div>
                  <svg v-if="item.is_saved" xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.447.894L12 19.118l5.553 2.776A1 1 0 0 0 19 21V5a3 3 0 0 0-3-3H8Z" clip-rule="evenodd"/></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="tw-w-7 tw-h-7" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3H8a2 2 0 0 0-2 2v16l6-3l6 3V5a2 2 0 0 0-2-2Z"/></svg>
                </div>
              </div>
              <div>
                <div>Likes</div>
                <div>
                  <div>Username</div>
                  <div>Caption</div>
                </div>
              </div>
              <div>
                View comments
              </div>
              <div>4 Days Ago</div>
            </div>
          </div>
        </template>
      </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'IndexPage',
  components:{},
  setup(){
    return{
      posts:ref([
        {
          id:'111',
          name:'knowledge_page',
          profile_picture:'https://www.nicepng.com/png/detail/10-101646_borrow-library-books-book-stack-books-icon.png',
          likes_count:292262,
          is_liked:true,
          is_saved:true,
          slide:0,
          contents:[
            {
              id:'1111',
              type:'image',
              url:"https://getwallpapers.com/wallpaper/full/2/c/a/165944.jpg"
            },
            {
              id:'1111',
              type:'image',
              url:"https://getwallpapers.com/wallpaper/full/2/c/a/165944.jpg"
            },
            {
              id:'1111',
              type:'image',
              url:"https://getwallpapers.com/wallpaper/full/2/c/a/165944.jpg"
            },
          ],
        },
      ])
    }
  },
  computed:{

  },
  mounted(){

  },
  created(){

  }
});
</script>
<style>
.post .q-carousel__slide{
  padding:0 !important;
}
</style>
