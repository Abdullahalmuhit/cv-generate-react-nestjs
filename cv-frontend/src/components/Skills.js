import React from 'react';
import '../App.css';

const Skills = ({ data }) => (
    <section className="cv-section">
        <h3>Skills</h3>
        <div className="skills-container">
            {data.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
            ))}
        </div>
    </section>
);

export default Skills;
