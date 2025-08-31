import React from 'react';

const Experience = ({ data }) => (
    <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Experience</h2>
        {data.map((job, index) => (
            <div key={index} className="mb-4">
                <h3 className="font-semibold">{job.title} – {job.company}</h3>
                <p className="text-sm text-gray-600">{job.startDate} to {job.endDate}</p>
                <p>{job.description}</p>
            </div>
        ))}
    </section>
);

export default Experience;
