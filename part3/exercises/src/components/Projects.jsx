// components/Projects.jsx
import React, { useState } from 'react';
import data from './../data.json';

export default function MyProjects() {
  const [index, setIndex] = useState(0);
  const projectsList = data.projects;
  const currentProject = projectsList[index];

  function handleClick() {
    if (index < projectsList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <div>
        <h3>{currentProject.canvas}</h3>
        <p>{currentProject.designer}</p>
        <img src={currentProject.photoUrl} alt={currentProject.canvas} />
      </div>
    </div>
  );
}
