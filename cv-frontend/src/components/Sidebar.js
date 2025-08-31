const Sidebar = ({ contact, skills, languages, interests }) => (
    <aside className="bg-gray-100 p-6 space-y-6">
        <section>
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.location}</p>
            <a href={contact.linkedin} className="text-blue-600 block">LinkedIn</a>
            <a href={contact.github} className="text-blue-600 block">GitHub</a>
        </section>

        <section>
            <h2 className="text-lg font-semibold mb-2">Skills</h2>
            <ul className="list-disc ml-4">
                {skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
        </section>

        <section>
            <h2 className="text-lg font-semibold mb-2">Languages</h2>
            <ul className="list-disc ml-4">
                {languages.map((lang, i) => <li key={i}>{lang}</li>)}
            </ul>
        </section>

        <section>
            <h2 className="text-lg font-semibold mb-2">Interests</h2>
            <ul className="list-disc ml-4">
                {interests.map((interest, i) => <li key={i}>{interest}</li>)}
            </ul>
        </section>
    </aside>
);

export default Sidebar;
