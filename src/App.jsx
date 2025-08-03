import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
import CreateProjectModal from "./components/CreateProjectModal.jsx";
function App() {
  const [projects, setProjects] = useState([]);
  const dialog = useRef();
  return (
    <div className="container flex flex-col md:flex-row min-h-screen ">
      <CreateProjectModal ref={dialog} />
      <Sidebar projects={projects} dialog={dialog} />
      <Project projects={projects} dialog={dialog} />
    </div>
  );
}

export default App;
