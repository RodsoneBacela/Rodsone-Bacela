import { projects, Project } from '@/data/projects'; 
import ProjectCard from '@/components/ProjectCard'; 
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-16 bg-neutral-950 text-white border-b-1 border-neutral-500 border-dashed">
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <div className='flex justify-between items-center mb-12'>
            <div>
                <h2 className="text-4xl font-bold text-center animate-fade-in-up">
                    My <span className="text-green-500">Projects</span>
                </h2>
            </div>
            <div>
                <Link href="projects" className='flex items-center gap-2 text-green-500'>Mais projectos <ArrowRight/></Link>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;