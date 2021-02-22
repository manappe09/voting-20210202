"use strict";
import Vue from 'vue';
import Vuex from 'vuex';
import store from '../store';

Vue.use(Vuex)

let boxes = [];
let observer;

export function createObserver() {
  boxes = document.querySelectorAll(".posts-item");

  let options = {
    root: null,
    rootMargin: "-40% 0px",
    threshold: 0,
  };

  observer = new IntersectionObserver(doWhenIntersect, options);

  // html読み込み前に要素を探しにいってしまうことでfailed to constructエラーになった。もう少しスマートにしたい。js importを非同期にしてもダメっぽい。。
  setTimeout(() => {
    // それぞれのboxを監視する
    boxes.forEach((box) => {
      observer.observe(box);
    });
  }, 100);
}

function doWhenIntersect(entries) {
  // 交差検知をしたものの中で、isIntersectingがtrueのものをスタイル変更の関数に渡す
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fadeInItem(entry.target);
    }
  });
}

function fadeInItem(item) {
  item.classList.add("opacity-100");
}

// beforeRouteLeaveで監視を止める -> routeが変わった後に再度監視を始める
// 切り替え時、切り替える時点でのDOM(切り替え前)を取得している -> 切り替えた後再取得する必要。