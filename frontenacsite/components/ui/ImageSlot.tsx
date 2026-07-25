/**
 * Explicit image slot with declared aspect ratio (DESIGN.md §8 crop system,
 * §20.7). Renders a labeled placeholder until approved photography is supplied.
 * When a real `src` is passed it renders the image with the same ratio.
 *
 * This keeps the guardrail from PROJECT_BRIEF.md visible: no invented buildings,
 * no stock filler presented as completed work.
 */
type Ratio = "21-9" | "16-9" | "3-2" | "4-3" | "4-5" | "1-1";

export function ImageSlot({
  ratio,
  label,
  note,
  src,
  alt,
  className = "",
  priority = false,
}: {
  ratio: Ratio;
  label: string;
  note?: string;
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`image-slot ratio-${ratio} ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          loading={priority ? "eager" : "lazy"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div className="image-slot__label" aria-hidden="true">
          <span className="image-slot__ratio">IMAGE · {ratio.replace("-", ":")}</span>
          <span className="image-slot__note">{label}</span>
          {note ? <span className="image-slot__note">{note}</span> : null}
        </div>
      )}
    </div>
  );
}
