// Code Copy Button - 코드 블록 복사 기능
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    // original 텍스트는 click handler 바깥에서 한 번만 캡처 (연타 시 "복사됨!"이 original로 오염되는 버그 방지)
    const original = btn.textContent;
    let busy = false;
    btn.addEventListener('click', () => {
      if (busy) return;
      const block = btn.closest('.code-block');
      if (!block) return;
      const codeEl = block.querySelector('code');
      if (!codeEl) return;
      const code = codeEl.textContent;
      const showMsg = (msg, ok) => {
        busy = true;
        btn.textContent = msg;
        btn.classList.toggle('copied', ok);
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('copied');
          busy = false;
        }, 2000);
      };
      if (!navigator.clipboard) {
        showMsg('복사 실패', false);
        return;
      }
      navigator.clipboard.writeText(code)
        .then(() => showMsg('복사됨!', true))
        .catch(() => showMsg('복사 실패', false));
    });
  });
});
