// Spoiler Toggle - 답안 접기/펼치기
// <details>/<summary> 기본 동작 사용
document.addEventListener('DOMContentLoaded', () => {
  // 답안 모두 접은 상태로 시작
  document.querySelectorAll('details.answer').forEach(d => d.removeAttribute('open'));

  // A11y — 가로 스크롤 가능한 요소를 키보드 접근 가능하게
  // (axe: scrollable-region-focusable)
  document.querySelectorAll('pre, pre code.language-python').forEach(el => {
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
  });
});
