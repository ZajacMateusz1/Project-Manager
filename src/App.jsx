import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
function App() {
  const [projects, setProjects] = useState([]);
  return (
    <div className="container flex flex-col md:flex-row min-h-screen ">
      <Sidebar projects={projects} />
      <Project projects={projects} />
    </div>
  );
}

export default App;
