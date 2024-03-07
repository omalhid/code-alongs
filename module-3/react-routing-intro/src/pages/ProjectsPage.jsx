// ./src/pages/ProjectsPage.jsx

import { useState, useEffect } from "react";
// import projectsData from "./../projects-data.json";  // <== REMOVE
import { Link } from "react-router-dom";

function ProjectsPage(props) {
  // <== UPDATE
  const [projects, setProjects] = useState([]);

  // This effect depends on `props.projects`.
  // It will run on the initial render and every time
  // when the `props.projects` updates.
  useEffect(() => {
    setProjects(props.projects); // <== UPDATE
  }, [props.projects]); // <== UPDATE

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>
              <Link to={`/projects/${project._id}`}>{project.name}</Link>
            </h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
