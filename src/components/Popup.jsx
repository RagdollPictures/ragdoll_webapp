import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


function Popup({isOpen, closePopup, content}) {
    if (!isOpen) 
        return null;
    
    // Check if the content has a valid video URL
    const hasVideoUrl = content.url && content
        .url
        .trim() !== '';

    const hasLink = content.link && content
        .link
        .trim() !== '';

    return (
        <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
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
                    }}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
                <div className='popupHeadlineContainer'>
                    <div className='popupCoverImage'>
                        <img
                            src={`https://ragdoll.pictures/ragdoll_webapp_assets/covers/${content.cover}`}
                            alt={content.title}
                            width={80}
                            height={80}/>
                    </div>

                    <div className='popupTitleContainer'>
                        <h3>{content.title}</h3>
                        <h4>{content.footer}</h4>
                    </div>
                </div>
                {/* Conditionally render the video container only if there's a valid video URL */
                } {
                    hasVideoUrl && (
                        <div className="video-container">
                            <iframe
                                src={`https://player.vimeo.com/video/${content.url}`}
                                width="1280"
                                height="720"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                title={content.title}></iframe>
                        </div>
                    )
                }
                <div className='popupInfoContainer'>
                    <div className="popupInfo">
                        <h4>{content.headline}</h4>
                        {content.info}
                        {
    hasLink && (
        <div className='popupLinkWrap'>
            <a href={content.link} target="_blank" rel="noopener noreferrer" className="readMoreLink">
                Read more <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
        </div>
    )
}
            </div>
        </div>

        <div className='popupCompanyLogo'>
            <img
                src={`https://ragdoll.pictures/ragdoll_webapp_assets/logos/${content.logo}`}
                alt={content.title}
                height={50}/>
        </div>
    </div>
</div>
    );
}

export default Popup;
