import noProjects from "../assets/no-projects.png";
export default function NoProjectSelected({ dialog }) {
  return (
    <main className="flex-[4] flex flex-col justify-center items-center text-sm lg:text-lg">
      <div className="img-wrapper w-[25%] mb-2">
        <img src={noProjects} alt="Graphic showing no projects" />
      </div>
      <p>You have not selected any projects</p>
      <p>Select a project or create a new one</p>
      <button
        onClick={() => dialog.current.open()}
        className="bg-[#333] p-1.5 m-3  lg:m-6 rounded-md hover:bg-[#444] transition-colors text-xs lg:text-lg text-white capitalize"
      >
        Create new project
      </button>
    </main>
  );
}
