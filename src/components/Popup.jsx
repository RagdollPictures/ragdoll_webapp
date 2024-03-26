import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function Popup({isOpen, closePopup, content}) {
    if (!isOpen) 
        return null;
    
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
                        cursor: 'pointer'
                    }}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>

                <h3>{content.title}</h3>
                <div className="video-container">
                    <iframe
                        src={`https://player.vimeo.com/video/${content.url}`}
                        width="640"
                        height="360"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        title={content.title}></iframe>
                </div>
                <p>{content.info}</p>
              
                <img
                    src={`https://ragdoll.pictures/ragdoll_webapp_assets/covers/${content.cover}`}
                    alt={content.title}/>
            </div>
        </div>
    );
}

export default Popup;
