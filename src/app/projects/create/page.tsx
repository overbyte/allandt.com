import { db } from '@/db';
import ProjectForm from '@/components/project-form';
import * as actions from '@/actions';

export default function ProjectCreatePage() {
  const createProjectAction = actions.createProject.bind(null);

  return (
    <section>
      <h3 className="font-bold m-3">Create a project</h3>
      <ProjectForm action={createProjectAction} />
    </section>
  );
}
