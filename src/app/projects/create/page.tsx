export default function ProjectCreatePage() {
  import { db } from '@/db';

  const createProject = async (formData: FormData) => {
    // validate input
    const title = formData.get('title');
    const type = formData.get('type');
    const agency = formData.get('agency');
    const client = formData.get('client');
    const description = formData.get('description');
    const summary = formData.get('summary');
    const year = formData.get('year');

    // create new record in the database
    // redirect back to route
  };

  return (
    <section>
      <h3>Create a project</h3>

      <form action="">
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
