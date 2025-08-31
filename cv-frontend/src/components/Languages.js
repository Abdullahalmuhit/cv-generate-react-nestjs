import React from 'react';
import '../App.css';

const Languages = ({ data }) => (
    <section className="cv-section">
        <h3>Languages</h3>
        <ul className="languages-list">
            {data.map((lang, index) => (
                <li key={index}>{lang}</li>
            ))}
        </ul>
    </section>
);

export default Languages;
