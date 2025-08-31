import React from 'react';
import '../App.css';

const Projects = ({ data }) => (
    <section className="cv-section">
        <h3>Projects</h3>
        {data.map((project, index) => (
            <div key={index} className="project-item">
                <h4>{project.name}</h4>
                <p className="meta">{project.year}</p>
                <p>{project.description}</p>
                {project.technologies && (
                    <p className="technologies"><strong>Tech:</strong> {project.technologies.join(', ')}</p>
                )}
                {project.link && (
                    <p><a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a></p>
                )}
            </div>
        ))}
    </section>
);

export default Projects;
