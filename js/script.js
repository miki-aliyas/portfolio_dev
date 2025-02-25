'use strict';

// ページ読み込みまれた時にbodyタグにアクティブクラスを追加する（https://www.javadrive.jp/javascript/event/index1.html）
document.body.classList.add('active');

// ウィンドウの高さに合わせて#js-main-visualの高さを調整する
const mainVisual = document.getElementById('js-main-visual');
const winH = window.innerHeight;
mainVisual.style.height = winH + 'px';
