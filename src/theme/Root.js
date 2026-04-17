import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    const handleClick = (e) => {
      const img = e.target.closest('.step-image img');
      if (!img) return;

      const overlay = document.createElement('div');
      overlay.className = 'image-overlay';
      overlay.innerHTML = `
        <img src="${img.src}" alt="${img.alt}">
        <button>&times;</button>
      `;

      document.body.appendChild(overlay);

      const close = () => overlay.remove();
      overlay.addEventListener('click', (ev) => {
        if (ev.target === overlay || ev.target.tagName === 'BUTTON') close();
      });
      document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') close();
      }, { once: true });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <>{children}</>;
}
