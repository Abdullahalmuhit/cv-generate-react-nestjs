import React from 'react';
import '../App.css';

const Header = ({ data }) => {
    const { name, jobTitle, contact, profileImage } = data;

    return (
        <div className="cv-header">
            {profileImage && (
                <img
                    src='../../image/muhid.png'
                    alt={`${name}'s profile`}
                    className="profile-image"
                />
            )}
            <h1>{name}</h1>
            <h2>{jobTitle}</h2>
            <div className="contact-info">
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.location}</p>
                <p>
                    <a href={contact.linkedin}>LinkedIn</a> |{' '}
                    <a href={contact.github}>GitHub</a>
                </p>
            </div>
        </div>
    );
};

export default Header;
