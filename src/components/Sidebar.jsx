import ProjectList from "./ProjectList.jsx";
export default function Sidebar() {
  return (
    <>
      <aside className="bg-[#111] basis-1/5 self-end h-[95vh] rounded-tr-md text-[#eee] flex flex-col items-center justify-around">
        <h2 className="text-2xl font-bold">Your projects:</h2>
        <button className="bg-[#333] p-1.5 rounded-sm hover:bg-[#444] transition-colors">
          Add Project
        </button>
        <ProjectList />
      </aside>
    </>
  );
}
