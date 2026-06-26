(function () {
  function addShareBtn() {
    var post = document.querySelector('.post-content');
    if (!post || document.querySelector('.share-copy-btn')) return;

    var btn = document.createElement('button');
    btn.className = 'share-copy-btn';
    btn.innerHTML = '🔗 复制链接';
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(location.href).then(function () {
        btn.innerHTML = '✅ 已复制！';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.innerHTML = '🔗 复制链接';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
    post.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addShareBtn);
  } else {
    addShareBtn();
  }
})();
