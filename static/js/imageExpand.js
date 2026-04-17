// imageExpand.js
// Adds click-to-expand lightbox to all markdown images in Perf Agent Docs

(function () {
  function attachLightbox() {
    document.addEventListener('click', function (e) {
      const img = e.target.closest('.theme-doc-markdown img');
      if (!img) return;

      // Don't open lightbox if image is already inside an overlay
      if (img.closest('.image-viewer-overlay')) return;

      const overlay = document.createElement('div');
      overlay.className = 'image-viewer-overlay';

      const expanded = document.createElement('img');
      expanded.src = img.src;
      expanded.alt = img.alt || '';

      const close = document.createElement('button');
      close.className = 'image-viewer-close';
      close.textContent = '✕';
      close.setAttribute('aria-label', 'Close image');

      // Close on button click
      close.addEventListener('click', function (ev) {
        ev.stopPropagation();
        overlay.remove();
      });

      // Close on overlay background click
      overlay.addEventListener('click', function (ev) {
        if (ev.target === overlay) overlay.remove();
      });

      // Close on Escape key
      function onKeyDown(ev) {
        if (ev.key === 'Escape') {
          overlay.remove();
          document.removeEventListener('keydown', onKeyDown);
        }
      }
      document.addEventListener('keydown', onKeyDown);

      overlay.appendChild(expanded);
      overlay.appendChild(close);
      document.body.appendChild(overlay);
    });
  }

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachLightbox);
  } else {
    attachLightbox();
  }
})();