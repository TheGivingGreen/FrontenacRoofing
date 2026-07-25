"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";

/**
 * Explicit image slot with a declared aspect ratio (DESIGN.md §8 crop system).
 *
 * Turnkey behavior: pass the intended `src` (a filename in /public/images/).
 * Until that file exists the labeled placeholder shows; the moment a correctly
 * named image is dropped into /public/images/, it loads and replaces the
 * placeholder with no code change. `src` is prefixed with the deploy base path
 * so it resolves on GitHub Pages.
 *
 * See MEDIA_ASSETS.md for the filename → dimensions → prompt for every slot.
 */
type Ratio = "21-9" | "16-9" | "3-2" | "4-3" | "4-5" | "1-1";

export function ImageSlot({
  ratio,
  label,
  note,
  src,
  alt,
  position = "center",
  className = "",
  priority = false,
}: {
  ratio: Ratio;
  label: string;
  note?: string;
  src?: string;
  alt?: string;
  position?: string;
  className?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`image-slot ratio-${ratio} ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(src)}
          alt={alt ?? ""}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: position,
            position: "relative",
            zIndex: 1,
          }}
        />
      ) : null}
      {!loaded ? (
        <div className="image-slot__label" aria-hidden="true">
          <span className="image-slot__ratio">IMAGE · {ratio.replace("-", ":")}</span>
          <span className="image-slot__note">{label}</span>
          {note ? <span className="image-slot__note">{note}</span> : null}
          {src ? <span className="image-slot__file">{src.replace("/images/", "")}</span> : null}
        </div>
      ) : null}
    </div>
  );
}
