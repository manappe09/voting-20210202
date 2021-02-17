<template>
  <div>
    <section class="bg-white rounded-3xl p-8 pb-12 shadow-xl">
      <p class="leading text-sm mb-8">
        伝説の生き物にぴったりな名前を募集します！<br /><br />
        伝説の生き物とは…<br />
        ＊頭はウサギ<br />
        ＊首は竜<br />
        ＊両腕は鬼<br />
        などなど、なんだか強そうな生き物だ！<br /><br />
        応募方法は、下記に入力して送るだけ！<br />
        1人何回でも応募可能なので、奮って応募してね！
      </p>
      <form action="post" class="form">
        <label class="text-xs text-gray-400" for="name">名前案</label><br />
        <input
          type="text"
          id="name"
          class="border border-solid border-gray-300 rounded-full w-full h-9 mb-2 pl-2 focus:outline-none focus:border-green-400 appearance-none"
          placeholder="ドラゴンくん"
          v-model="name"
        /><br />
        <div class="flex items-end max-w-full w-full justify-between mb-2">
          <div>
            <label class="text-xs text-gray-400" for="voter">投票者属性</label
            ><br />
            <select
              id="voter"
              class="border border-solid border-gray-300 rounded-full flex-auto text-sm h-9 pl-2 w-11/12 focus:outline-none focus:border-green-400 appearance-none"
              v-model="voter"
            >
              <option disabled selected>属性を選択</option>
              <option value="friend">知り合い</option>
              <option value="follower">SNSフォロワー</option>
              <option value="stranger">通りすがり</option>
            </select>
          </div>
          <div>
            <label class="text-xs text-gray-400" for="nickname"
              >投票者ニックネーム</label
            ><br />
            <input
              type="text"
              id="nickname"
              class="border border-solid border-gray-300 rounded-full h-9 pl-2 focus:outline-none focus:border-green-400 appearance-none"
              placeholder="マナっぺ"
              v-model="nickname"
            /><br />
          </div>
        </div>
        <label class="text-xs text-gray-400" for="reason"
          >名前に込めた想い</label
        ><br />
        <textarea
          type="text"
          id="reason"
          class="border border-solid border-gray-300 rounded-full w-full p-2 focus:outline-none focus:border-green-400 appearance-none"
          placeholder="かっこいいから"
          rows="1"
          v-model="reason"
        ></textarea
        ><br />
        <button
          type="submit"
          class="bg-green-400 text-white rounded-full w-full mt-6 p-1 h-9 focus:outline-none"
          @click.prevent="submit"
        >
          送信
        </button>
      </form>
      <div class="posts mt-24">
        <h2 class="text-center">
          <span
            class="text-lg border-b-2 mb-6 border-green-400 w-auto inline-block"
            @click="submit"
            >投稿一覧</span
          >
        </h2>
        <div
          id=""
          class="flex justify-around flex-wrap min-h-screen content-start"
        >
          <Post
            v-for="(post, index) in posts"
            :key="post.name"
            :post-data="post"
            :post-index="index"
            @is-post-mounted="postMounted"
          ></Post>
          <!-- <p class="text-yellow-400 text-xs font-semibold text-center mt-8">
            もっと読み込む
          </p> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Post from "../components/Post";
import { createObserver } from "../js/intersectionObserver";

export default {
  props: ["number"],
  data() {
    return {
      name: "",
      nickname: "",
      voter: "",
      reason: "",
      posts: [],
    };
  },
  created() {
    axios.get("posts").then((response) => {
      this.posts = response.data.documents;
    });
  },
  methods: {
    submit() {
      this.$store.dispatch("updateMainData", {
        name: this.name,
        nickname: this.nickname,
        voter: this.voter,
        reason: this.reason,
      });
    },
    postMounted() {
      createObserver();
    }
  },
  components: {
    Post,
  },
};
</script>
