import React from 'react';
import '../App.css';

const Interests = ({ data }) => (
    <section className="cv-section">
        <h3>Interests</h3>
        <ul className="interests-list">
            {data.map((interest, index) => (
                <li key={index}>{interest}</li>
            ))}
        </ul>
    </section>
);

export default Interests;
