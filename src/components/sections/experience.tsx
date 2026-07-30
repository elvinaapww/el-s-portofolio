"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Hands-on experience in system analysis, development, and business process improvement."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

          {experiences.map((exp, index) => (
            <FadeIn key={exp.company} delay={index * 0.15}>
              <div className="relative pl-14 sm:pl-20 pb-12 last:pb-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-3 sm:left-6 top-1 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-slate-950"
                />

                <div className="p-4 sm:p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.position}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-slate-600 dark:text-slate-400 flex gap-2"
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
