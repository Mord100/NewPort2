import { Composition, registerRoot } from 'remotion';
import { LogoReveal } from './compositions/LogoReveal';
import { SocialPost } from './compositions/SocialPost';
import { loadFont } from './utils/fonts';

// Load Mona Sans before any frame renders
loadFont();

const RemotionRoot = () => {
  return (
    <>
      {/* ── Brand intro — 1920×1080 widescreen, 5s ── */}
      <Composition
        id="LogoReveal"
        component={LogoReveal}
        durationInFrames={360}
        fps={30}
        width={1080}
        height={1080}
      />

      {/* ── Instagram / LinkedIn post — 1080×1080, 6s ── */}
      <Composition
        id="SocialPost"
        component={SocialPost}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{
          headline: 'Software built\nfor the next\ngeneration.',
          eyebrow: 'DIV.DYNAMICS',
          year: '2025',
          url: 'divdynamics.co',
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);
