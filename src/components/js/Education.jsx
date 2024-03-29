import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import '../style/education.css';

function Education() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projectsSnapshot = await getDocs(collection(db, "education"));
            setProjects(projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        fetchProjects();
    }, []);

    return (
        <div className="educationWrap">
            <h3>Education</h3>
            <div className="educationsContainer">
                {projects.map((project, index) => (
                    <div key={project.id} style={{ '--fade-delay': `${index * 0.1}s` }}>
                        <div>{project.id}</div>
                        <div className='degree'>{project.degree}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
