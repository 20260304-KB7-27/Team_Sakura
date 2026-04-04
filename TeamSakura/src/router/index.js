import { createRouter, createWebHistory } from 'vue-router';
import Team from '@/team/components/team.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/team',
      component: Team,
    },
  ],
});

export default router;
