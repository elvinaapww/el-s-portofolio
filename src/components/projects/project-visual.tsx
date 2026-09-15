import Image from "next/image";
import { cn } from "@/lib/utils";
import type { DeviceType } from "@/data/projects";

/**
 * Neutral stage behind a project visual — the surface the device mockup sits on.
 */
export const stageBackdrop =
  "bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-800/80 dark:via-slate-900 dark:to-slate-950";

interface DeviceFrameProps {
  src: string;
  alt: string;
  /** Desktop screenshots get a monitor, portrait mockups get a phone. */
  device?: DeviceType;
  sizes?: string;
  /** Lifts the whole device slightly when a wrapping `group` element is hovered. */
  zoomOnGroupHover?: boolean;
}

const screenImage = "object-contain";

export function DeviceFrame({
  src,
  alt,
  device = "desktop",
  sizes = "100vw",
  zoomOnGroupHover = false,
}: DeviceFrameProps) {
  const lift = zoomOnGroupHover
    ? "transition-transform duration-700 group-hover:scale-[1.02]"
    : undefined;

  if (device === "phone") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div
          className={cn(
            "relative h-[92%] aspect-[43/76] rounded-[1.9rem] bg-slate-900 dark:bg-slate-950",
            "px-1 pt-4 pb-4 shadow-xl shadow-slate-900/25 ring-1 ring-slate-900/10 dark:ring-white/10",
            lift
          )}
        >
          {/* speaker slit */}
          <span className="absolute top-[7px] left-1/2 -translate-x-1/2 h-1 w-10 rounded-full bg-slate-700" />
          <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-white">
            <Image src={src} alt={alt} fill sizes={sizes} className={screenImage} />
          </div>
          {/* home indicator */}
          <span className="absolute bottom-[7px] left-1/2 -translate-x-1/2 h-1 w-14 rounded-full bg-slate-700" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6">
      <div
        className={cn(
          "w-[86%] sm:w-[80%] aspect-[16/10] rounded-xl sm:rounded-2xl",
          "bg-slate-200 dark:bg-slate-700 p-1.5 sm:p-2.5 shadow-xl shadow-slate-900/15",
          lift
        )}
      >
        <div className="h-full w-full rounded-lg sm:rounded-xl bg-slate-900 dark:bg-slate-950 p-1 sm:p-1.5">
          <div className="relative h-full w-full overflow-hidden rounded-md bg-white">
            <Image src={src} alt={alt} fill sizes={sizes} className={screenImage} />
          </div>
        </div>
      </div>
      {/* neck + base */}
      <div className="h-[6%] w-[8%] bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600" />
      <div className="h-[2.5%] min-h-[4px] w-[24%] rounded-full bg-slate-300 dark:bg-slate-600" />
    </div>
  );
}

/** Shown when a project has no screenshot on file — no placeholder imagery is invented. */
export function ProjectFallback({
  title,
  tags,
}: {
  title: string;
  tags?: string[];
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
      <span className="max-w-md text-lg sm:text-2xl font-semibold tracking-tight text-balance text-slate-700 dark:text-slate-200">
        {title}
      </span>
      {tags && tags.length > 0 && (
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {tags.slice(0, 3).join(" · ")}
        </span>
      )}
    </div>
  );
}
