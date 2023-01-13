import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((data) => (
          <span key={data}> {data}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;