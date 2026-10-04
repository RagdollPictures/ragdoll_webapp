import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../../components/style/projectPage.css';

const makeSlug = (text) => {
    return String(text)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

function ProjectPage() {
    const { projectSlug } = useParams();

    const projectPageRef = useRef(null);

    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchProject = async () => {
            setIsLoading(true);
            setHasError(false);

            try {
                const snapshot = await getDocs(
                    collection(db, 'projects')
                );

                const projects = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                const selectedProject = projects.find(
                    item => makeSlug(item.id) === projectSlug
                );

                setProject(selectedProject || null);
            } catch (error) {
                console.error(
                    'Error fetching project:',
                    error
                );

                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProject();
    }, [projectSlug]);

    useEffect(() => {
        if (project && projectPageRef.current) {
            projectPageRef.current.scrollIntoView({
                behavior: 'auto',
                block: 'start'
            });
        }
    }, [project]);

    if (isLoading) {
        return (
            <main className="projectPage">
                <div className="projectPageStatus">
                    Loading project...
                </div>
            </main>
        );
    }

    if (hasError) {
        return (
            <main className="projectPage">
                <div className="projectPageStatus">
                    Could not load project.
                </div>
            </main>
        );
    }

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const hasVideoUrl =
        project.url &&
        typeof project.url === 'string' &&
        project.url.trim() !== '';

    const hasBanner =
        project.banner &&
        typeof project.banner === 'string' &&
        project.banner.trim() !== '';

    const hasLink =
        project.link &&
        typeof project.link === 'string' &&
        project.link.trim() !== '';

    const hasGithub =
        project.github &&
        typeof project.github === 'string' &&
        project.github.trim() !== '';

    const hasLogo =
        project.logo &&
        typeof project.logo === 'string' &&
        project.logo.trim() !== '';

    const hasCompanyLink =
        project.companyLink &&
        typeof project.companyLink === 'string' &&
        project.companyLink.trim() !== '';

    return (
        <main
            className="projectPage"
            ref={projectPageRef}
        >
            <article className="projectPageContent">

                <div className="projectHeadlineContainer">
                    <div className="projectCoverImage">
                        <img
                            src={`https://ragdoll.pictures/ragdoll_webapp_assets/covers/${project.cover}`}
                            alt={project.title}
                            width={80}
                            height={80}
                        />
                    </div>

                    <div className="projectTitleContainer">
                        <h1>{project.title}</h1>
                        <h2>{project.footer}</h2>
                    </div>
                </div>

                {hasVideoUrl ? (
                    <div className="projectMediaContainer">
                        <video
                            controls
                            playsInline
                            preload="metadata"
                            poster={`https://ragdoll.pictures/ragdoll_webapp_assets/posters/${project.url}.jpg`}
                            width="1280"
                            height="720"
                        >
                            <source
                                src={`https://ragdoll.pictures/ragdoll_webapp_assets/videos/${project.url}.mp4`}
                                type="video/mp4"
                            />
                        </video>
                    </div>
                ) : hasBanner ? (
                    <div className="projectMediaContainer">
                        <img
                            className="projectBanner"
                            src={`https://ragdoll.pictures/ragdoll_webapp_assets/banners/${project.banner}`}
                            alt={project.title}
                        />
                    </div>
                ) : null}

                <div className="projectInfoContainer">
                    <div className="projectInfo">
                        <h3>{project.headline}</h3>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: project.info || ''
                            }}
                        />

                        {hasLink && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="readMoreLink"
                            >
                                Read more{' '}
                                <FontAwesomeIcon
                                    icon={faExternalLinkAlt}
                                />
                            </a>
                        )}
                    </div>
                </div>

                <div className="projectBottomBar">

                    {hasGithub && (
                        <div className="projectGithub">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projectGithubLink"
                            >
                                <img
                                    src="https://ragdoll.pictures/ragdoll_webapp_assets/profile/github-mark-white.svg"
                                    alt="GitHub"
                                    className="projectGithubLogo"
                                />

                                <span>
                                    View on GitHub
                                </span>
                            </a>
                        </div>
                    )}

                    {hasLogo && (
                        <div className="projectCompanyLogo">
                            {hasCompanyLink ? (
                                <a
                                    href={project.companyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`https://ragdoll.pictures/ragdoll_webapp_assets/logos/${project.logo}`}
                                        alt={project.title}
                                        height={50}
                                    />
                                </a>
                            ) : (
                                <img
                                    src={`https://ragdoll.pictures/ragdoll_webapp_assets/logos/${project.logo}`}
                                    alt={project.title}
                                    height={50}
                                />
                            )}
                        </div>
                    )}

                </div>

            </article>
        </main>
    );
}

export default ProjectPage;