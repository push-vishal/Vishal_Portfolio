import { images } from "../content";
import { cn } from "../utils/cn";

type FrameProps = {
  src: string;
  alt: string;
  className?: string;
  ratio?: string; // tailwind aspect class
  glow?: boolean;
  caption?: string;
  overlay?: React.ReactNode;
  loading?: "lazy" | "eager";
};

/** Reusable premium image frame with rounded corners, gradient overlay, glow, hover zoom. */
export function Frame({
  src,
  alt,
  className,
  ratio = "aspect-[4/5]",
  glow = false,
  caption,
  overlay,
  loading = "lazy",
}: FrameProps) {
  return (
    <div className={cn("frame relative w-full", glow && "frame-glow", ratio, className)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src.includes("placeholder.svg")) return;
          img.src = images.placeholder;
        }}
      />
      {/* soft inner gradient (top → cyan tint) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 mix-blend-overlay" />
      {/* glass border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/10" />
      {overlay && <div className="absolute inset-0 z-10">{overlay}</div>}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <div className="glass rounded-xl px-3.5 py-2 text-xs text-white/80">
            {caption}
          </div>
        </div>
      )}
    </div>
  );
}
