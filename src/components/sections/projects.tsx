"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { DeviceFrame, ProjectFallback, stageBackdrop } from "@/components/projects/project-visual";
import { getProjectVisuals, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let smallest = Infinity;
    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      if (distance < smallest) {
        smallest = distance;
        closest = index;
      }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateActive();

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateActive]);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    if (!track || !slide) return;
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(Math.min(active + 1, projects.length - 1));
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(Math.max(active - 1, 0));
    }
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          description="A visual walkthrough of the systems I've built — swipe or use the arrows to move between projects."
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 mb-5 flex items-center justify-between gap-4">
        <p className="text-sm font-medium tabular-nums text-slate-500 dark:text-slate-400">
          <span className="text-primary">{pad(active)}</span>
          <span className="mx-1.5 text-slate-300 dark:text-slate-700">/</span>
          {pad(projects.length - 1)}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            aria-label="Previous project"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm text-slate-600 dark:text-slate-300 transition-all hover:border-primary/40 hover:text-primary disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === projects.length - 1}
            aria-label="Next project"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm text-slate-600 dark:text-slate-300 transition-all hover:border-primary/40 hover:text-primary disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        tabIndex={0}
        role="region"
        aria-label="Project showcase"
        onKeyDown={onKeyDown}
        className={cn(
          "relative flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth",
          "px-6 lg:px-[max(1.5rem,calc((100%_-_72rem)/2))] pb-4",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          "focus-visible:outline-none"
        )}
      >
        {projects.map((project, index) => {
          const cover = getProjectVisuals(project)[0];
          const isActive = index === active;

          return (
            <div
              key={project.slug}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              className={cn(
                "snap-center shrink-0 w-[86vw] sm:w-[70vw] lg:w-[52rem]",
                "transition-all duration-500 ease-out",
                isActive ? "opacity-100" : "opacity-55 lg:scale-[0.97]"
              )}
            >
              <article className="h-full flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white dark:bg-slate-900/60 shadow-sm">
                <Link
                  href={`/projects/${project.slug}`}
                  className={cn(
                    "group relative block aspect-square sm:aspect-[16/10] overflow-hidden",
                    stageBackdrop
                  )}
                  aria-label={`Open ${project.title}`}
                >
                  {cover ? (
                    <DeviceFrame
                      src={cover.src}
                      alt={project.title}
                      device={cover.device}
                      sizes="(max-width: 640px) 86vw, (max-width: 1024px) 70vw, 832px"
                      zoomOnGroupHover
                    />
                  ) : (
                    <ProjectFallback title={project.title} tags={project.tags} />
                  )}
                  <span className="absolute top-4 left-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium tabular-nums text-white backdrop-blur-sm">
                    {pad(index)}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-slate-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>

                <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                    {project.role.replace(/\s*\(.*\)$/, "")}
                    {project.duration && ` · ${project.duration}`}
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-balance">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
                      >
                        <FaGithub className="h-4 w-4" />
                        GitHub
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                    >
                      View project
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <FadeIn direction="none">
        <div className="mx-auto max-w-6xl px-6 mt-6 flex flex-wrap justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to ${project.title}`}
              aria-current={index === active}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                index === active
                  ? "w-8 bg-primary"
                  : "w-4 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
              )}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
