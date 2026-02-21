"use client";
import { useState } from "react";

/** Convert a URL to a base64 data URI. */
async function toDataUri(url) {
  const res = await fetch(url, { cache: "no-store" });
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Next.js <Image> serves optimised thumbnails via /_next/image?url=…&w=256…
 * Decode back to the original path so we can fetch the full-res file.
 */
function originalSrc(img) {
  const src = img.currentSrc || img.src || img.getAttribute("src") || "";
  try {
    const u = new URL(src, window.location.origin);
    if (u.pathname === "/_next/image") {
      const encoded = u.searchParams.get("url");
      if (encoded) return decodeURIComponent(encoded);
    }
  } catch { /* not a valid URL */ }
  return src;
}

/**
 * For every <img> inside `el`:
 *   1. Resolve the original full-res path
 *   2. Fetch it as a data URI
 *   3. Remove srcset so the browser uses our data URI
 * Returns a restore function.
 */
async function inlineImages(el) {
  const imgs = Array.from(el.querySelectorAll("img"));
  const saved = imgs.map((img) => ({
    src: img.getAttribute("src"),
    srcset: img.getAttribute("srcset"),
  }));

  await Promise.all(
    imgs.map(async (img) => {
      const src = originalSrc(img);
      if (!src || src.startsWith("data:")) return;
      try {
        const dataUri = await toDataUri(src);
        img.removeAttribute("srcset");
        img.setAttribute("src", dataUri);
        img.src = dataUri;
        // Wait for the new src to paint
        await new Promise((res) => {
          if (img.complete && img.naturalWidth > 0) return res();
          img.onload = res;
          img.onerror = res;
        });
      } catch {
        // Fallback: canvas-draw the already-loaded pixels
        if (img.complete && img.naturalWidth > 0) {
          try {
            const c = document.createElement("canvas");
            c.width = img.naturalWidth;
            c.height = img.naturalHeight;
            c.getContext("2d").drawImage(img, 0, 0);
            const dataUri = c.toDataURL("image/png");
            img.removeAttribute("srcset");
            img.setAttribute("src", dataUri);
            img.src = dataUri;
          } catch { /* tainted canvas — leave as-is */ }
        }
      }
    })
  );

  return () =>
    imgs.forEach((img, i) => {
      if (saved[i].srcset !== null) img.setAttribute("srcset", saved[i].srcset);
      else img.removeAttribute("srcset");
      if (saved[i].src !== null) {
        img.setAttribute("src", saved[i].src);
        img.src = saved[i].src;
      }
    });
}

/** Flatten all border-radius values to 0 for a clean rectangular export. */
function flattenBorderRadius(el) {
  const els = [el, ...el.querySelectorAll("*")];
  const saved = els.map((e) => e.style.borderRadius);
  els.forEach((e) => {
    if (getComputedStyle(e).borderRadius !== "0px") e.style.borderRadius = "0";
  });
  return () => els.forEach((e, i) => { e.style.borderRadius = saved[i]; });
}

export default function ExportButton({ targetId, filename }) {
  const [busy, setBusy] = useState(false);

  const handle = async () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    setBusy(true);
    const restoreImages = await inlineImages(el);
    const restoreRadius = flattenBorderRadius(el);
    try {
      const { toPng } = await import("html-to-image");
      const url = await toPng(el, { pixelRatio: 2, skipFonts: false });
      const a = document.createElement("a");
      a.href = url;
      a.download = filename + ".png";
      a.click();
    } finally {
      restoreRadius();
      restoreImages();
      setBusy(false);
    }
  };

  return (
    <button
      onClick={handle}
      disabled={busy}
      className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 hover:text-neutral-950 disabled:opacity-40 transition-colors flex items-center gap-1"
    >
      {busy ? "Exporting…" : "↓ Export"}
    </button>
  );
}
