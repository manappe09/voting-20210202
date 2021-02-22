<template>
  <div
    class="posts-item group relative w-5/12 h-40 mb-4 transition duration-500 md:w-1/4 md:mr-2"
    :class="initialOpacity"
    @touchstart="showToolTip"
  >
    <div class="shadow-lg rounded-3xl overflow-hidden w-full h-full">
      <p
        class="text-center bg-yellow-400 text-white h-1/2 text-xl font-semibold flex items-center justify-center"
      >
        <span>{{ postData.fields.name.stringValue }}</span>
      </p>
      <span class="text-xs pl-2 text-gray-600">{{
        postData.fields.voter.stringValue
      }}</span
      ><br />
      <span class="text-sm pl-2 block"
        >{{ postData.fields.nickname.stringValue }}さん</span
      >
    </div>
    <p class="tooltip absolute -bottom-0 inset-x-0 bg-green-400 p-2 text-xs text-white z-10 w-full rounded-none rounded-tl-full rounded-tr-full rounded-br-full md:group-hover:opacity-100 opacity-0 transition-opacity duration-500">
      {{ postData.fields.reason.stringValue }}
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['postData', 'postIndex'],
  data() {
    return {
    }
  },
  computed: {
    initialOpacity() {
      let viewport = window.innerWidth;
      if(viewport < 768) {
        return this.postIndex < 4 ? 'opacity-100' : 'opacity-0';
      } else {
        return this.postIndex < 6 ? 'opacity-100' : 'opacity-0';
      }
    }
  },
  mounted() {
    this.$emit('is-post-mounted');
    this.$emit('get-post-index',this.postIndex);
  },
  created() {
    axios
      .get(
        'posts'
      )
      .then(response => {
        this.posts = response.data.documents;
      })
  },
  methods: {
    showToolTip() {
      const i = this.postIndex;
      const tooltips = document.querySelectorAll('.tooltip');
      tooltips.forEach((tooltip, index) => {
        if(index != i) {
          console.log(tooltip);
          tooltip.classList.replace('opacity-100', 'opacity-0');
        } else {
          tooltip.classList.replace('opacity-0', 'opacity-100');
        }
      })
    },
  }
};
</script>
