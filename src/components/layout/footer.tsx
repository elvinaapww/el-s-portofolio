import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">{siteConfig.shortName}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Fresh graduate Web Developer passionate about building efficient,
              user-friendly digital solutions.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <MapPin className="h-4 w-4" />
              {siteConfig.location}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-primary transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-slate-500 hover:text-primary transition-colors"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="#home"
            className="text-sm text-slate-500 hover:text-primary transition-colors"
          >
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
}
