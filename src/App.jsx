import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
import CreateProjectModal from "./components/CreateProjectModal.jsx";
function App() {
  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const dialog = useRef();
  function handleProjectAdd(projectObj) {
    setProjects((prevProjects) => {
      return [...prevProjects, projectObj];
    });
  }
  function handleActiveProjectClick(id) {
    setActiveProjectId(id);
  }
  function deleteProject(id) {
    setProjects((prevProjects) => {
      return prevProjects.filter((project) => project.id !== id);
    });
  }
  function handleAddTask(id, taskText) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        return project.id === id
          ? {
              ...project,
              tasks: [...project.tasks, { id: Date.now(), taskText: taskText }],
            }
          : project;
      });
    });
  }
  function handleDeleteTask(projectId, taskId) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        return project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project;
      });
    });
  }
  return (
    <div className="container flex flex-col md:flex-row min-h-screen lg:gap-10 ">
      <CreateProjectModal ref={dialog} handleProjectAdd={handleProjectAdd} />
      <Sidebar
        projects={projects}
        dialog={dialog}
        activeProjectId={activeProjectId}
        handleActiveProjectClick={handleActiveProjectClick}
      />
      <Project
        projects={projects}
        dialog={dialog}
        activeProjectId={activeProjectId}
        deleteProject={deleteProject}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
