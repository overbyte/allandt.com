import { notFound } from 'next/navigation';
import { db } from '@/db';

interface ProjectEditPageProps {
  params: {
    id: string;
  };
}

export default async function ProjectEditPage(props: ProjectEditPageProps) {
  const id = parseInt(props.params.id);

  const project = await db.project.findFirst({
    where: { id },
  });

  if (!project) {
    return notFound();
  }

  return (
    <div>
      editing {id} {project.title}
    </div>
  );
}
