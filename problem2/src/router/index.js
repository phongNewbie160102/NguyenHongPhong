import { createRouter, createWebHashHistory,createWebHistory  } from 'vue-router'
import Resolution from '../views/Resolution.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [

    // Điều hướng mặc định khi người dùng truy cập vào '/'
    {
      path: '/',
      redirect: '/Resolution',  
    },
    // Layout chính  
    {
      path: '/',
      component: DefaultLayout,
      redirect: '/resolution',
      children: [
        {
          path: 'resolution',
          name: 'resolution',
          component: Resolution,
          meta: { requiresAuth: true },  
        },
 
      ],
      meta: { requiresLoading: true }
    },
    
  ]
});


export default router;
