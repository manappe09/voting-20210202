<template>
  <div>
    <nav class="flex justify-around">
      <router-link to="/" class="text-white font-bold text-center text-xs">ナビ1<br><i class="fas mr-1.5 text-xl fa-dragon"></i></router-link>
      <router-link to="/sub" class="text-white font-bold text-center text-xs">ナビ2<br><i class="far mr-1.5 text-xl fa-grin-squint"></i></router-link>
      <!-- <router-link><i class="fas fa-grin-squint"></i>ナビ1</router-link> -->
      <!-- <router-link><i class="fas fa-snowman"></i>ナビ2</router-link> -->
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'default message',
    }
  }
}
</script>