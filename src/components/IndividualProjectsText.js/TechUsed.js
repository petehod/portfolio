import React from "react";

const TechUsed = ({ tech }) => {
  console.log(tech);
  return (
    <ul className="iproj__ul">
      <li className="iproj__li">MongoDB</li>
      {tech.map((tech) => (
        <li>{tech}</li>
      ))}
    </ul>
  );
};

export default TechUsed;
