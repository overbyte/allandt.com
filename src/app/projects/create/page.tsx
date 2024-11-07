import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function ProjectCreatePage() {
  const createProject = async (formData: FormData) => {
    // ensure function is run on the server
    'use server';

    // validate input
    const title = formData.get('title');
    const type = formData.get('type');
    const agency = formData.get('agency');
    const client = formData.get('client');
    const description = formData.get('description');
    const summary = formData.get('summary');
    const year = parseInt(formData.get('year'));
    // const tags = formData.get('tags').split(',');
    // const newtags = formData
    //   .get('newtags')
    //   .split(',')
    //   .map((tag) => tag.trim());

    // create new record in the database
    const project = await db.project.create({
      data: {
        title,
        type,
        agency,
        client,
        description,
        summary,
        year,
      },
    });

    console.log('project created', project);

    // redirect back to route
    redirect('/');
  };

  return (
    <section>
      <h3 className="font-bold m-3">Create a project</h3>

      <form action={createProject} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            id="title"
            name="title"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="type">type</label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            id="type"
            name="type"
            defaultValue="Developer"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="agency">agency</label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            id="agency"
            name="agency"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="client">client</label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            id="client"
            name="client"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="description">description</label>
          <textarea
            id="description"
            name="description"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="summary">summary</label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            id="summary"
            name="summary"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="year">year</label>
          <input
            className="border rounded p-2 w-full"
            type="number"
            id="year"
            name="year"
            defaultValue={new Date().getFullYear()}
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="video">video</label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            id="video"
            name="video"
          />
        </div>

        <button
          className="border rounded p-2 bg-orange dark:bg-teal"
          type="submit">
          Create
        </button>
      </form>
    </section>
  );
}
