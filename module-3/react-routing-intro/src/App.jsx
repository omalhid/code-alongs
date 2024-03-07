// App.jsx

import "./App.css";
import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/HomePage"; // <== IMPORT
import AboutPage from "./pages/AboutPage"; // <== IMPORT
import ProjectsPage from "./pages/ProjectsPage"; // <== IMPORT
import ErrorPage from "./pages/ErrorPage"; // <== IMPORT

import { Routes, Route } from "react-router-dom"; // <== IMPORT
import HomePageWithNavigate from "./pages/HomePageWithNavigate"; // <== IMPORT
import projectsData from "./projects-data.json"; // <== IMPORT
import ProjectDetailsPage from "./pages/ProjectDetailsPage"; // <== IMPORT
import QueryStringExample from "./pages/QueryStringExample";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* <Route  path="/" element={ <HomePage /> } /> */}

        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/projects"
          element={<ProjectsPage projects={projectsData} />}
        />

        {/*  ADD  */}
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />

        <Route path="/example" element={<QueryStringExample />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
