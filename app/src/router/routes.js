
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        alias:'/home',
        component: () => import('pages/Home.vue'),
        meta:{
          requiresAuth:true,
        }
      },
      {
        path: '/explore',
        component: () => import('pages/ExplorePage.vue'),
        meta:{
          requiresAuth:true,
        }
      },
      {
        path: '/add-new',
        component: () => import('pages/AddNewPage.vue'),
        meta:{
          requiresAuth:true,
        }
      },
      {
        path: '/reels',
        component: () => import('pages/ReelsPage.vue'),
        meta:{
          requiresAuth:true,
        }
      },
      {
        path: '/profile',
        component: () => import('pages/ProfilePage.vue'),
        meta:{
          requiresAuth:true,
        }
      },
      {
        path: '/post/:id',
        component: () => import('pages/PostPage.vue'),
        meta:{
          requiresAuth:true,
        }
      },
    ]
  },
  {
    path: "/",
    component: () => import('layouts/PublicLayout.vue'),
    children: [
      {
        path: "/login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/update-profile",
        component: () => import("pages/UpdateProfilePage.vue"),
        meta:{
          requiresAuth:true,
        }
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
