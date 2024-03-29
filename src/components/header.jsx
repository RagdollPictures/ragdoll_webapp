import React, {useState} from 'react';
import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import Education from './Education';
import Icons from './Icons';

function Header() {
    const [isBioExpanded, setIsBioExpanded] = useState(false);

    // Bio text broken into a preview and the full bio
    const bioPreview = `Hello there! I'm Emelie, standing at the vibrant intersection of technology and 
    artistic expression. 
    crafting stories through animations, designing engaging games and apps, ..`;

    const fullBio = `
    
                    Hello there! 
                    <br/><br/>   
                    I'm standing in the front-end, at the vibrant intersection of technology and 
                    artistic expression. 
                    Helping clients to craft their stories through animations, designing engaging games and apps, 
                    and creating digital illustrations that capture their imagination. 
                     Since founding my company in 2013, I've embarked on numerous creative endeavors, 
                    the projects showcased here representing a glimpse of that journey. 
              
                    <br/><br/>      
                    
                    It has been a blend of
                    learning and doing - from mastering the technical skills in 3D graphics for game
                    development to exploring the depths of art to better understand illustration, to take
                    university coruses in various programming lanugages and attending game-james, all this to better understand how graphics and
                    code goes togheter. 
                    <br/><br/>

                    Bridging the gap between programmers and graphic artists often seems like navigating a 
                    minefield—artists bring innovative, imaginative ideas to the table, while programmers 
                    face the tough job of tethering these ideas to the realm of technical feasibility. 
                    The root of the friction isn't incompatibility but a gap in mutual understanding. 
                    <br/><br/>      
                    Graphic artists may not fully grasp the technical limitations they're up against, 
                    while programmers might struggle to communicate these constraints without a solid 
                    grasp of the artistic process.

                    This is  a challenge I've dedicated thousands of hours to overcoming. It's about 
                    building a shared language and understanding, a bridge over the gap between creativity 
                    and technology. Mastery in this field is an ongoing journey, given the relentless pace 
                    of technological evolution. But embracing this challenge is what keeps me driven, 
                    always ready to explore new frontiers and push boundaries, together with teams who 
                    are as passionate as I am. It's not just about keeping up, it's about pioneering 
                    the path forward, learning and growing together.
                    <br/><br/>

                    My portfolio is filled with animations, but what doesn’t show at first glance is
                    the technical effort behind each piece. It’s all about enhancing the creative
                    process with smart solutions, using scripts and tools to make work not just
                    faster, but better. I believe in doing things the smart way, which to me means
                    being efficient without compromising on the quality of the final product.
                    <br/><br/>
                    Meeting deadlines is something I take seriously because I know time is precious
                    for everyone involved. And while animations are a big part of what I do, I’m
                    equally passionate about the tech side of things. From automating workflows to
                    developing games and apps, I’m always looking for ways to push the boundaries of
                    what I can create.
                   
                    <br/><br/>
                    Working with clients for me is about partnership. It’s taking your vision and
                    using my mix of skills to bring it to life. If you’re looking for someone who is
                    committed to deadlines, values clear communication, and brings a blend of
                    creativity and technical know-how to the table, then I think we could do great
                    things together.
                    <br/><br/>
                    
                    Looking forward to hear from you <3 
                    <br/><br/>emelie.falk.renstrom@gmail.com `;

    return (
        <div>
            <div className='social'>
                <a
                    href="https://github.com/RagdollPictures/ragdoll_webapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link">
                    <img
                        src="https://ragdoll.pictures/ragdoll_webapp_assets/profile/github-mark-white.svg"
                        alt="GitHub"
                        className="github-logo"/>
                    <p className="profileName">Emelie Falk Renström</p>
                </a>
            </div>
            <div className="header">
                <img
                    src="https://ragdoll.pictures/ragdoll_webapp_assets/profile/profile_emelie.jpg"
                    alt="Profile"
                    className="profile-pic"/>
            </div>

            <div
                className={`bioWrap ${isBioExpanded
                    ? 'expanded'
                    : ''}`}>

                <div
                    className="bioContainer"
                    dangerouslySetInnerHTML={{
                        __html: isBioExpanded
                            ? fullBio
                            : bioPreview
                    }}/> {
                    isBioExpanded && (

                        <div>

                            <Icons/>
                            <Education/>
                        </div>
                    )
                }

                <div className='btnContainer'>
                    <div onClick={() => setIsBioExpanded(!isBioExpanded)} className="readMoreBtn">
                        <FontAwesomeIcon
                            icon={isBioExpanded
                                ? faChevronUp
                                : faChevronDown}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Header;
