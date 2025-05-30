import { projects, Project } from '@/data/projects'; 
import ProjectCard from '@/components/ProjectCard'; 

export default function Section() {
  return (
    <section id="projects" className="py-16 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
            <span className="text-green-500">Projectos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
