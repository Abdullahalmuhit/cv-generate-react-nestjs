import React from 'react';
import '../App.css';

const Profile = ({ summary }) => (
    <section className="cv-section">
        <h3>Profile</h3>
        <p>{summary}</p>
    </section>
);

export default Profile;
