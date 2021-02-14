import Vue from 'vue';
import Router from 'vue-router';
import CreatureMain from './view/creatureMain';
import CreatureSub from './view/creatureSub';
import Thanks from './view/thanks';
import { createObserver } from "./js/intersectionObserver";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: CreatureMain,
      beforeRouteEnter(to, from, next) {
        console.log("beforeRouteEnter");
        createObserver();
        next(vm => {
          console.log(vm);
        });
      },
    },
    {
      path: "/sub/:foo",
      component: CreatureSub,
      props: true,
    },
    {
      path: "/thanks",
      component: Thanks,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});