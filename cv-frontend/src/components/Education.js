import React from 'react';
import '../App.css';

const Education = ({ data }) => (
    <section className="cv-section">
        <h3>Education</h3>
        {data.map((edu, index) => (
            <div key={index} className="education-item">
                <h4>{edu.degree}</h4>
                <p className="institution">{edu.institution}</p>
                <p className="meta">{edu.years}</p>
                <p>{edu.description}</p>
            </div>
        ))}
    </section>
);

export default Education;
