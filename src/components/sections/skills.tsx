"use client";

import { Briefcase, Code2, Layers, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";

const iconMap = {
  Briefcase,
  Layers,
  Code2,
  Wrench,
} as const;

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills"
          title="Expertise & Capabilities"
          description="From business analysis to system design and full-stack development."
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={category.title}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full hover:border-primary/30">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
