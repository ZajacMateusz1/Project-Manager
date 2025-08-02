import noProjects from "../assets/no-projects.png";
export default function Projct() {
  return (
    <main className="flex-[4]">
      <img src={noProjects} alt="Graphic showing no projects " />
      <p>You have not selected any projects</p>
      <p>Select a project or create a new one</p>
      <button></button>
    </main>
  );
}
