import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '../../firebase';
import ProjectContent from '../../components/js/projectContent';

import '../../components/style/projectPage.css';

function PortfolioPage() {
    const { portfolioSlug } = useParams();

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolio = async () => {
            setIsLoading(true);

            try {
                const portfolioRef = doc(
                    db,
                    'portfolios',
                    portfolioSlug
                );

                const portfolioSnap = await getDoc(portfolioRef);

                if (!portfolioSnap.exists()) {
                    console.error('Portfolio does not exist.');
                    setProjects([]);
                    return;
                }

                const portfolioData = portfolioSnap.data();

                const projectIds = portfolioData.projects || [];

                const projectPromises = projectIds.map(
                    async (projectId) => {
                        const projectRef = doc(
                            db,
                            'projects',
                            projectId
                        );

                        const projectSnap = await getDoc(projectRef);

                        if (!projectSnap.exists()) {
                            console.error(
                                `Project not found: ${projectId}`
                            );

                            return null;
                        }

                        return {
                            id: projectSnap.id,
                            ...projectSnap.data()
                        };
                    }
                );

                const loadedProjects = await Promise.all(
                    projectPromises
                );

                setProjects(
                    loadedProjects.filter(Boolean)
                );

            } catch (error) {
                console.error(
                    'Error loading portfolio:',
                    error
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchPortfolio();
    }, [portfolioSlug]);

    if (isLoading) {
        return (
            <main className="projectPage">
                <div className="projectPageStatus">
                    Loading portfolio...
                </div>
            </main>
        );
    }

    return (
        <main>
            {projects.map(project => (
                <div
                    className="projectPage"
                    key={project.id}
                >
                    <ProjectContent project={project} />
                </div>
            ))}
        </main>
    );
}

export default PortfolioPage;