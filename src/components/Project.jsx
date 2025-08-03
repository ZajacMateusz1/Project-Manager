import NoProjectSelected from "./NoProjectSelected.jsx";
import ProjectSelected from "./ProjectSelected.jsx";
export default function Project({
  projects,
  dialog,
  activeProjectId,
  deleteProject,
}) {
  function getActiveProject() {
    return projects.find((project) => project.id === activeProjectId);
  }
  const activeProject = getActiveProject();
  return (
    <main className="flex-[4] flex flex-col justify-center items-center text-sm lg:text-lg">
      {activeProject ? (
        <ProjectSelected
          activeProject={activeProject}
          deleteProject={deleteProject}
        />
      ) : (
        <NoProjectSelected dialog={dialog} />
      )}
    </main>
  );
}
