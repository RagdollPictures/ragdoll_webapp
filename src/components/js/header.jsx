import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { doc, getDoc } from 'firebase/firestore';

import '../style/header.css';
import { db } from '../../firebase';

function Header() {
    const [bio, setBio] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBio = async () => {
            try {
                const bioRef = doc(db, 'siteContent', 'bio');
                const bioSnap = await getDoc(bioRef);

                if (bioSnap.exists()) {
                    const data = bioSnap.data();

                    setBio(
                        data.preview ||
                        data.full ||
                        ''
                    );
                } else {
                    console.error(
                        'Bio document does not exist in Firestore.'
                    );
                }
            } catch (error) {
                console.error(
                    'Error fetching bio from Firestore:',
                    error
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchBio();
    }, []);

    return (
        <header>

            <div className="headerTopBar">

                <Link
                    to="/"
                    className="headerName"
                >
                    <FontAwesomeIcon
                        icon={faHouse}
                        className="homeIcon"
                    />

                    <span>
                        Emelie Falk Renström
                    </span>
                </Link>

                <a
                    href="https://github.com/RagdollPictures/ragdoll_webapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    <img
                        src="https://ragdoll.pictures/ragdoll_webapp_assets/profile/github-mark-white.svg"
                        alt=""
                        className="github-logo"
                    />

                    <span>
                        View on GitHub
                    </span>
                </a>

            </div>

            <div className="header">
                <img
                    src="https://ragdoll.pictures/ragdoll_webapp_assets/profile/profile_emelie.jpg"
                    alt="Emelie Falk Renström"
                    className="profile-pic"
                />
            </div>

            <div className="bioWrap">
                {!isLoading && (
                    <div
                        className="bioContainer"
                        dangerouslySetInnerHTML={{
                            __html: bio
                        }}
                    />
                )}
            </div>

        </header>
    );
}

export default Header;