"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjectsSection from "@/components/FeaturedProjects";
import { projects, Project } from "@/data/data";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const onNavigate = (page: string) => router.push(page);
  const onProjectClick = (project: Project) => router.push(`/projects/${project.id}`);

  return (
    <div className="border-neutral-200 border-b">
      <Hero />
      <Services />
      {projects.length > 0 && (
        <FeaturedProjectsSection
          projects={projects}
          onProjectClick={onProjectClick}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}
