'use strict';
// 目前以首頁內的段落連結導覽，後續可替換成 Google 協作平台子頁網址。
// 讓鍵盤與輔助閱讀工具在站內跳轉後，同步移到目標區塊。
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});
