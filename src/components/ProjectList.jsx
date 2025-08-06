export default function ProjectList({
  projects,
  activeProjectId,
  handleActiveProjectClick,
}) {
  return (
    <ol className="mt-2">
      {projects.map((project) => {
        return (
          <li
            key={project.id}
            onClick={() => handleActiveProjectClick(project.id)}
            className={`${
              activeProjectId === project.id ? "bg-[#333]" : "bg-transparent"
            } hover:bg-[#333] transition w-1/4 lg:w-1/2 px-1 py-0.5 my-0.5 lg:p-1 mx-auto text-xs lg:text-base cursor-pointer`}
          >
            {project.name}
          </li>
        );
      })}
    </ol>
  );
}
