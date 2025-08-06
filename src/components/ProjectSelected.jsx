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
    <main className="flex-[4] flex flex-col gap-4 lg:gap-16 justify-beetwen text-xs lg:text-lg p-4 lg:pt-10">
      <div className="info  border-b-2 border-black">
        <header className="flex justify-between">
          <h2 className="text-base lg:text-6xl font-bold capitalize">
            {activeProject.name}
          </h2>
          <button
            className="text-[0.65rem] lg:text-base"
            onClick={() => deleteProject(activeProject.id)}
          >
            Delete
          </button>
        </header>
        <p className="pl-2  lg:pl-8 lg:pt-4 text-gray-500 text-[0.6rem] lg:text-base">
          {activeProject.date}
        </p>
        <h3 className="mt-2 lg:mt-4 text-sm lg:text-3xl font-semibold">
          About project
        </h3>
        <p className="lg:text-lg">{activeProject.description}</p>
      </div>
      <div className="tasks text-center">
        <h2>Tasks</h2>
        <input
          type="text"
          className="border-[#333] border rounded-sm p-1"
          ref={input}
        />
        <button onClick={handleAddTaskClick}>Add task</button>
        <p
          className={`${
            emptyInput ? "text-red-700" : "text-transparent"
          } select-none`}
        >
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
    </main>
  );
}
