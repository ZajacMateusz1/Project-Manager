import InputElement from "./inputElement.jsx";
export default function ProjectSelected({ activeProject, deleteProject }) {
  return (
    <>
      <h1>{activeProject.name}</h1>
      <p>{activeProject.date}</p>
      <p>{activeProject.description}</p>
      <button onClick={() => deleteProject(activeProject.id)}>Delete</button>
      <h2>Tasks</h2>
      <InputElement type="text" id="task">
        Add Task
      </InputElement>
    </>
  );
}
