import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { ProjectDetail } from "@/components/projects/project-detail";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackgroundGrid } from "@/components/layout/background-grid";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Elvina Pramesti`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <ScrollProgress />
      <BackgroundGrid />
      <Navbar />
      <main className="pt-16">
        <ProjectDetail project={project} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
