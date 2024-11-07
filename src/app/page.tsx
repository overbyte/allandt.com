import { db } from '@/db';
import Link from 'next/link';

export default async function HomePage() {
  const data = await db.project.findMany();

  return (
    <>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Projects</h1>

        <Link
          href="/projects/create"
          className="p-2 bg-teal dark:bg-orange text-black rounded">
          Create new project
        </Link>
      </div>

      <ul className="flex flex-col gap-2">
        {data.map((project) => (
          <li key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              className="flex justify-between items-center p-2 gap-4 border rounded">
              <h3 className="font-bold">{project.title}</h3>
              <p>{project.summary}</p>
              <div className="ml-auto">View</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
