"use client";

import Image from "next/image";
import { GraduationCap, Brain, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { siteConfig } from "@/data/site";

const highlights = [
  {
    icon: GraduationCap,
    title: "Fresh Graduate, Information Systems",
    description: "Strong foundation in web development, system design, and modern frameworks.",
  },
  {
    icon: Building2,
    title: "Hands-on Web Development Experience",
    description: "Built and maintained web applications during internship at a manufacturing company.",
  },
  {
    icon: Brain,
    title: "Detail-Oriented & Fast Learner",
    description: "Turning requirements into clean, functional, and user-friendly web applications.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          description="A fresh graduate Information System who understands the complete software development lifecycle."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn direction="right">
            <div className="aspect-[4/5] max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-slate-200/50 dark:to-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">
              <Image
                src="/image/foto-portofolio.jpeg"
                alt={siteConfig.name}
                width={400}
                height={500}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <h3 className="text-2xl font-semibold mb-4">{siteConfig.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I am a fresh graduate in Information Systems with hands-on experience
                as a Web Developer. My passion lies in building clean, functional, and
                user-friendly web applications, from planning the structure to writing
                the frontend and backend code.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Throughout my internship, I gathered requirements directly from users, designed
                databases, and implemented web-based enterprise applications — giving me
                practical experience across the full web development process, from analysis to deployment.
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-4">
              {highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4 p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
