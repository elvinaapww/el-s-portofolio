"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/motion/animations";
import { headlines, siteConfig } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";

function HeroPhoto() {
  return (
    <div className="relative w-full max-w-[260px] sm:max-w-xs lg:max-w-sm mx-auto">
      <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl" />

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-700/60 bg-gradient-to-br from-primary/20 to-slate-200/50 dark:to-slate-800/50 shadow-xl shadow-primary/10"
      >
        <Image
          src="/image/foto-portofolio.jpeg"
          alt={siteConfig.name}
          fill
          sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 384px"
          className="object-cover object-top"
          priority
        />
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="min-h-[100svh] flex items-center pt-24 lg:pt-16">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <FadeIn>
            <p className="text-sm font-medium text-primary mb-4">
              Welcome to my portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              {siteConfig.shortName}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-4 text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400">
              <TypingAnimation words={headlines} />
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {siteConfig.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="left" delay={0.3}>
          <HeroPhoto />
        </FadeIn>
      </div>
    </section>
  );
}
