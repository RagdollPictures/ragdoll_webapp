import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../style/projects.css';
import ProjectImage from './ProjectImage';

const makeSlug = (text) => {
    return String(text)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

function Main() {
    const [projectsByType, setProjectsByType] = useState({});

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const snapshot = await getDocs(
                    collection(db, 'projects')
                );

                const projects = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProjectsByType(
                    transformData(projects)
                );
            } catch (error) {
                console.error(
                    'Error fetching projects:',
                    error
                );
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
                <div
                    key={year}
                    className="year"
                >
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
                                        <Link
                                            key={project.id}
                                            to={`/project/${makeSlug(project.id)}`}
                                            className="projectLink"
                                            aria-label={`View ${project.title}`}
                                        >
                                            <ProjectImage
                                                src={`https://ragdoll.pictures/ragdoll_webapp_assets/covers/${project.cover}`}
                                                alt={project.title}
                                            />

                                            <span className="projectName">
                                                {project.id}
                                            </span>
                                        </Link>
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
        </div>
    );
}

export default Main;