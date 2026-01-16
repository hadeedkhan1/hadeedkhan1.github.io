document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor') as HTMLElement;

  if (!cursor) return;

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateCursor() {
    cursor.style.transform = `translate(${mouseX - 14}px, ${mouseY - 14}px)`;
    requestAnimationFrame(updateCursor);
  }

  updateCursor();
});
