<template>
  <div class="bg-white rounded-3xl p-8 pb-12 shadow-xl">
    <h2 class="text-center mb-4">送信完了！</h2>
    <p class="mb-4">
      {{ this.$store.state.data.nickname }}さん、投稿してくれてありがとうございました！何度でも応募できるので、また思いついたら投稿してくださいね。
    </p>
    <ul class="text-sm text-gray-500">
      <li>名前案: {{ this.$store.state.data.name }}</li>
      <li>想い: {{ this.$store.state.data.reason }}</li>
    </ul>
    <a
      href="../"
      class="bg-green-400 text-white rounded-full w-full mt-6 p-1 h-9 focus:outline-none block text-center"
      >TOPへ戻る</a
    >
  </div>
</template>

<script>
export default {
}
</script>
