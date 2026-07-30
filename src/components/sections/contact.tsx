"use client";

import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/data/site";

type ContactLink = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
};

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "elvinaapw",
    href: siteConfig.linkedin,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "elvinaaapw",
    href: siteConfig.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: siteConfig.whatsapp,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          description="Interested in collaborating? I'd love to hear from you."
        />

        <FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {contactLinks.map((link) => (
              <Card key={link.label} className="hover:border-primary/30 transition-colors">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors break-all"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="font-medium break-words">{link.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
