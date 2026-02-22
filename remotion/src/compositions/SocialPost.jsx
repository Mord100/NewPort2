import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { C } from '../utils/colors';
import { easeOutCubic, easeOutQuart } from '../utils/easing';

// ─── Timeline (30 fps, 180 frames = 6s) ────────────────────────────────────
//  f0–10   hold black
//  f10–40  eyebrow + year slide up
//  f25–65  blue rule draws left → right
//  f45–80  headline line 1 clips up
//  f60–95  headline line 2 clips up
//  f75–110 headline line 3 clips up
//  f100–130 bottom rule + url fade in
//  f130+   full hold

const TextReveal = ({ children, from, to, style }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOutCubic,
  });
  return (
    <div style={{ overflow: 'hidden', ...style }}>
      <div style={{ transform: `translateY(${(1 - progress) * 110}%)` }}>
        {children}
      </div>
    </div>
  );
};

export const SocialPost = ({
  headline = 'Software built\nfor the next\ngeneration.',
  eyebrow = 'DIV.DYNAMICS',
  year = '2025',
  url = 'divdynamics.co',
}) => {
  const frame = useCurrentFrame();
  const lines = headline.split('\n');

  const eyebrowOpacity = interpolate(frame, [10, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const eyebrowY = interpolate(frame, [10, 40], [10, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOutCubic,
  });

  const ruleScale = interpolate(frame, [25, 65], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOutQuart,
  });

  const bottomOpacity = interpolate(frame, [100, 130], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bottomY = interpolate(frame, [100, 130], [10, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOutCubic,
  });

  const PADDING = 80;
  const LABEL = {
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.bg,
        fontFamily: "'Mona Sans', sans-serif",
        padding: PADDING,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Top: eyebrow + blue rule ─────────────────────── */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 20,
            opacity: eyebrowOpacity,
            transform: `translateY(${eyebrowY}px)`,
          }}
        >
          <span style={{ ...LABEL, color: C.white }}>{eyebrow}</span>
          <span style={{ fontSize: 18, fontWeight: 400, letterSpacing: '0.06em', color: C.muted }}>
            {year}
          </span>
        </div>
        <div
          style={{
            height: 1,
            backgroundColor: C.blue,
            transformOrigin: 'left center',
            transform: `scaleX(${ruleScale})`,
          }}
        />
      </div>

      {/* ── Middle: headline (flex-grow → vertical center) ── */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div>
          {lines.map((line, i) => (
            <TextReveal
              key={i}
              from={45 + i * 15}
              to={80 + i * 15}
              style={{ marginBottom: i < lines.length - 1 ? 10 : 0 }}
            >
              <div
                style={{
                  fontSize: 108,
                  fontWeight: 600,
                  color: C.white,
                  lineHeight: 1.0,
                  letterSpacing: '-0.025em',
                }}
              >
                {line}
              </div>
            </TextReveal>
          ))}
        </div>
      </div>

      {/* ── Bottom: thin rule + url ─────────────────────── */}
      <div
        style={{
          opacity: bottomOpacity,
          transform: `translateY(${bottomY}px)`,
        }}
      >
        <div style={{ height: 1, backgroundColor: C.dim, marginBottom: 24 }} />
        <span
          style={{
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: C.muted,
          }}
        >
          {url}
        </span>
      </div>
    </AbsoluteFill>
  );
};
