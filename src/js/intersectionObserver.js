'use strict';

console.log('load suceess!');

const boxes = document.querySelectorAll('.box');

let options = {
  root: null,
  rootMargin: "-50% 0px",
  threshold: 0,
};

// html読み込み前に要素を探しにいってしまうことでfailed to constructエラーになった。もう少しスマートにしたい
setTimeout(() => {
  console.log(options.root);
  options.root = '#lazyload';
  console.log(options.root);
}, 100)

const observer = new IntersectionObserver(doWhenIntersect, options);

// それぞれのboxを監視する
boxes.forEach(box => {
  observer.observe(box);
})

function doWhenIntersect(entries) {
  // 交差検知をしたものの中で、isIntersectingがtrueのものをスタイル変更の関数に渡す
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      changeBackgroundColor(entry.target)
    }
  })
}

function changeBackgroundColor(item) {
  item.style.backgroundColor = 'red';
}