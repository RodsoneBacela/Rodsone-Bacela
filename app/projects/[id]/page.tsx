import { notFound } from 'next/navigation';

import ProjectContent from './ProjectContent';
import { Metadata } from 'next';
import { projects } from '@/data/data';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);
  return {
    title: project ? `${project.title} • Rodsone Bacela` : 'Projeto não encontrado',
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) notFound();

  return <ProjectContent project={project} />;
}