import { continueRender, delayRender, staticFile } from 'remotion';

let loaded = false;

export const loadFont = () => {
  // Guard against being called more than once
  if (loaded) return;

  const handle = delayRender('Loading Mona Sans');
  const url = staticFile('Mona-Sans.var.woff2');

  // Inject @font-face via a <style> element — more reliable than FontFace
  // API alone in the Remotion headless render context
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Mona Sans';
      src: url('${url}') format('woff2');
      font-weight: 200 900;
      font-style: normal;
    }
  `;
  document.head.appendChild(style);

  // Safety net: always call continueRender after 4s, even if the font
  // never resolves, so the render isn't blocked indefinitely.
  const fallback = setTimeout(() => {
    loaded = true;
    continueRender(handle);
  }, 4000);

  // Trigger font loading explicitly and clear the safety timer on success
  document.fonts
    .load("700 1em 'Mona Sans'")
    .then(() => {
      loaded = true;
      clearTimeout(fallback);
      continueRender(handle);
    })
    .catch(() => {
      loaded = true;
      clearTimeout(fallback);
      continueRender(handle);
    });
};
