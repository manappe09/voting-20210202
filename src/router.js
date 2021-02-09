import Vue from 'vue';
import Router from 'vue-router';
import CreatureMain from './view/creatureMain';
import CreatureSub from './view/creatureSub';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: CreatureMain
    },
    {
      path: '/sub',
      component: CreatureSub
    },
  ]
})