import React, {useEffect} from 'react';
import './header.css';

function Header() {

    return (
        <div className='wrap'>
            <div className="header">
                <div className="header-content">
                </div>
                <a
                    href="https://github.com/RagdollPictures/ragdoll_webapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link">
                    <img src="https://ragdoll.pictures/ragdoll_webapp_assets/profile/github-mark-white.svg" alt="GitHub" className="github-logo"/> {/* Adjust the src to your GitHub logo path */}
                </a>
                <img src="https://ragdoll.pictures/ragdoll_webapp_assets/profile/profile.jpg" alt="Profile" className="profile-pic"/> {/* Adjust the src to your profile picture path */}
            </div>

            <div className="bioContainer">
                Hello! I’m here at the crossroads of technology and creativity, crafting stories
                through animations, designing engaging games and apps, and creating digital
                illustrations that capture the imagination. My journey has been a blend of
                learning and doing - from mastering the technical skills in 3D graphics for game
                development to exploring the depths of art to better understand illustration.
                <br/>
                My portfolio is filled with animations, but what doesn’t show at first glance is
                the technical effort behind each piece. It’s all about enhancing the creative
                process with smart solutions, using scripts and tools to make work not just
                faster, but better. I believe in doing things the smart way, which to me means
                being efficient without compromising on the quality of the final product.
                <br/>
                Meeting deadlines is something I take seriously because I know time is precious
                for everyone involved. And while animations are a big part of what I do, I’m
                equally passionate about the tech side of things. From automating workflows to
                developing games and apps, I’m always looking for ways to push the boundaries of
                what I can create.
                <br/>
                Continuous learning is a big part of who I am. I’ve spent time both in
                university and art school, not just to get the degrees but to really dive deep
                into my fields of interest. This journey has equipped me with a diverse set of
                skills, allowing me to explore new challenges and keep growing as a
                professional.
                <br/>
                Working with clients for me is about partnership. It’s taking your vision and
                using my mix of skills to bring it to life. If you’re looking for someone who is
                committed to deadlines, values clear communication, and brings a blend of
                creativity and technical know-how to the table, then I think we could do great
                things together.
                <br/>
                Looking forward to hear from you! Emelie Falk Renström
            </div>
        </div>

    );
}

export default Header;
