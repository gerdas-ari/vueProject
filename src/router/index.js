import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Counter from '../pages/Counter.vue';
import Slider from '../pages/Slider.vue';
import WhiteBoxes from '../pages/WhiteBoxes.vue';
import Metrics from '../pages/Metrics.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter      
    },
    {
      path: '/slider',
      name: 'slider',
      component: Slider      
    },
    {
      path: '/whiteboxes',
      name: 'whiteboxes',
      component: WhiteBoxes      
    },
    {
      path: '/metrics',
      name: 'metrics',
      component: Metrics      
    },
  ]
})

export default router
