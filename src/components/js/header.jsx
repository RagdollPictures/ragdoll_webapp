import React, {useEffect, useState} from 'react';
import '../style/header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../../firebase';
import Education from './Education';
import Icons from './Icons';

function Header() {
    const [isBioExpanded, setIsBioExpanded] = useState(false);
    const [bioPreview, setBioPreview] = useState('');
    const [fullBio, setFullBio] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBio = async () => {
            try {
                const bioRef = doc(db, 'siteContent', 'bio');
                const bioSnap = await getDoc(bioRef);

                if (bioSnap.exists()) {
                    const data = bioSnap.data();

                    setBioPreview(data.preview || '');
                    setFullBio(data.full || '');
                } else {
                    console.error('Bio document does not exist in Firestore.');
                }
            } catch (error) {
                console.error('Error fetching bio from Firestore:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBio();
    }, []);

    return (
        <div>
            <div className='social'>
                <a
                    href="https://github.com/RagdollPictures/ragdoll_webapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    <img
                        src="https://ragdoll.pictures/ragdoll_webapp_assets/profile/github-mark-white.svg"
                        alt="GitHub"
                        className="github-logo"
                    />
                    <p className="profileName">Emelie Falk Renström</p>
                </a>
            </div>

            <div className="header">
                <img
                    src="https://ragdoll.pictures/ragdoll_webapp_assets/profile/profile_emelie.jpg"
                    alt="Profile"
                    className="profile-pic"
                />
            </div>

            <div
                className={`bioWrap ${
                    isBioExpanded ? 'expanded' : ''
                }`}
            >
                {!isLoading && (
                    <>
                        <div
                            className="bioContainer"
                            dangerouslySetInnerHTML={{
                                __html: isBioExpanded
                                    ? fullBio
                                    : bioPreview
                            }}
                        />

                        {isBioExpanded && (
                            <div>
                                <Icons />
                                <Education />
                            </div>
                        )}

                        <div className='btnContainer'>
                            <div
                                onClick={() =>
                                    setIsBioExpanded(!isBioExpanded)
                                }
                                className="readMoreBtn"
                            >
                                <FontAwesomeIcon
                                    icon={
                                        isBioExpanded
                                            ? faChevronUp
                                            : faChevronDown
                                    }
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;