import { Project } from '@prisma/client';

interface ProjectFormProps {
  project?: Project;
  submitLabel?: string;
  action: (formData: FormData) => void;
  formState?: { message: string };
}

export default function ProjectForm({
  project,
  action,
  submitLabel = 'Create',
  formState,
}: ProjectFormProps) {
  return (
    <form action={action} className="flex flex-col gap-4">
      {project?.id && (
        <input type="hidden" name="projectId" value={project.id} />
      )}

      <div className="flex gap-4">
        <label className="w-12" htmlFor="title">
          Title
        </label>
        <input
          className="border rounded p-2 w-full text-black"
          type="text"
          id="title"
          name="title"
          defaultValue={project?.title ?? ''}
        />
      </div>

      <div className="flex gap-4">
        <label htmlFor="type">type</label>
        <input
          className="border rounded p-2 w-full text-black"
          type="text"
          id="type"
          name="type"
          defaultValue={project?.type ?? 'Developer'}
        />
      </div>

      <div className="flex gap-4">
        <label htmlFor="agency">agency</label>
        <input
          className="border rounded p-2 w-full text-black"
          type="text"
          id="agency"
          name="agency"
          defaultValue={project?.agency ?? ''}
        />
      </div>

      <div className="flex gap-4">
        <label htmlFor="client">client</label>
        <input
          className="border rounded p-2 w-full text-black"
          type="text"
          id="client"
          name="client"
          defaultValue={project?.client ?? ''}
        />
      </div>

      <div className="flex gap-4">
        <label htmlFor="description">description</label>
        <textarea
          id="description"
          name="description"
          className="border rounded p-2 w-full text-black"
          defaultValue={project?.description ?? ''}
        />
      </div>

      <div className="flex gap-4">
        <label htmlFor="summary">summary</label>
        <input
          className="border rounded p-2 w-full text-black"
          type="text"
          id="summary"
          name="summary"
          defaultValue={project?.summary ?? ''}
        />
      </div>

      <div className="flex gap-4">
        <label htmlFor="year">year</label>
        <input
          className="border rounded p-2 w-full text-black"
          type="number"
          id="year"
          name="year"
          defaultValue={project?.year ?? new Date().getFullYear()}
        />
      </div>

      <div className="flex gap-4">
        <label htmlFor="video">video</label>
        <input
          className="border rounded p-2 w-full text-black"
          type="text"
          id="video"
          name="video"
          defaultValue={project?.video ?? ''}
        />
      </div>

      <div>{formState?.message}</div>

      <button
        className="border rounded p-2 bg-orange dark:bg-teal"
        type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
