import Vue from 'vue';
import Router from 'vue-router';
import TouchAPI from '@/components/TouchAPI';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TouchAPI',
      component: TouchAPI,
    },
  ],
});
