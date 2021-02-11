import Vue from 'vue';
import Router from 'vue-router';
import CreatureMain from './view/creatureMain';
import CreatureSub from './view/creatureSub';
import Thanks from './view/thanks';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: CreatureMain,
    },
    {
      path: '/sub/:foo',
      component: CreatureSub,
      props: true
    },
    {
      path: '/thanks',
      component: Thanks
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})