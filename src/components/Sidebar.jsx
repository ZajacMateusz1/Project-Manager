import ProjectList from "./ProjectList.jsx";
export default function Sidebar({ projects, dialog }) {
  return (
    <>
      <aside className="flex-[1] lg:self-end lg:h-[95vh] text-center bg-[#111] lg:rounded-tr-md  text-[#eee] shadow-lg">
        <div className="projects">
          <h2 className="mt-4 lg:mt-6 text-md  lg:text-3xl uppercase font-bold">
            Your projects
          </h2>
          <button
            onClick={() => dialog.current.open()}
            className="bg-[#333] p-1.5 m-3  lg:m-6 rounded-md hover:bg-[#444] transition-colors text-xs lg:text-lg capitalize"
          >
            Add project
          </button>
        </div>
        <ProjectList />
      </aside>
    </>
  );
}
