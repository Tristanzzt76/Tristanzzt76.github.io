/**
 * 博客右下角悬浮「写文章」按钮
 */
(function () {
  var style = document.createElement('style');
  style.textContent = [
    '#admin-fab {',
    '  position: fixed; right: 28px; bottom: 80px; z-index: 9999;',
    '  display: flex; align-items: center; gap: 8px;',
    '  padding: 12px 18px;',
    '  background: linear-gradient(135deg, #3b82f6, #2563eb);',
    '  color: #fff !important; border-radius: 50px;',
    '  font-size: 14px; font-weight: 600;',
    '  text-decoration: none !important;',
    '  box-shadow: 0 4px 16px rgba(37,99,235,0.4);',
    '  transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);',
    '  cursor: pointer; border: none; user-select: none;',
    '}',
    '#admin-fab:hover {',
    '  transform: translateY(-3px) scale(1.05);',
    '  box-shadow: 0 8px 24px rgba(37,99,235,0.5);',
    '  color: #fff !important; text-decoration: none !important;',
    '}',
    '#admin-fab:active { transform: translateY(0) scale(0.97); }',
    '#admin-fab svg { width: 16px; height: 16px; flex-shrink: 0; }',
    '@media (max-width: 600px) {',
    '  #admin-fab { padding: 14px; border-radius: 50%; right: 20px; bottom: 70px; }',
    '  #admin-fab .fab-text { display: none; }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  var fab = document.createElement('a');
  fab.id = 'admin-fab';
  fab.href = '/admin/#/collections/posts/new';
  fab.title = '新建文章';
  fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg><span class="fab-text">写文章</span>';
  document.body.appendChild(fab);
})();
