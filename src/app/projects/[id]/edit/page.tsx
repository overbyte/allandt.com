interface ProjectEditPageProps {
  params: {
    id: string;
  };
}

export default function ProjectEditPage(props: ProjectEditPageProps) {
  const id = parseInt(props.params.id);
  return <div>editing {id}</div>;
}
