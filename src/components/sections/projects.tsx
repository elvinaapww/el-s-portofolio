"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, FolderOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const PAGE_SIZE = 3;

export function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="Case Studies"
          description="Complete SDLC projects demonstrating system analysis and full-stack development."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <FadeIn key={project.slug}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Card className="h-full flex flex-col hover:border-primary/30 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <FolderOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.role}
                      {project.duration && (
                        <span className="block mt-1 text-slate-400">{project.duration}</span>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                      <Button variant="outline" className="w-full group/btn">
                        View Case Study
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, projects.length))}
            >
              View All
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
