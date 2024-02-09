import React from 'react';

function Project({ title, github, image, app }) {
  return (
    <div>
      <a href={app} target="_blank">
        <img className="portfolioIMG" src={image} alt={title} />
      </a>
      <h2>{title}</h2>
      <p>
        <a className="linkToGithub" href={github} target="_blank">
          <i className="github"></i>
        </a>
      </p>
    </div>
  );
}

export default Project;
