import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import { C } from '../utils/colors';
import { easeOutCubic, easeOutQuart } from '../utils/easing';

// ─── Canvas constants ─────────────────────────────────────────────────────────
const PAD_X = 80;
const PAD_Y = 140;
const CONTENT_W = 1080 - PAD_X * 2; // 920

// ─── Interpolation helpers ────────────────────────────────────────────────────
const CL = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' };

const fi = (frame, a, b, ease = easeOutCubic) =>
  interpolate(frame, [a, b], [0, 1], { ...CL, easing: ease });

// Crossfade: fades in [iA→iB], fades out [oA→oB]
const sceneOp = (frame, iA, iB, oA, oB) =>
  Math.min(
    interpolate(frame, [iA, iB], [0, 1], CL),
    interpolate(frame, [oA, oB], [1, 0], CL)
  );

// ─── Primitive components ─────────────────────────────────────────────────────

// Text wipes up from clip — same pattern as SocialPost
const TextReveal = ({ from, to, children, style }) => {
  const frame = useCurrentFrame();
  const p = fi(frame, from, to);
  return (
    <div style={{ overflow: 'hidden', ...style }}>
      <div style={{ transform: `translateY(${(1 - p) * 110}%)` }}>{children}</div>
    </div>
  );
};

// Opacity + upward translate
const FadeUp = ({ from, to, dy = 16, children, style }) => {
  const frame = useCurrentFrame();
  const p = fi(frame, from, to);
  return (
    <div style={{ opacity: p, transform: `translateY(${(1 - p) * dy}px)`, ...style }}>
      {children}
    </div>
  );
};

// Horizontal rule that draws from left (or collapses right)
const Rule = ({ scaleX, color, width = 56 }) => (
  <div
    style={{
      width,
      height: 1,
      backgroundColor: color,
      transformOrigin: 'left center',
      transform: `scaleX(${scaleX})`,
    }}
  />
);

// ─── Shared style helpers ─────────────────────────────────────────────────────
const F = { fontFamily: "'Mona Sans', sans-serif" };

// Tracked uppercase label
const eyebrow = (color, size = 22) => ({
  ...F,
  fontSize: size,
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color,
});

// Hero / display text factory
const hero = (color, size = 108, weight = 700) => ({
  ...F,
  fontSize: size,
  fontWeight: weight,
  letterSpacing: '-0.03em',
  lineHeight: 0.92,
  color,
});

// ─── Content ──────────────────────────────────────────────────────────────────
const SERVICES = [
  ['01', 'Web development'],
  ['02', 'Application development'],
  ['03', 'E-commerce'],
  ['04', 'Content management'],
  ['05', 'Graphics design'],
  ['06', 'Branding'],
];

// ─── Timeline (800 frames ≈ 26.7s @ 30fps) ───────────────────────────────────
//
//  A  WHITE  f0–215    in f0–15,   out f200–215
//  B  BLUE   f200–450  in f200–215, out f435–450
//  C  WHITE  f435–605  in f435–450, out f590–605
//  D  BLUE   f590–745  in f590–605, out f730–745
//  E  WHITE  f730–800  in f730–745, out f788–800

export const MarketingReel = () => {
  const frame = useCurrentFrame();

  // ── Scene opacities ──────────────────────────────────────────────────────
  const opA = sceneOp(frame,    0,  15, 200, 215);
  const opB = sceneOp(frame,  200, 215, 435, 450);
  const opC = sceneOp(frame,  435, 450, 590, 605);
  const opD = sceneOp(frame,  590, 605, 730, 745);
  const opE = Math.min(
    fi(frame, 730, 745),
    interpolate(frame, [788, 800], [1, 0], CL)
  );

  // ── A: white brand intro ─────────────────────────────────────────────────
  const ruleA  = fi(frame,   8,  44, easeOutQuart);
  const logoOp = fi(frame,  15,  52);
  const logoY  = interpolate(frame, [15, 52],   [16, 0], { ...CL, easing: easeOutCubic });
  const subAOp = fi(frame, 148, 184);
  const subAY  = interpolate(frame, [148, 184], [14, 0], { ...CL, easing: easeOutCubic });
  const locAOp = fi(frame, 165, 200);

  // ── B: blue services ──────────────────────────────────────────────────────
  const eyeBOp = fi(frame, 210, 242);
  const eyeBY  = interpolate(frame, [210, 242], [10, 0], { ...CL, easing: easeOutCubic });
  const ruleBP = fi(frame, 292, 322, easeOutQuart);
  // 6 service rows, stagger every 16 frames from f312 (all done by f424, before f435 fade-out)
  const svc = SERVICES.map((_, i) => ({
    op: fi(frame, 312 + i * 16, 344 + i * 16),
    y:  interpolate(frame, [312 + i * 16, 344 + i * 16], [14, 0], { ...CL, easing: easeOutCubic }),
  }));

  // ── C: white stats ────────────────────────────────────────────────────────
  const eyeCOp = fi(frame, 448, 478);
  const eyeCY  = interpolate(frame, [448, 478], [10, 0], { ...CL, easing: easeOutCubic });
  const st1Op  = fi(frame, 464, 500);
  const st1Y   = interpolate(frame, [464, 500], [28, 0], { ...CL, easing: easeOutCubic });
  const st2Op  = fi(frame, 500, 536);
  const st2Y   = interpolate(frame, [500, 536], [28, 0], { ...CL, easing: easeOutCubic });
  const locCOp = fi(frame, 534, 568);
  const locCY  = interpolate(frame, [534, 568], [10, 0], { ...CL, easing: easeOutCubic });

  // ── D: blue CTA ───────────────────────────────────────────────────────────
  const ruleDSc = fi(frame, 655, 687, easeOutQuart);
  const urlOp   = fi(frame, 680, 712);
  const urlY    = interpolate(frame, [680, 712], [10, 0], { ...CL, easing: easeOutCubic });

  return (
    <AbsoluteFill style={{ backgroundColor: '#ffffff', ...F }}>

      {/* ════════════════════════════════════════════════════════════════════
          A  WHITE — BRAND INTRO
      ════════════════════════════════════════════════════════════════════ */}
      <AbsoluteFill style={{
        opacity: opA,
        backgroundColor: '#ffffff',
        padding: `${PAD_Y}px ${PAD_X}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>

        {/* Top: blue rule → dark logo */}
        <div>
          <Rule scaleX={ruleA} color={C.blue} width={60} />
          <div style={{ marginTop: 36, opacity: logoOp, transform: `translateY(${logoY}px)` }}>
            <Img src={staticFile('divwev.png')} style={{ height: 72, width: 'auto' }} />
          </div>
        </div>

        {/* Center: eyebrow + giant headline */}
        <div>
          <FadeUp from={58} to={90} dy={12}
            style={{ ...eyebrow(C.muted), marginBottom: 40 }}>
            New Gen Digital Innovations
          </FadeUp>

          <TextReveal from={78} to={112}>
            <div style={hero('#0a0a0a')}>Software built</div>
          </TextReveal>
          <TextReveal from={92} to={126}>
            <div style={hero('#0a0a0a')}>for the next</div>
          </TextReveal>
          {/* "generation." in blue — heavier weight for visual pop */}
          <TextReveal from={106} to={140}>
            <div style={hero(C.blue, 108, 800)}>generation.</div>
          </TextReveal>
        </div>

        {/* Bottom: descriptor + location tag */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <p style={{
            ...F,
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: '-0.01em',
            lineHeight: 1.6,
            color: '#737373',
            maxWidth: 480,
            margin: 0,
            opacity: subAOp,
            transform: `translateY(${subAY}px)`,
          }}>
            Digital products at the intersection of precision and purpose.
          </p>
          <div style={{ ...eyebrow('#a3a3a3'), opacity: locAOp }}>Malawi</div>
        </div>

      </AbsoluteFill>

      {/* ════════════════════════════════════════════════════════════════════
          B  BLUE — SERVICES
      ════════════════════════════════════════════════════════════════════ */}
      <AbsoluteFill style={{
        opacity: opB,
        backgroundColor: C.blue,
        padding: `${PAD_Y}px ${PAD_X}px`,
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Eyebrow */}
        <div style={{
          ...eyebrow('rgba(255,255,255,0.6)'),
          opacity: eyeBOp,
          transform: `translateY(${eyeBY}px)`,
          marginBottom: 48,
        }}>
          02 — What we build
        </div>

        {/* Section headline — white on blue, staggered clip reveals */}
        <div style={{ marginBottom: 52 }}>
          <TextReveal from={222} to={260}>
            <div style={hero('#ffffff', 116)}>We don't</div>
          </TextReveal>
          <TextReveal from={235} to={273}>
            <div style={hero('#ffffff', 116)}>do one</div>
          </TextReveal>
          <TextReveal from={248} to={286}>
            <div style={hero('#ffffff', 116)}>thing.</div>
          </TextReveal>
          {/* Subordinate line — smaller, muted white */}
          <TextReveal from={264} to={300}>
            <div style={{
              ...F,
              fontSize: 52,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: 'rgba(255,255,255,0.45)',
            }}>
              We do yours.
            </div>
          </TextReveal>
        </div>

        {/* Full-width white divider rule */}
        <div style={{ marginBottom: 28 }}>
          <Rule scaleX={ruleBP} color="rgba(255,255,255,0.18)" width={CONTENT_W} />
        </div>

        {/* Service list — compact rows fill remaining space */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
          {SERVICES.map(([n, title], i) => (
            <div
              key={n}
              style={{
                opacity: svc[i].op,
                transform: `translateY(${svc[i].y}px)`,
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: 14,
              }}
            >
              {/* mono number — very subtle */}
              <span style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.45)',
                flexShrink: 0,
                width: 36,
              }}>
                {n}
              </span>
              {/* title — clean white */}
              <span style={{ ...F, fontSize: 36, fontWeight: 500, letterSpacing: '-0.01em', color: '#ffffff' }}>
                {title}
              </span>
            </div>
          ))}
        </div>

      </AbsoluteFill>

      {/* ════════════════════════════════════════════════════════════════════
          C  WHITE — PROOF / BY THE NUMBERS
      ════════════════════════════════════════════════════════════════════ */}
      <AbsoluteFill style={{
        opacity: opC,
        backgroundColor: '#ffffff',
        padding: `${PAD_Y}px ${PAD_X}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>

        <div style={{
          ...eyebrow(C.muted),
          opacity: eyeCOp,
          transform: `translateY(${eyeCY}px)`,
          marginBottom: 64,
        }}>
          03 — By the numbers
        </div>

        {/* Stat: 10+ */}
        <div style={{
          borderTop: '1px solid #e5e5e5',
          padding: '48px 0',
          opacity: st1Op,
          transform: `translateY(${st1Y}px)`,
        }}>
          {/* Huge stat number */}
          <div style={{ ...F, fontSize: 160, fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: '#0a0a0a' }}>
            10+
          </div>
          <div style={{ ...F, fontSize: 28, fontWeight: 400, color: '#737373', marginTop: 16 }}>
            years of combined experience
          </div>
        </div>

        {/* Stat: 100% */}
        <div style={{
          borderTop: '1px solid #e5e5e5',
          padding: '48px 0',
          opacity: st2Op,
          transform: `translateY(${st2Y}px)`,
        }}>
          <div style={{ ...F, fontSize: 160, fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: '#0a0a0a' }}>
            100%
          </div>
          <div style={{ ...F, fontSize: 28, fontWeight: 400, color: '#737373', marginTop: 16 }}>
            client satisfaction
          </div>
        </div>

        {/* Location / URL row */}
        <div style={{
          borderTop: '1px solid #e5e5e5',
          paddingTop: 28,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          opacity: locCOp,
          transform: `translateY(${locCY}px)`,
        }}>
          <span style={{ ...F, fontSize: 26, fontWeight: 400, color: '#737373' }}>Malawi, Africa</span>
          <span style={{ ...eyebrow('#a3a3a3') }}>divdynamicsmw.com</span>
        </div>

      </AbsoluteFill>

      {/* ════════════════════════════════════════════════════════════════════
          D  BLUE — CTA
      ════════════════════════════════════════════════════════════════════ */}
      <AbsoluteFill style={{
        opacity: opD,
        backgroundColor: C.blue,
        padding: `${PAD_Y}px ${PAD_X}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>

        {/* Big CTA text — white on blue */}
        <TextReveal from={602} to={642} style={{ marginBottom: 6 }}>
          <div style={hero('#ffffff', 108, 700)}>Let's build</div>
        </TextReveal>
        {/* "something." slightly heavier — same size, more weight */}
        <TextReveal from={618} to={658} style={{ marginBottom: 80 }}>
          <div style={hero('#ffffff', 108, 800)}>something.</div>
        </TextReveal>

        {/* Rule + URL */}
        <div style={{ marginBottom: 32 }}>
          <Rule scaleX={ruleDSc} color="rgba(255,255,255,0.35)" width={80} />
        </div>
        <div style={{
          ...eyebrow('#ffffff', 22),
          letterSpacing: '0.2em',
          opacity: urlOp,
          transform: `translateY(${urlY}px)`,
        }}>
          divdynamicsmw.com
        </div>

      </AbsoluteFill>

      {/* ════════════════════════════════════════════════════════════════════
          E  WHITE — OUTRO LOGO LOCKUP
      ════════════════════════════════════════════════════════════════════ */}
      <AbsoluteFill style={{
        opacity: opE,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
      }}>
        <FadeUp from={742} to={768}>
          <Img src={staticFile('divwev.png')} style={{ height: 76, width: 'auto' }} />
        </FadeUp>
        <FadeUp from={752} to={776} dy={8}>
          <div style={{ ...eyebrow(C.muted, 20) }}>divdynamicsmw.com</div>
        </FadeUp>
      </AbsoluteFill>

    </AbsoluteFill>
  );
};
