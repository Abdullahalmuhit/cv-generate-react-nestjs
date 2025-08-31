import React from 'react';
import '../App.css';

const Publications = ({ data }) => (
    <section className="cv-section">
        <h3>Publications</h3>
        {data.map((pub, index) => (
            <div key={index} className="publication-item">
                <h4>{pub.title}</h4>
                <p className="meta">{pub.year}</p>
                <p>{pub.description}</p>
                {pub.link && (
                    <p><a href={pub.link} target="_blank" rel="noopener noreferrer">Read More</a></p>
                )}
            </div>
        ))}
    </section>
);

export default Publications;
