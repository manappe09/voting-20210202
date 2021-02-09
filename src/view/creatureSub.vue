<template>
  <div>
    <section class="bg-white rounded-3xl p-8 pb-12 shadow-xl">
      <p class="leading text-sm mb-8">
        もう一体の伝説の生き物にも名前をつけよう！
      </p>
      <form action="post" class="form">
        <label class="text-xs text-gray-400" for="name">名前案</label><br>
        <input type="text" id="name" class="border border-solid border-gray-300 rounded-full w-full h-9 mb-2 pl-2 focus:outline-none focus:border-green-400" placeholder="ドラゴンくん"><br>
        <div class="flex items-end max-w-full w-full justify-between mb-2">
          <div>
            <label class="text-xs text-gray-400" for="voter">投票者属性</label><br>
            <select id="voter" class="border border-solid border-gray-300 rounded-full flex-auto text-sm h-9 pl-2 w-11/12 focus:outline-none focus:border-green-400">
              <option disabled selected>属性を選択</option>
              <option value="friend">知り合い</option>
              <option value="follower">SNSフォロワー</option>
              <option value="stranger">通りすがり</option>
            </select>
          </div>
          <div>
            <label class="text-xs text-gray-400" for="nickname">投票者ニックネーム</label><br>
            <input type="text" id="nickname" class="border border-solid border-gray-300 rounded-full h-9 pl-2 focus:outline-none focus:border-green-400" placeholder="マナっぺ"><br>
          </div>
        </div>
        <label class="text-xs text-gray-400" for="reason">名前に込めた想い</label><br>
        <textarea type="text" id="reason" class="border border-solid border-gray-300 rounded-full w-full p-2 focus:outline-none focus:border-green-400" placeholder="かっこいいから" rows="1"></textarea><br>
        <button type="submit" class="bg-green-400 text-white rounded-full w-full mt-6 p-1 h-9 focus:outline-none">送信</button>
      </form>
      <div class="posts mt-24">
        <h2 class="text-center"><span class="text-lg border-b-2 mb-6 border-green-400 w-auto inline-block">投稿一覧</span></h2>
        <div class="flex justify-around flex-wrap">
          <div class="shadow-lg w-5/12 mb-4 rounded-3xl overflow-hidden">
            <p class="text-center bg-yellow-400 text-white h-1/2 text-xl font-semibold flex items-center justify-center"><span>ドラお</span></p>
            <span class="text-xs pl-2 text-gray-600">知り合い</span><br>
            <span class="text-sm pl-2 block">どら焼き大好きさん</span>
            <p id="tooltip" class="invisible">どら焼きを食べている時に思いつきました。</p>
          </div>
          <div class="shadow-lg w-5/12 mb-4 rounded-3xl overflow-hidden">
            <p class="text-center bg-yellow-400 text-white h-1/2 text-xl font-semibold flex items-center justify-center"><span>ドラお</span></p>
            <span class="text-xs pl-2 text-gray-600">知り合い</span><br>
            <span class="text-sm pl-2 block">どら焼き大好きさん</span>
            <p id="tooltip" class="invisible">どら焼きを食べている時に思いつきました。</p>
          </div>
          <div class="shadow-lg w-5/12 mb-4 rounded-3xl overflow-hidden">
            <p class="text-center bg-yellow-400 text-white h-1/2 text-xl font-semibold flex items-center justify-center"><span>ドラお</span></p>
            <span class="text-xs pl-2 text-gray-600">知り合い</span><br>
            <span class="text-sm pl-2 block">どら焼き大好きさん</span>
            <p id="tooltip" class="invisible">どら焼きを食べている時に思いつきました。</p>
          </div>
          <div class="shadow-lg w-5/12 mb-4 rounded-3xl overflow-hidden">
            <p class="text-center bg-yellow-400 text-white h-1/2 text-xl font-semibold flex items-center justify-center"><span>ドラお</span></p>
            <span class="text-xs pl-2 text-gray-600">知り合い</span><br>
            <span class="text-sm pl-2 block">どら焼き大好きさん</span>
            <p id="tooltip" class="invisible">どら焼きを食べている時に思いつきました。</p>
          </div>
        </div>
        <p class="text-yellow-400 text-xs font-semibold text-center mt-8">もっと読み込む</p>
      </div>
    </section>
  </div>
</template>
