import { continueRender, delayRender, staticFile } from 'remotion';

export const loadFont = () => {
  const handle = delayRender('Loading Mona Sans');
  const font = new FontFace(
    'Mona Sans',
    `url(${staticFile('Mona-Sans.var.woff2')}) format('woff2')`,
    { weight: '200 900', style: 'normal' }
  );
  font
    .load()
    .then(() => {
      document.fonts.add(font);
      continueRender(handle);
    })
    .catch((err) => {
      console.error('Font load failed:', err);
      continueRender(handle);
    });
};
