import { useRef, useState } from "react";
export default function ProjectSelected({
  activeProject,
  deleteProject,
  handleAddTask,
  handleDeleteTask,
}) {
  const [emptyInput, setEmptyInput] = useState(false);
  const input = useRef();
  function handleAddTaskClick() {
    const value = input.current.value;
    if (!value) {
      setEmptyInput(true);
      return;
    }
    setEmptyInput(false);
    handleAddTask(activeProject.id, value);
    input.current.value = "";
  }
  return (
    <>
      <div className="info">
        <h1>{activeProject.name}</h1>
        <p>{activeProject.date}</p>
        <p>{activeProject.description}</p>
        <button onClick={() => deleteProject(activeProject.id)}>Delete</button>
      </div>
      <div className="tasks">
        <h2>Tasks</h2>
        <input
          type="text"
          className="border-[#333] border rounded-sm p-1"
          ref={input}
        />
        <button onClick={handleAddTaskClick}>Add task</button>
        <p className={`${emptyInput ? "text-red-700" : "text-transparent"}`}>
          Input cannot be empty
        </p>
        <h3>Task list</h3>
        <ol>
          {activeProject.tasks.map((task) => {
            return (
              <li key={task.id}>
                <span>{task.taskText}</span>
                <button
                  onClick={() => {
                    handleDeleteTask(activeProject.id, task.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
