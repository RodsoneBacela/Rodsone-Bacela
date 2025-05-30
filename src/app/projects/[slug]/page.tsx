import { projects } from '@/data/projects'; 
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'; 
interface ProjectPageProps {
  params: Promise<{ slug: string }> 
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen  flex flex-col items-center justify-center bg-neutral-950 text-white p-8">
        <p className="text-xl mb-4">Project not found.</p>
        <Link href="/#projects" className="text-blue-400 hover:underline transition-colors">
          Go back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 max-w-7xl mx-auto text-white min-h-screen">
      <div className="relative w-full h-[80vh] sm:h-[70vh] md:h-[85vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/0 via-neutral-950/70 to-neutral-950 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-neutral-900/70 to-transparent z-10"></div>

        <Link
          href="projects"
          className="absolute top-4 left-4 z-20 p-3 bg-neutral-800/70 rounded-full hover:bg-neutral-700 transition-colors duration-300 flex items-center justify-center"
          title="Back to Projects"
        >
          <ArrowLeft className="h-7 w-7 text-green-500" /> 
        </Link>

        <div className="absolute bottom-0 left-0 w-full z-20 p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white">
            {project.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-6">
            {project.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mb-8">
            {project.liveUrl && (
              <div>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-white text-black rounded-lg font-bold text-lg shadow-md hover:bg-green-300 transition-colors transform hover:scale-105"
                >
                  <ExternalLink className="h-6 w-6 mr-2" />
                  Ver Projeto
                </Link>
              </div>
            )}
            {project.githubUrl && (
              <div>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-neutral-800 text-white rounded-lg font-bold border border-neutral-700 shadow-md hover:bg-neutral-700 transition-colors transform hover:scale-105"
                >
                  <Github className="h-6 w-6 mr-2" />
                  Repositório
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 sm:px-8 md:px-10 lg:px-12">
        {/* Technologies Used */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-200">Tecnologias Usadas</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-green-500/10 text-white px-4 py-1.5 rounded-full text-sm font-medium border border-[#64FFDA]/30 shadow-sm" // More subtle tech tags
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.progress !== undefined && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-200">Status do Projeto</h2>
            <div className="w-2xl bg-neutral-700 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-neutral-400 mt-2">{project.progress}% Completo</p> 
          </div>
        )}
        <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-200">Visão Geral</h2>
            <p className="text-neutral-300 leading-relaxed">
                { project.more_details} 
            </p>
        </div>
        <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-200">Design</h2>
            <p className="text-neutral-300 leading-relaxed">
                { project.designUrl} 
            </p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}