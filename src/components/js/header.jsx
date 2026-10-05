import React, { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { doc, getDoc } from 'firebase/firestore';

import '../style/header.css';
import { db } from '../../firebase';

function Header() {
    const [bio, setBio] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const portfolioMatch = useMatch('/portfolio/:portfolioSlug');
    const portfolioSlug = portfolioMatch?.params?.portfolioSlug || null;

    useEffect(() => {
        const fetchBio = async () => {
            setIsLoading(true);

            try {
                // Portfolio-specific bio
                if (portfolioSlug) {
                    const portfolioRef = doc(
                        db,
                        'portfolios',
                        portfolioSlug
                    );

                    const portfolioSnap = await getDoc(portfolioRef);

                    if (portfolioSnap.exists()) {
                        const data = portfolioSnap.data();

                        setBio(data.bio || '');
                        return;
                    }
                }

                // Default bio
                const bioRef = doc(
                    db,
                    'siteContent',
                    'bio'
                );

                const bioSnap = await getDoc(bioRef);

                if (bioSnap.exists()) {
                    const data = bioSnap.data();

                    setBio(
                        data.bio ||
                        data.preview ||
                        data.full ||
                        ''
                    );
                } else {
                    console.error(
                        'Bio document does not exist in Firestore.'
                    );

                    setBio('');
                }

            } catch (error) {
                console.error(
                    'Error fetching bio from Firestore:',
                    error
                );

                setBio('');
            } finally {
                setIsLoading(false);
            }
        };

        fetchBio();
    }, [portfolioSlug]);

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