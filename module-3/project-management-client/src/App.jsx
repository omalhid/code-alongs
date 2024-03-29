// src/App.jsx

import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/HomePage"; // <== IMPORT
import ProjectListPage from "./pages/ProjectListPage"; //  <== IMPORT
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/*    ADD    */}
        <Route path="/projects" element={<ProjectListPage />} />
        {/*   ADD   */}
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          {/* Below: ADD */}
          <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } /> 
      </Routes>
    </div>
  );
}

export default App;
