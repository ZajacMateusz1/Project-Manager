export default function ProjectList({ projects }) {
  return (
    <ol>
      {projects.map((project) => {
        return <li key={project.id}>{project.name}</li>;
      })}
    </ol>
  );
}
