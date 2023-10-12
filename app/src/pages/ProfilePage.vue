<template>
  <q-page class="">
    <div>
      <div
        class="tw-p-4 tw-flex tw-border-b tw-border-black/10 tw-items-center tw-gap-4 tw-justify-between"
      >
        <h1 class="tw-font-semibold tw-text-xl">
          {{ username || 'test_username' }}
          <q-icon size="md" name="expand_more" />
        </h1>

        <div class="tw-flex tw-text-2xl tw-items-center tw-space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            id="plus"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#200E32"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              transform="translate(2 2)"
            >
              <line x1="10" x2="10" y1="6.327" y2="13.654"></line>
              <line x1="13.667" x2="6.333" y1="9.99" y2="9.99"></line>
              <path
                d="M14.6857143,0 L5.31428571,0 C2.04761905,0 0,2.31208373 0,5.58515699 L0,14.414843 C0,17.6879163 2.03809524,20 5.31428571,20 L14.6857143,20 C17.9619048,20 20,17.6879163 20,14.414843 L20,5.58515699 C20,2.31208373 17.9619048,0 14.6857143,0 Z"
              ></path>
            </g>
          </svg>
          <q-btn flat icon="menu">
            <q-badge color="red" label="" rounded floating>2</q-badge>
          </q-btn>
        </div>
      </div>
    </div>

    <div class="tw-px-4 tw-py-2 tw-flex tw-justify-between tw-gap-4">
      <div class="md:tw-w-3/12 md:tw-ml-16">
        <q-img
          class="tw-w-20 tw-h-20 md:tw-w-40 md:tw-h-40 tw-object-cover tw-rounded-full tw-border-2 tw-border-pink-600 tw-p-3"
          src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          alt="profile"
        />
      </div>
      <div
        class="tw-flex text-[15px] tw-items-center tw-space-x-4 tw-flex-grow tw-justify-center"
      >
        <div class="tw-leading-tight tw-text-center">
          <h3 class="tw-font-medium">26</h3>
          <span>Posts</span>
        </div>

        <div class="tw-leading-tight tw-text-center">
          <h3 class="tw-font-medium">573</h3>
          <span>Followers</span>
        </div>

        <div class="tw-leading-tight tw-text-center">
          <h3 class="tw-font-medium">432</h3>
          <span>Following</span>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ProfilePage',
  components:{},
  setup(){
    return{

    }
  },
  computed:{

  },
  mounted(){

  },
  created(){

  }

})
</script>
