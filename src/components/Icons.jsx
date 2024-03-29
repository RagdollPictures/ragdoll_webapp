import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import './icons.css';

function Icons() {
    const [projects, setProjects] = useState([]);
    const urlPrefix = "https://ragdoll.pictures/ragdoll_webapp_assets/icons/";

    useEffect(() => {
        const fetchProjects = async () => {
            const projectsSnapshot = await getDocs(collection(db, "icons"));
            setProjects(projectsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
        };

        fetchProjects();
    }, []);

    return (
        <div className="iconsWrap">
            <h3>Tech stack</h3>
            <div className="iconsContainer">
                {projects.map((project, index) => (
                    <div key={project.id} style={{ 
                          animation: `fadeIn 1s ease-out ${index * 0.2}s forwards`, 
                          opacity: 0 }}>
                        <img
                            className="icons"
                            src={urlPrefix + project.imgUrl}
                            alt={project.title}
                            width={80}
                            height={80}/>
                        <div>{project.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Icons;
