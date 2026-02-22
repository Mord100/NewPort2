import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { C } from '../utils/colors';
import { easeOutCubic, easeOutQuart, easeInOutCubic } from '../utils/easing';

// ─── Image dimensions ────────────────────────────────────────────────────────
//  brandmark.png    327 × 358   (≈ square)
//  divwev*.png     1600 × 400   (4 : 1)
//
//  At rendered height 110px → logo width = 440px
//  Icon portion = 440 × (327/358 × 400/1600) ≈ 100px  →  22.7% of logo width
//  ICON_CLIP = 77%  (right clip that hides the text, shows only icon)
//
//  Zone: 800px centered in 1080px canvas  →  zone left = 140px canvas
//  Centered logo: left = (800-440)/2 = 180px in zone
//  Icon center in zone: 180 + 50 = 230px
//  Zone center: 400px  →  DRIFT = 230 - 400 = -170px
//
//  So: brandmark spins at center (400) while drifting -170px → arrives at
//  icon center (230) exactly when spin ends. Logo text then reveals rightward.

const ZONE_W      = 800;
const LOGO_LEFT   = 180;           // logo left edge — centers 440px logo in 800px zone
const ICON_CLIP   = 77;            // % of logo width occupied by text (hidden at intro start)
const ICON_L_CLIP = 100 - ICON_CLIP; // 23% — permanently clips the embedded icon from the logo image
const DRIFT       = -170;          // px brandmark travels during spin (center → icon pos)

// ─── Timeline (30 fps, 360 frames = 12s) ────────────────────────────────────
//
//  INTRO (dark)
//  f0–20    hold black
//  f15–50   blue rule draws left → right
//  f20–55   brandmark entrance (fade + scale + rise)
//  f55–90   spin 360° + drift -170px  ← shorter spin, simultaneous lateral move
//  f82–95   logo icon fades in (while spin is decelerating)
//  f90–128  brandmark fades at icon position
//  f90–145  logo clip opens 77% → 0%  (text slides out rightward from icon)
//  f145–172 tagline slides up
//  f172–210 hold dark
//
//  THEME TRANSITION
//  f210–248 bg + logo crossfades dark → white
//
//  OUTRO (white)
//  f248–260 hold white
//  f260–288 tagline fades out + drops
//  f268–308 logo clip collapses 0% → 77%  (text retracts back into icon)
//  f272–305 outro brandmark fades in at icon position (x = 230)
//  f305–335 logo icon fades out
//  f308–348 outro brandmark drifts +170px + spins -360°  (mirror of intro)
//  f345–360 outro brandmark fades out at center
//  f348–360 blue rule collapses right → left

export const LogoReveal = () => {
  const frame = useCurrentFrame();

  // Content stays white (inverted) on image bg — no theme flip
  const taglineColor = 'rgb(255, 255, 255)';

  // ── 2. Blue rule ─────────────────────────────────────────────────────────
  const ruleIn = interpolate(frame, [15, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOutQuart,
  });
  const ruleOut = interpolate(frame, [348, 360], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOutQuart,
  });
  const ruleScale = frame < 348 ? ruleIn : ruleOut;
  const ruleOrigin = frame < 348 ? 'left center' : 'right center';

  // ── 3. Brandmark (stays visible from intro through theme to end of outro) ───
  // Entrance
  const brandmarkIn   = interpolate(frame, [20, 55],  [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOutCubic });
  const brandmarkOut  = interpolate(frame, [345, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOutCubic });
  const brandmarkOpacity = Math.min(brandmarkIn, brandmarkOut);

  const brandmarkY    = interpolate(frame, [20, 55], [16, 0],  { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOutCubic });
  const brandmarkScale = interpolate(frame, [20, 55], [0.85, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOutCubic });

  // Intro: spin 360° + drift to icon position (f55 → f90)
  const spinProgress = interpolate(frame, [55, 90], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeInOutCubic,
  });
  // Outro: drift back to center + spin -360° (f308 → f348)
  const outroProgress = interpolate(frame, [308, 348], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeInOutCubic,
  });
  const brandmarkX   = frame < 308 ? spinProgress * DRIFT : DRIFT + outroProgress * (-DRIFT);
  const brandmarkRot = frame < 308 ? spinProgress * 360 : 360 + outroProgress * -360;

  // ── 4. Logo clip reveal ──────────────────────────────────────────────────
  // Intro: starts at ICON_CLIP (icon visible, text hidden) → opens to 0% full logo
  const clipIntro = interpolate(frame, [90, 145], [ICON_CLIP, 0], {
    extrapolateLeft: 'clamp',   // before f90: stays at ICON_CLIP (icon only)
    extrapolateRight: 'clamp',
    easing: easeOutCubic,
  });
  // Outro: 0% → ICON_CLIP (text retracts back into icon)
  const clipOutro = interpolate(frame, [268, 308], [0, ICON_CLIP], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOutCubic,
  });
  // Most restrictive clip wins at every frame
  const logoClipRight = Math.max(clipIntro, clipOutro);

  // Logo opacity: fades in while spin decelerates, fades out in outro
  const logoOpacityIn  = interpolate(frame, [82, 96],  [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOutCubic });
  const logoOpacityOut = interpolate(frame, [305, 335],[1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOutCubic });
  const logoOpacity = Math.min(logoOpacityIn, logoOpacityOut);

  const logoStyle = {
    position: 'absolute',
    left: LOGO_LEFT,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    clipPath: `inset(0 ${logoClipRight}% 0 ${ICON_L_CLIP}%)`,
  };

  // ── 5. Tagline ───────────────────────────────────────────────────────────
  const taglineIn  = interpolate(frame, [145, 172], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOutCubic });
  const taglineOut = interpolate(frame, [260, 288], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOutCubic });
  const taglineOpacity = Math.min(taglineIn, taglineOut);

  const taglineYIn  = interpolate(frame, [145, 172], [10, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOutCubic });
  const taglineYOut = interpolate(frame, [260, 288], [0, 10], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOutCubic });
  const taglineY = frame < 260 ? taglineYIn : taglineYOut;

  return (
    <AbsoluteFill
      style={{
        fontFamily: "'Mona Sans', sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Blue creased paper background image */}
      <Img
        src={staticFile('background-paper.jpg')}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Blue accent rule */}
        <div
          style={{
            width: 64,
            height: 1,
            backgroundColor: C.blue,
            marginBottom: 72,
            transformOrigin: ruleOrigin,
            transform: `scaleX(${ruleScale})`,
          }}
        />

        {/* Logo zone */}
        <div style={{ position: 'relative', height: 110, width: ZONE_W, marginBottom: 52 }}>

          {/* Brandmark: entrance → spin+drift to icon → stays visible → outro drift+spin → fade out */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: brandmarkOpacity,
              transform: `translateX(${brandmarkX}px) translateY(${brandmarkY}px) rotate(${brandmarkRot}deg) scale(${brandmarkScale})`,
              transformOrigin: 'center center',
            }}
          >
            {/* Solid white brandmark via mask — no invert, no pixel edges */}
            <div
              style={{
                width: (96 * 327) / 358,
                height: 96,
                backgroundColor: '#ffffff',
                maskImage: `url(${staticFile('brandmark.png')})`,
                WebkitMaskImage: `url(${staticFile('brandmark.png')})`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
          </div>

          {/* Full logo — white (inverted) on image bg, clip reveals text rightward */}
          <div style={{ ...logoStyle, opacity: logoOpacity }}>
            <Img
              src={staticFile('divwev-inverted.png')}
              style={{ height: 110, width: 'auto', display: 'block' }}
            />
          </div>

        </div>

        {/* Tagline */}
        <div
          style={{
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: taglineColor,
          }}
        >
          divdynamicsmw.com
        </div>

        {/* Social links — same reveal as tagline */}
        <div
          style={{
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginTop: 20,
          }}
        >
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: taglineColor, lineHeight: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: taglineColor, lineHeight: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: taglineColor, lineHeight: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>

      </div>
    </AbsoluteFill>
  );
};
