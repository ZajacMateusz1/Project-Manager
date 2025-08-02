import ProjectList from "./ProjectList.jsx";
export default function Sidebar() {
  return (
    <>
      <aside className="flex-[1] md:self-end h-[95vh] text-center bg-[#111] md:rounded-tr-md  text-[#eee]">
        <div className="projects">
          <h2 className="mt-4 md:mt-6 text-md  md:text-3xl uppercase font-bold">
            Your projects
          </h2>
          <button className="bg-[#333] p-1.5 m-3  md:m-6 rounded-md hover:bg-[#444] transition-colors text-xs md:text-lg capitalize">
            Add project
          </button>
        </div>
        <ProjectList />
      </aside>
    </>
  );
}
