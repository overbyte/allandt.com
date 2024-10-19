import { db } from '@/db';
import Link from 'next/link';

export default async function HomePage() {
  const data = await db.project.findMany();

  return (
    <div>
      <h1>homepage test</h1>
      <ul>
        {data.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
