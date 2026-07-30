"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/motion/animations";
import { headlines, siteConfig } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg mx-auto aspect-square">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-2xl bg-primary/10 border border-primary/20 rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/20" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-20 rounded-xl bg-slate-500/10 border border-slate-500/20 -rotate-6" />
      </motion.div>
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 backdrop-blur-sm flex flex-col items-center justify-center text-center px-6">
          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Welcome to
          </span>
          <span className="mt-1 text-2xl font-bold bg-gradient-to-br from-primary to-blue-500 bg-clip-text text-transparent">
            El&apos;s portfolio
          </span>
        </div>
      </motion.div>
      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/5 blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-blue-500/5 blur-xl" />
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
          <HeroIllustration />
        </FadeIn>
      </div>
    </section>
  );
}
