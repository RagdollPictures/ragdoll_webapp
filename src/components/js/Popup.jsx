import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../style/popup.css';

function Popup({ isOpen, closePopup, content }) {
    useEffect(() => {
        document.body.classList.toggle('no-scroll', isOpen);

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const hasVideoUrl =
        content.url &&
        typeof content.url === 'string' &&
        content.url.trim() !== '';

    const hasBanner =
        content.banner &&
        typeof content.banner === 'string' &&
        content.banner.trim() !== '';

    const hasLink =
        content.link &&
        typeof content.link === 'string' &&
        content.link.trim() !== '';

    const hasGithub =
        content.github &&
        typeof content.github === 'string' &&
        content.github.trim() !== '';

    const popupClass = isOpen
        ? 'popup-content'
        : 'popup-content hidden';

    return (
        <div className="popup-overlay" onClick={closePopup}>
            <div
                className={popupClass}
                onClick={e => e.stopPropagation()}
            >
                <button
                    id="closeBtn"
                    onClick={closePopup}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#ffffff'
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="popupHeadlineContainer">
                    <div className="popupCoverImage">
                        <img
                            src={`https://ragdoll.pictures/ragdoll_webapp_assets/covers/${content.cover}`}
                            alt={content.title}
                            width={80}
                            height={80}
                        />
                    </div>

                    <div className="popupTitleContainer">
                        <h3>{content.title}</h3>
                        <h4>{content.footer}</h4>
                    </div>
                </div>

                {hasVideoUrl ? (
                    <div className="video-container">
                        <video
                            controls
                            playsInline
                            preload="metadata"
                            poster={`https://ragdoll.pictures/ragdoll_webapp_assets/posters/${content.url}.jpg`}
                            width="1280"
                            height="720"
                        >
                            <source
                                src={`https://ragdoll.pictures/ragdoll_webapp_assets/videos/${content.url}.mp4`}
                                type="video/mp4"
                            />
                        </video>
                    </div>
                ) : hasBanner ? (
                    <div className="video-container">
                        <img
                            className="projectBanner"
                            src={`https://ragdoll.pictures/ragdoll_webapp_assets/banners/${content.banner}`}
                            alt={content.title}
                        />
                    </div>
                ) : null}

                <div className="popupInfoContainer">
                    <div className="popupInfo">
                        <h4>{content.headline}</h4>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: content.info
                            }}
                        />

                        {hasLink && (
                            <a
                                href={content.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="readMoreLink"
                            >
                                Read more{' '}
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                        )}
                    </div>
                </div>

                <div className="popupBottomBar">
                    {hasGithub && (
                        <div className="popupGithub">
                            <a
                                href={content.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="popupGithubLink"
                            >
                                <img
                                    src="https://ragdoll.pictures/ragdoll_webapp_assets/profile/github-mark-white.svg"
                                    alt="GitHub"
                                    className="popupGithubLogo"
                                />
                                <span>View on GitHub</span>
                            </a>
                        </div>
                    )}

                    <div className="popupCompanyLogo">
                        <a
                            href={content.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`https://ragdoll.pictures/ragdoll_webapp_assets/logos/${content.logo}`}
                                alt={content.title}
                                height={50}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;