<template>
  <div>
    <nav class="flex justify-around">
      <router-link to="/" class="text-white font-bold text-center text-lg">キャラ1<br><i class="fas mr-1.5 text-3xl fa-dragon"></i></router-link>
      <router-link to="/sub/0" class="text-white font-bold text-center text-lg">キャラ2<br><i class="far mr-1.5 text-3xl fa-grin-squint"></i></router-link>
      <!-- <router-link><i class="fas fa-grin-squint"></i>ナビ1</router-link> -->
      <!-- <router-link><i class="fas fa-snowman"></i>ナビ2</router-link> -->
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import { createObserver } from './js/intersectionObserver';

export default {
  data() {
    return {
      test: 'default message',
      demo: 'default',
      demoName: '',
      formData: {
        name: '',
        nickname: '',
        voter: '',
        reason: '',
      }
    }
  },
  mounted() {
    // createObserver();
  },
  watch: {
    '$route': function() {
      this.$store.dispatch('routeToggle', !this.$store.state.routeFlag);
      // createObserver();
    }
  },
  methods: {
    demoFunction() {
      console.log('view changed!');
    }
  }
}
</script>