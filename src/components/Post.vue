<template>
  <div
    class="posts-item shadow-lg w-5/12 h-40 mb-4 rounded-3xl overflow-hidden transition duration-500"
    :class="initialOpacity"
  >
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
    <p id="tooltip" class="invisible">
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
      return this.postIndex < 4 ? 'opacity-100' : 'opacity-0';
    }
  },
  created() {
    axios
      .get(
        'posts'
      )
      .then(response => {
        this.posts = response.data.documents;
      })
  }
};
</script>
