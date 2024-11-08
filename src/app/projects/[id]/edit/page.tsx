import { notFound } from 'next/navigation';
import { db } from '@/db';
import * as actions from '@/actions';
import ProjectForm from '@/components/project-form';

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

  const updateProjectAction = actions.updateProject.bind(null, project.id);

  return (
    <div>
      <h1>
        editing {id} {project.title}
      </h1>
      <ProjectForm
        project={project}
        action={updateProjectAction}
        submitLabel="Edit"
      />
    </div>
  );
}
