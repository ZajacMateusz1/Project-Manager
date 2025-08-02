import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
function App() {
  return (
    <div className="container flex flex-col md:flex-row min-h-screen ">
      <Sidebar />
      <Project />
    </div>
  );
}

export default App;
