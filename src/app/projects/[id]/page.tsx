import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/db';
import * as actions from '@/actions';

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

  const deleteProjectAction = actions.deleteProject.bind(null, project.id);

  return (
    <section className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-between">
          <h4 className="mt-2">
            {project.agency} | {project.client} | {project.year}
          </h4>

          <h1 className="text-xl font-bold mb-4">{project.title}</h1>
        </div>

        <div className="flex gap-4">
          <Link
            className="bg-teal text-black p-2 rounded"
            href={`/projects/${project.id}/edit`}>
            Edit
          </Link>

          <form action={deleteProjectAction}>
            <button className="bg-red text-white p-2 rounded" type="submit">
              Delete
            </button>
          </form>
        </div>
      </div>

      <p>{project.description}</p>
    </section>
  );
}

// create cached versions of the pages
export async function generateStaticParams() {
  const projects = await db.project.findMany();

  return projects.map((project) => ({ id: String(project.id) }));
}
