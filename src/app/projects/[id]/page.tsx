import { notFound } from 'next/navigation';
import { db } from '@/db';

interface ProjectPageProps {
  params: { id: string };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const project = await db.project.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!project) {
    return notFound();
  }

  return (
    <section>
      <h4>
        {project.agency} | {project.client} | {project.year}
      </h4>

      <h1>{project.title}</h1>

      <p>{project.description}</p>
    </section>
  );
}
