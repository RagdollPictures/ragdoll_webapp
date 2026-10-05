import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import '../style/projectPage.css';

function ProjectContent({ project }) {
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
    );
}

export default ProjectContent;