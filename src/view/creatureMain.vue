<template>
  <div>
    <form action="post" class="form">
      <h2>投票フォーム</h2>
      <label for="name">名前</label>
      <input type="text" id="name" class="border-gray-300 rounded-full" /><br />
      <label for="voter">投票者属性</label>
      <select id="voter" class="border-gray-300 rounded-full">
        <option value="friend">知り合い</option>
        <option value="follower">Twitterフォロワー</option>
        <option value="stranger">通りすがり</option> 
      </select><br />
      <label for="nickname">投票者ニックネーム</label>
      <input
        type="text"
        id="nickname"
        class="border-gray-300 rounded-full"
      /><br />
      <button type="submit">送信</button>
    </form>
    <div class="posts"></div>
  </div>
</template>
