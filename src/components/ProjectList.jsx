import { act, useState } from "react";
export default function ProjectList({ projects }) {
  const [activeProjectId, setActiveProjectId] = useState(null);
  function handleClick(id) {
    setActiveProjectId(id);
  }
  return (
    <ol className="mt-2">
      {projects.map((project) => {
        return (
          <li
            key={project.id}
            onClick={() => handleClick(project.id)}
            className={`${
              activeProjectId === project.id ? "bg-[#333]" : "bg-transparent"
            } w-1/3 lg:w-1/2 px-1 py-0.5 my-1 lg:p-1 mx-auto text-xs lg:text-base cursor-pointer`}
          >
            {project.name}
          </li>
        );
      })}
    </ol>
  );
}
