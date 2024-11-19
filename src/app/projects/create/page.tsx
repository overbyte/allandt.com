'use client';

import { useFormState } from 'react-dom';
import ProjectForm from '@/components/project-form';
import * as actions from '@/actions';

export default function ProjectCreatePage() {
  // useformstate initialises an object for a server action
  // and then passes it to the action with the formdata
  const [formState, action] = useFormState(actions.createProject, {
    message: '',
  });

  return (
    <section>
      <h3 className="font-bold m-3">Create a project</h3>
      <ProjectForm action={action} formState={formState} />
    </section>
  );
}
