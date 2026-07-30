"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

interface LightboxImage {
  src: string;
  alt: string;
}

function DiagramImage({
  src,
  alt,
  onOpen,
  className,
}: {
  src: string;
  alt: string;
  onOpen: (image: LightboxImage) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen({ src, alt })}
      className={`group relative w-full overflow-hidden rounded-lg bg-white dark:bg-slate-950 cursor-zoom-in ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors">
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
            className="relative w-full max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-xl overflow-hidden bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                fill
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

function SectionBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <section id={id} className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
          {title}
        </h2>
        {children}
      </section>
    </FadeIn>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  return (
    <article>
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      <div className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-primary font-medium mb-1">{project.role}</p>
            {project.duration && (
              <p className="text-sm text-slate-500 mb-4">{project.duration}</p>
            )}
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <SectionBlock id="overview" title="Overview">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.background}
          </p>
        </SectionBlock>

        <SectionBlock id="business-problem" title="Business Problem">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.businessProblem}
          </p>
          <h3 className="font-semibold mt-6 mb-3">Challenges</h3>
          <ul className="space-y-2">
            {project.challenges.map((c) => (
              <li key={c} className="flex gap-2 text-slate-600 dark:text-slate-400">
                <span className="text-primary">•</span> {c}
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mt-6 mb-3">Objectives</h3>
          <ul className="space-y-2">
            {project.objectives.map((o) => (
              <li key={o} className="flex gap-2 text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="solution" title="Solution">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {project.solution}
          </p>
          <h3 className="font-semibold mb-3">My Responsibilities</h3>
          <div className="flex flex-wrap gap-2">
            {project.responsibilities.map((r) => (
              <Badge key={r} variant="outline">
                {r}
              </Badge>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="business-process" title="Business Process & SDLC">
          <h3 className="font-semibold mb-3">Business Flow</h3>
          <ol className="space-y-3 mb-8">
            {project.businessFlow.map((step, i) => (
              <li key={step} className="flex gap-3 text-slate-600 dark:text-slate-400">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <h3 className="font-semibold mb-4">SDLC Process</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.sdlcProcess.map((phase) => (
              <div
                key={phase.phase}
                className="p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-900/50"
              >
                <h4 className="font-medium text-primary mb-2">{phase.phase}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="requirements" title="Requirement Analysis">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {project.requirementAnalysis}
          </p>
          <h3 className="font-semibold mb-3">Functional Requirements</h3>
          <ul className="space-y-2 mb-6">
            {project.functionalRequirements.map((req) => (
              <li key={req} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                {req}
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mb-3">Non-functional Requirements</h3>
          <ul className="space-y-2">
            {project.nonFunctionalRequirements.map((req) => (
              <li key={req} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                {req}
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="system-design" title="System Design">
          <h3 className="font-semibold mb-4">UML Diagrams</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {project.umlDiagrams.map((uml) => (
              <div
                key={uml.name}
                className="p-5 rounded-xl border border-slate-200/60 dark:border-slate-800/60"
              >
                <h4 className="font-medium mb-2">{uml.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {uml.description}
                </p>
                {uml.image ? (
                  <DiagramImage
                    src={uml.image}
                    alt={uml.name}
                    onOpen={setLightboxImage}
                    className="mt-4 h-56 border border-slate-200/60 dark:border-slate-800/60"
                  />
                ) : (
                  <div className="mt-4 h-32 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm text-slate-400">
                    {uml.name} Preview
                  </div>
                )}
              </div>
            ))}
          </div>
          <h3 className="font-semibold mb-3">Database Design (ERD)</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {project.erdDescription}
          </p>
          {project.erdImage ? (
            <DiagramImage
              src={project.erdImage}
              alt="ERD Diagram"
              onOpen={setLightboxImage}
              className="h-72 mb-8 border border-slate-200/60 dark:border-slate-800/60"
            />
          ) : (
            <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm text-slate-400 mb-8">
              ERD Diagram Preview
            </div>
          )}
          <h3 className="font-semibold mb-3">Wireframes</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {project.wireframeDescription}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {project.gallery.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
              >
                {item.image ? (
                  <DiagramImage
                    src={item.image}
                    alt={item.title}
                    onOpen={setLightboxImage}
                    className="h-36"
                  />
                ) : (
                  <div className="h-36 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400">
                    {item.title}
                  </div>
                )}
                <div className="p-3">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="implementation" title="Implementation">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {project.implementation}
          </p>
          <h3 className="font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="results" title="Results">
          <ul className="space-y-3">
            {project.results.map((result) => (
              <li
                key={result}
                className="flex gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300">{result}</span>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="lessons" title="Lessons Learned">
          <ul className="space-y-3">
            {project.lessonsLearned.map((lesson) => (
              <li key={lesson} className="text-slate-600 dark:text-slate-400 flex gap-2">
                <span className="text-primary font-bold">→</span>
                {lesson}
              </li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </article>
  );
}
