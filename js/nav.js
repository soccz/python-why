// Navigation - 공통 헤더/푸터 + 테마 전환
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle — FOUC 인라인 스크립트가 data-theme을 이미 설정. 여기서는 버튼 라벨 동기화 + 클릭 핸들러.
  const setBtnIcon = (btn, theme) => {
    const icon = theme === 'dark' ? '☀️' : '🌙';
    // aria-hidden 래퍼 유지
    const span = btn.querySelector('span[aria-hidden]');
    if (span) span.textContent = icon;
    else btn.textContent = icon;
  };

  const currentTheme = () => document.documentElement.getAttribute('data-theme') || 'light';

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    setBtnIcon(btn, currentTheme());
    btn.addEventListener('click', () => {
      const next = currentTheme() === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('python-why-theme', next); } catch (e) {}
      setBtnIcon(btn, next);
    });
  });

  // Back to top — rAF로 스로틀 + passive listener
  const topBtn = document.querySelector('.back-to-top');
  if (topBtn) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        topBtn.classList.toggle('visible', window.scrollY > 400);
        ticking = false;
      });
    }, { passive: true });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
