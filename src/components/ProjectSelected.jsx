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
    <main className="flex-[4] flex flex-col gap-4 lg:gap-16 text-xs lg:text-lg p-4 lg:pt-10">
      <div className="info  border-b-2 border-black">
        <header className="flex justify-between">
          <h2 className="text-base lg:text-6xl font-bold uppercase">
            {activeProject.name}
          </h2>
          <button
            className="text-xs lg:text-lg mr-8"
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
        <p className="lg:text-lg pb-4 lg:pb-8">{activeProject.description}</p>
      </div>
      <div className="tasks ml-2 lg:ml-8">
        <h2 className="font-bold text-sm lg:text-3xl mb-2 lg:mb-4">Tasks</h2>
        <input
          type="text"
          className="bg-neutral-300 focus:bg-transparent transition rounded-sm p-1 mr-2 lg:mr-4"
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
        <h3 className="font-semibold lg:text-2xl mb-2">Task list</h3>
        {activeProject.tasks.length > 0 && (
          <ol className="bg-neutral-300 p-2 lg:p-4">
            {activeProject.tasks.map((task) => {
              return (
                <li className="flex justify-between" key={task.id}>
                  <span>{task.taskText}</span>
                  <button
                    className="hover:text-red-600 transition"
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
        )}
      </div>
    </main>
  );
}
