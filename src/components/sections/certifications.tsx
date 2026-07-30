"use client";

import { ExternalLink, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Certifications"
          title="Credentials"
          description="Professional certifications validating my skills and knowledge."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="h-full text-center hover:border-primary/30">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500 mb-1">{cert.issuer}</p>
                    <p className="text-sm font-medium text-primary mb-4">{cert.year}</p>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-3 w-3" />
                        View Certificate
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
