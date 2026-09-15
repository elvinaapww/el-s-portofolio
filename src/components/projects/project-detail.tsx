"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { DeviceFrame, ProjectFallback, stageBackdrop } from "@/components/projects/project-visual";
import { cn } from "@/lib/utils";
import {
  getProjectDiagrams,
  getProjectVisuals,
  projects,
  type Project,
  type ProjectVisualItem,
} from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

interface LightboxImage {
  src: string;
  alt: string;
}

function ZoomableImage({
  src,
  alt,
  onOpen,
  className,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  onOpen: (image: LightboxImage) => void;
  className?: string;
  sizes?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen({ src, alt })}
      className={cn("group relative w-full overflow-hidden cursor-zoom-in", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors">
        <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </button>
  );
}

function Lightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!image) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-6"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-xl overflow-hidden bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-slate-300">{image.alt}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const frameVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -48 : 48 }),
};

/** Every screenshot of a project on one stage, moved through by swipe or arrows. */
function ProjectGallery({
  visuals,
  project,
  onZoom,
}: {
  visuals: ProjectVisualItem[];
  project: Project;
  onZoom: (image: LightboxImage) => void;
}) {
  const [[index, direction], setFrame] = useState<[number, number]>([0, 0]);
  const total = visuals.length;
  const current = visuals[index];

  const paginate = (step: number) => {
    if (total < 2) return;
    setFrame(([prev]) => [(prev + step + total) % total, step]);
  };

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${project.title} screenshots`}
      tabIndex={total > 1 ? 0 : -1}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") paginate(1);
        if (e.key === "ArrowLeft") paginate(-1);
      }}
      className={cn(
        "relative aspect-square sm:aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        stageBackdrop
      )}
    >
      {total === 0 ? (
        <ProjectFallback title={project.title} tags={project.tags} />
      ) : (
        <>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current.src}
              custom={direction}
              variants={frameVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              drag={total > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) paginate(1);
                else if (info.offset.x > 60) paginate(-1);
              }}
              className={cn(
                "absolute inset-0",
                total > 1 && "cursor-grab active:cursor-grabbing"
              )}
            >
              <div className="absolute inset-0 pointer-events-none select-none">
                <DeviceFrame
                  src={current.src}
                  alt={current.title}
                  device={current.device}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3 pointer-events-none">
            <span className="rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              {current.title}
            </span>
            <button
              type="button"
              onClick={() => onZoom({ src: current.src, alt: current.title })}
              aria-label="Open full size"
              className="pointer-events-auto rounded-full bg-black/55 p-2 text-white backdrop-blur-sm hover:bg-black/75 transition-colors cursor-pointer"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/85 dark:bg-slate-900/85 text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/85 dark:bg-slate-900/85 text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {visuals.map((visual, i) => (
                  <button
                    key={visual.src}
                    type="button"
                    onClick={() =>
                      setFrame(([prev]) => [i, i > prev ? 1 : -1])
                    }
                    aria-label={`Show ${visual.title}`}
                    aria-current={i === index}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                      i === index
                        ? "w-7 bg-primary"
                        : "w-3 bg-slate-400/60 hover:bg-slate-500/80"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  const visuals = getProjectVisuals(project);
  const diagrams = getProjectDiagrams(project);

  const index = projects.findIndex((p) => p.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <article className="pb-20">
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      <div className="mx-auto max-w-5xl px-6 pt-10">
        <Link href="/#projects">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Every screenshot lives in this one stage */}
      <FadeIn direction="none">
        <div className="mx-auto max-w-5xl px-6">
          <ProjectGallery visuals={visuals} project={project} onZoom={setLightboxImage} />
        </div>
      </FadeIn>

      {/* Name, short description, tech stack, GitHub */}
      <FadeIn>
        <div className="mx-auto max-w-5xl px-6 mt-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
            {project.role}
            {project.duration && ` · ${project.duration}`}
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 px-5 py-2.5 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </FadeIn>

      {/* System design — only for projects that actually have diagrams */}
      {diagrams.length > 0 && (
        <FadeIn>
          <section className="mx-auto max-w-5xl px-6 mt-14">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              System Design
            </h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {diagrams.map((diagram) => (
                <div
                  key={diagram.name}
                  className="rounded-xl border border-slate-200/70 dark:border-slate-800/70 overflow-hidden"
                >
                  {diagram.image && (
                    <ZoomableImage
                      src={diagram.image}
                      alt={diagram.name}
                      onOpen={setLightboxImage}
                      sizes="(max-width: 640px) 100vw, 480px"
                      className="h-56 bg-white dark:bg-slate-950 border-b border-slate-200/70 dark:border-slate-800/70"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-sm font-medium">{diagram.name}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {diagram.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* Move on to the next project */}
      <div className="mx-auto max-w-5xl px-6 mt-16 grid sm:grid-cols-2 gap-4">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group rounded-xl border border-slate-200/70 dark:border-slate-800/70 p-5 hover:border-primary/40 transition-colors"
          >
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-slate-400">
              <ArrowLeft className="h-3.5 w-3.5" />
              Previous
            </span>
            <p className="mt-2 font-medium group-hover:text-primary transition-colors text-balance">
              {previous.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-xl border border-slate-200/70 dark:border-slate-800/70 p-5 hover:border-primary/40 transition-colors sm:text-right"
          >
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-slate-400">
              Next
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <p className="mt-2 font-medium group-hover:text-primary transition-colors text-balance">
              {next.title}
            </p>
          </Link>
        )}
      </div>
    </article>
  );
}
