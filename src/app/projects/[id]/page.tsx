interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectPage(props: ProjectPageProps) {
  console.log(props);
  return (
    <section>
      <h1>Project</h1>
    </section>
  );
}
