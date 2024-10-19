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
      <h3>Create a project</h3>

      <form action={createProject}>
        <div className="form-item">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>

        <div className="form-item">
          <label htmlFor="type">type</label>
          <input type="text" id="type" name="type" defaultValue="Developer" />
        </div>

        <div className="form-item">
          <label htmlFor="agency">agency</label>
          <input type="text" id="agency" name="agency" />
        </div>

        <div className="form-item">
          <label htmlFor="client">client</label>
          <input type="text" id="client" name="client" />
        </div>

        <div className="form-item">
          <label htmlFor="description">description</label>
          <textarea id="description" name="description" />
        </div>

        <div className="form-item">
          <label htmlFor="summary">summary</label>
          <input type="text" id="summary" name="summary" />
        </div>

        <div className="form-item">
          <label htmlFor="year">year</label>
          <input
            type="number"
            id="year"
            name="year"
            defaultValue={new Date().getFullYear()}
          />
        </div>

        <div className="form-item">
          <label htmlFor="video">video</label>
          <input type="text" id="video" name="video" />
        </div>

        <button type="submit">Create</button>
      </form>
    </section>
  );
}
