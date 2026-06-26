/**
 * 首页文章卡片：快速编辑按钮
 * hover 时右上角出现 ✏️，点击跳转到 admin 编辑该文章
 */
(function () {
  function urlToFilename(href) {
    // 先解码 URL（处理中文标题如 %E6%B5%8B%E8%AF%95 → 测试）
    try { href = decodeURIComponent(href); } catch (e) {}
    // /2026/06/26/测试/ → 2026-06-26-测试
    var m = href.match(/\/(\d{4})\/(\d{2})\/(\d{2})\/([^/?#]+)\/?$/);
    return m ? m[1] + '-' + m[2] + '-' + m[3] + '-' + m[4] : null;
  }

  function addEditButtons() {
    var cards = document.querySelectorAll('.post-card-main, .index-card');
    cards.forEach(function (card) {
      if (card.querySelector('.card-edit-btn')) return;

      // 找文章链接（含年份路径）
      var link = card.querySelector('a[href*="/20"]');
      if (!link) return;

      var filename = urlToFilename(link.getAttribute('href'));
      if (!filename) return;

      var btn = document.createElement('a');
      btn.className = 'card-edit-btn';
      btn.href = '/admin/#/collections/posts/edit/' + encodeURIComponent(filename);
      btn.title = '编辑文章';
      btn.innerHTML = '✏️';
      btn.style.cssText = [
        'position:absolute', 'top:10px', 'right:10px',
        'width:30px', 'height:30px',
        'display:flex', 'align-items:center', 'justify-content:center',
        'background:rgba(255,255,255,0.92)',
        'border-radius:50%', 'font-size:14px',
        'box-shadow:0 1px 6px rgba(0,0,0,0.18)',
        'text-decoration:none',
        'opacity:0', 'transition:opacity 0.2s', 'z-index:10'
      ].join(';');

      var wrapper = card.querySelector('.post-card-img') || card;
      if (getComputedStyle(wrapper).position === 'static') {
        wrapper.style.position = 'relative';
      }
      wrapper.appendChild(btn);

      card.addEventListener('mouseenter', function () { btn.style.opacity = '1'; });
      card.addEventListener('mouseleave', function () { btn.style.opacity = '0'; });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addEditButtons);
  } else {
    addEditButtons();
  }
})();
