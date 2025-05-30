"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react'; 

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    slug: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className='p-2 bg-black/10 border-1 border-neutral-600  rounded-lg'>
        <div className="bg-white/5 rounded-lg shadow-sm overflow-hidden transform transition-transform duration-300 hover:bg-linear-to-r from-neutral-900 to-neutral-950 hover:shadow-md">
        <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            width={500}
            height={300}
            className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
            <p className="text-gray-300 text-sm mb-4 line-clamp-3"> 
            {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
                <span
                key={index}
                className="bg-green-500/10 text-white px-3 py-1 border-1 border-neutral-500 rounded-full text-xs font-semibold"
                >
                {tech}
                </span>
            ))}
            </div>
            <div className="flex justify-between items-center mt-4">
            {project.githubUrl && (
                <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                aria-label="GitHub Repository"
                >
                <Github size={20} />
                <span className="text-sm hidden sm:inline">GitHub</span>
                </Link>
            )}
            {project.liveUrl && (
                <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                aria-label="Live Demo"
                >
                <ExternalLink size={20} />
                <span className="text-sm hidden sm:inline">Live Demo</span>
                </Link>
            )}
            <Link
                href={`/projects/${project.slug}`}
                className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-300 transition-colors duration-300 ml-auto"
            >
                Details
            </Link>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ProjectCard;