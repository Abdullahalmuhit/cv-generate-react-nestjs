import React, { useEffect, useState } from 'react';
import { fetchCv } from '../services/cvService';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Languages from '../components/Languages';
import Interests from '../components/Interests';
import '../App.css';

const CvPage = () => {
    const [cv, setCv] = useState(null);

    useEffect(() => {
        fetchCv().then(setCv);
    }, []);

    if (!cv) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="cv-container">
            <Header data={cv} />
            <Profile summary={cv.summary} />
            <Experience data={cv.experience} />
            <Education data={cv.education} />
            <Skills data={cv.skills} />
            <Projects data={cv.projects} />
            <Publications data={cv.publications} />
            <Languages data={cv.languages} />
            <Interests data={cv.interests} />
        </div>
    );
};

export default CvPage;
