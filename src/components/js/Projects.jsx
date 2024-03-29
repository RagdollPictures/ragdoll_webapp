import React, {useEffect, useState} from 'react';
import {db} from '../../firebase';
import {collection, query, where, getDocs} from 'firebase/firestore';
import '../style/projects.css';
import Popup from './Popup';
import ProjectImage from './ProjectImage';

function Main() {
    const [projectsByType, setProjectsByType] = useState({});
    const [selectedProject, setSelectedProject] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            const snapshot = await getDocs(collection(db, 'projects'));
            const allProjects = snapshot
                .docs
                .map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            const transformedData = transformData(allProjects);
            setProjectsByType(transformedData);
        };

        fetchProjects();
    }, []);

    const transformData = (projects) => {
        const byType = {};
        projects.forEach(project => {
            const {year, category} = project;
            if (!byType[year]) 
                byType[year] = {};
            if (!byType[year][category]) 
                byType[year][category] = [];
            byType[year][category].push(project);
        });
        return byType;
    };

    const handleImageClick = (project) => {
        setSelectedProject(project);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const renderProjects = () => {
        const sortedYears = projectsByType
            ? Object
                .keys(projectsByType)
                .map(Number)
                .sort((a, b) => b - a)
            : [];

        return sortedYears.map(year => {
            const categories = projectsByType[year]
                ? projectsByType[year]
                : {};

            return (
                <div key={year} className="year">
                    <div className='yearNumberContainer'><h2>{year}</h2></div>
                    {
                        Object
                            .entries(categories)
                            .map(([category, projects]) => (
                                <div key={category}>
                                    <h3>{category}</h3>
                                    <div className="sliderContainer">
                                        {
                                            projects && projects.map(project => (
                                                <ProjectImage
                                                    key={project.id}
                                                    src={`https://ragdoll.pictures/ragdoll_webapp_assets/covers/${project.cover}`}
                                                    alt={project.title}
                                                    onClick={() => handleImageClick(project)}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                    }
                </div>
            );
        });
    };

    return (
        <div className="wrap">
            {renderProjects()}
            {
                selectedProject && (
                    <Popup isOpen={isPopupOpen} closePopup={closePopup} content={selectedProject}/>
                )
            }
        </div>
    );
}

export default Main;
