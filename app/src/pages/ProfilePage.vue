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

    <div class="tw-px-4 tw-py-1">
      <div class="tw-text-base tw-font-semibold">
        Anime Love &#10084; &#65039;
        <span class="text-black/50 tw-text-sm tw-font-normal">he/him</span>
      </div>
      <p class="tw-text-black/80 tw-text-sm">Started at : 4 June 2023</p>
      <p class="tw-text-black/80 tw-text-sm">Anime Fanpage&#11088;&#9876;</p>
      <p class="tw-text-black/80 tw-text-sm">Goal : 5k</p>
      <p class="tw-text-black/80 tw-text-sm">DM for paid promotions</p>
      <p class="tw-text-black/80 tw-text-sm">Follow for more anime content</p>
    </div>
    <div class="tw-px-4 tw-py-1 tw-space-y-1">
      <q-btn
        flat
        class="tw-capitalize tw-bg-gray-100 tw-font-medium tw-rounded-lg tw-px-4 tw-py-1 tw-text-sm tw-text-center tw-w-full hover:bg-black/10 tw-transition-colors tw-outline-none;"
        type="button"
        >Edit Profile</q-btn
      >

      <div class="tw-grid tw-gap-1 tw-grid-cols-2">
        <q-btn
          flat
          type="button"
          class="tw-capitalize tw-bg-gray-100 tw-font-medium tw-rounded-lg tw-px-4 tw-py-1 tw-text-sm tw-text-center tw-w-full hover:bg-black/10 tw-transition-colors tw-outline-none;"
          >Add Shop</q-btn
        >
        <q-btn
          flat
          type="button"
          class="tw-capitalize tw-bg-gray-100 tw-font-medium tw-rounded-lg tw-px-4 tw-py-1 tw-text-sm tw-text-center tw-w-full hover:bg-black/10 tw-transition-colors tw-outline-none;"
          >Insights</q-btn
        >
        <!-- <q-btn flat type="button" class="tw-bg-gray-100 tw-font-medium tw-rounded-lg tw-px-4 tw-py-1 tw-text-sm tw-text-center tw-w-full hover:bg-black/10 tw-transition-colors tw-outline-none;">Ad Tools</q-btn> -->
      </div>
    </div>
    <div>
      <q-scroll-area class="q-p-4">
        <q-row class="q-justify-between" v-for="item in 8" :key="item">
          <q-col cols="auto" v-for="i in 4" :key="i">
            <story-box
              :avatar="`https://picsum.photos/id/${i}/200/300`"
              :username="`${getRandomEmoji()} Highlight`"
              :contrast="true"
              :seen="true"
            />
          </q-col>
        </q-row>
      </q-scroll-area>
    </div>
    <div style="max-width: 600px">
      <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
        <q-tab name="a" icon="pages" />
        <q-tab name="b" icon="play_circle" />
        <q-tab name="c" icon="collections_bookmark" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
        >
          <q-tab-panel name="a" class="q-pa-none">
            <div class="tw-space-y-px tw-pt-1 tw-pb-16">
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/11/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/12/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" x="7" y="3" rx="2"></rect>
                        <path
                          d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                        ></path>
                      </g></svg
                    >
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/13/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" x="7" y="3" rx="2"></rect>
                        <path
                          d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                        ></path>
                      </g></svg
                    >
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/21/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/22/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/23/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" x="7" y="3" rx="2"></rect>
                        <path
                          d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                        ></path>
                      </g></svg
                    >
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/31/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/32/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/33/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/41/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/42/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/43/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/51/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/52/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <path
                        fill="currentColor"
                        d="M8 5.14v14l11-7l-11-7Z"
                      ></path></svg
                    >
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/53/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/61/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <path
                        fill="currentColor"
                        d="M8 5.14v14l11-7l-11-7Z"
                      ></path></svg
                    >
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/62/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/63/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="b"  class="q-pa-none">
            <div class="tw-space-y-px tw-pt-1 tw-pb-16">
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/11/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/12/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" x="7" y="3" rx="2"></rect>
                        <path
                          d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                        ></path>
                      </g></svg
                    >
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/13/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" x="7" y="3" rx="2"></rect>
                        <path
                          d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                        ></path>
                      </g></svg
                    >
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/21/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/22/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/23/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" x="7" y="3" rx="2"></rect>
                        <path
                          d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                        ></path>
                      </g></svg
                    >
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/31/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/32/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/33/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/41/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/42/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/43/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/51/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/52/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <path
                        fill="currentColor"
                        d="M8 5.14v14l11-7l-11-7Z"
                      ></path></svg
                    >
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/53/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/61/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <path
                        fill="currentColor"
                        d="M8 5.14v14l11-7l-11-7Z"
                      ></path></svg
                    >
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/62/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/63/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="c"  class="q-pa-none">
            <div class="tw-space-y-px tw-pt-1 tw-pb-16">
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/11/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/12/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" x="7" y="3" rx="2"></rect>
                        <path
                          d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                        ></path>
                      </g></svg
                    >
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/13/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" x="7" y="3" rx="2"></rect>
                        <path
                          d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                        ></path>
                      </g></svg
                    >
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/21/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/22/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/23/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" x="7" y="3" rx="2"></rect>
                        <path
                          d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                        ></path>
                      </g></svg
                    >
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/31/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/32/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/33/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/41/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/42/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/43/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/51/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/52/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <path
                        fill="currentColor"
                        d="M8 5.14v14l11-7l-11-7Z"
                      ></path></svg
                    >
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/53/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
              <div class="tw-flex tw-gap-px">
                <div class="tw-grid tw-gap-px tw-grid-cols-3">
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/61/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    /><svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      class="tw-absolute drop-shadow-md tw-top-2 tw-right-2"
                    >
                      <path
                        fill="currentColor"
                        d="M8 5.14v14l11-7l-11-7Z"
                      ></path></svg
                    >
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/62/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                  <div class="tw-relative tw-text-white tw-text-lg">
                    <img
                      src="https://picsum.photos/id/63/200/200"
                      alt="explore post image"
                      class="tw-object-cover tw-h-full tw-w-full"
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";

const emojis = ["✨", "🔥", "🎉", "🤯", "💅", "🙇‍♂️"];
export default defineComponent({
  name: "ProfilePage",
  setup() {
    const getRandomEmoji = () => {
      return emojis[Math.floor(Math.random() * emojis.length)];
    };
    return {
      username: ref("its_anime_thing"),
      tab: ref("a"),
      getRandomEmoji,
    };
  },
  computed: {},
  mounted() {},
  created() {},
});
</script>

