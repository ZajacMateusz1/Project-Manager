import NoProjectSelected from "./NoProjectSelected.jsx";
import ProjectSelected from "./ProjectSelected.jsx";
export default function Project({
  projects,
  dialog,
  activeProjectId,
  deleteProject,
  handleAddTask,
  handleDeleteTask,
}) {
  function getActiveProject() {
    return projects.find((project) => project.id === activeProjectId);
  }
  const activeProject = getActiveProject();
  return activeProject ? (
    <ProjectSelected
      activeProject={activeProject}
      deleteProject={deleteProject}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
    />
  ) : (
    <NoProjectSelected dialog={dialog} />
  );
}
