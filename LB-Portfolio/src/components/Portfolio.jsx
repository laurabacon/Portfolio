import React from 'react';

function Project({ title, github, image, app }) {
  return (
    <div>
      <h3>Portfolio</h3>
      <a href={app} target="_blank">
        <img className="portfolioIMG" src={image} alt={title} />
      </a>
      <h4>{title}</h4>
      <p>
        <a className="linkToGithub" href={github} target="_blank">
          <i className="github"></i>
        </a>
      </p>
    </div>
  );
}

export default Project;
