import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/projects.css';
import Popup from './Popup';
import ProjectImage from './ProjectImage';

function Main() {
    const [projectsByType, setProjectsByType] = useState({});
    const [allProjects, setAllProjects] = useState([]);
    const [projectsLoaded, setProjectsLoaded] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const makeSlug = (text) => {
        return String(text)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'projects'));

                const projects = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setAllProjects(projects);
                setProjectsByType(transformData(projects));
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setProjectsLoaded(true);
            }
        };

        fetchProjects();
    }, []);

    const transformData = (projects) => {
        const byType = {};

        projects.forEach(project => {
            const { year, category } = project;

            if (!byType[year]) {
                byType[year] = {};
            }

            if (!byType[year][category]) {
                byType[year][category] = [];
            }

            byType[year][category].push(project);
        });

        return byType;
    };

    const getProjectSlugFromUrl = () => {
        const match = location.pathname.match(/^\/project\/([^/]+)\/?$/);

        if (!match) {
            return null;
        }

        return match[1];
    };

    const projectSlugFromUrl = getProjectSlugFromUrl();

    const selectedProject = projectSlugFromUrl
        ? allProjects.find(
            project => makeSlug(project.id) === projectSlugFromUrl
        )
        : null;

    const handleImageClick = (project) => {
        navigate(
            `/project/${makeSlug(project.id)}`,
            {
                state: {
                    openedFromPortfolio: true
                }
            }
        );
    };

    const closePopup = () => {
        if (location.state?.openedFromPortfolio) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    useEffect(() => {
        if (
            projectsLoaded &&
            projectSlugFromUrl &&
            !selectedProject
        ) {
            navigate('/', { replace: true });
        }
    }, [
        projectsLoaded,
        projectSlugFromUrl,
        selectedProject,
        navigate
    ]);

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
                    <div className="yearNumberContainer">
                        <h2>{year}</h2>
                    </div>

                    {Object
                        .entries(categories)
                        .map(([category, projects]) => (
                            <div key={category}>
                                <h3>{category}</h3>

                                <div className="sliderContainer">
                                    {projects.map(project => (
                                        <ProjectImage
                                            key={project.id}
                                            src={`https://ragdoll.pictures/ragdoll_webapp_assets/covers/${project.cover}`}
                                            alt={project.title}
                                            onClick={() => handleImageClick(project)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            );
        });
    };

    return (
        <div className="wrap">
            {renderProjects()}

            {selectedProject && (
                <Popup
                    isOpen={true}
                    closePopup={closePopup}
                    content={selectedProject}
                />
            )}
        </div>
    );
}

export default Main;