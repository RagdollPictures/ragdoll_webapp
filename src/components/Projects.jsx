import React, {useEffect, useState} from 'react';
import {db} from '../firebase';
import {collection, query, where, getDocs} from "firebase/firestore";
import "./projects.css";
import Popup from './Popup';
import "./popup.css";
import ProjectImage from './ProjectImage'; // Adjust the path based on your file structure

function Main() {
    
    const [projects, setProjects] = useState([]);
    const [animationProjects2024, setAnimationProjects2024] = useState([]); // Updated for 2024 Animation projects
    const [animationProjects2022, setAnimationProjects2022] = useState([]); // Updated for 2024 Animation projects
    const [bookProjects2022, setBookProjects2022] = useState([]); // Updated for 2024 Animation projects

    const [appProjects2024, setAppProjects2024] = useState([]); // Updated for 2024 Animation projects
    const [animationProjects2023, setAnimationProjects2023] = useState([]);
    const [animationProjects2021, setAnimationProjects2021] = useState([]);
    const [bookProjects2021, setBookProjects2021] = useState([]);

    const [animationProjects2020, setAnimationProjects2020] = useState([]);
    const [appProjects2020, setAppProjects2020] = useState([]); // Updated for 2024 Animation projects
    const [bookProjects2020, setBookProjects2020] = useState([]);

    const [animationProjects2019, setAnimationProjects2019] = useState([]);
    const [appProjects2019, setAppProjects2019] = useState([]); // Updated for 2024 Animation projects

    const [appProjects2018, setAppProjects2018] = useState([]); // Updated for 2024 Animation projects
    const [bookProjects2018, setBookProjects2018] = useState([]); // Updated for 2024 Animation projects
    const [animationProjects2018, setAnimationProjects2018] = useState([]);

    const [gameProjects2017, setGameProjects2017] = useState([]); // Updated for 2024 Animation projects
    const [appProjects2017, setAppProjects2017] = useState([]); // Updated for 2024 Animation projects
    const [bookProjects2017, setBookProjects2017] = useState([]); // Updated for 2024 Animation projects

    const [piratmysteriumProjects, setPiratmysteriumProjects] = useState([]);
    const [rommysteriumProjects, setRomProjects] = useState([]);
    const [piOgLuringsMysteriumProjects, setPiOgLuringsMysteriumProjects] = useState(
        []
    );
    const [mattemagiskMysteriumProjects, setMattemagiskMysteriumProjects] = useState(
        []
    );

    const [photostoriesProjects, setPhotostoriesProjects] = useState([]);
    const [fabelDetektivbyra01Projects, setFabelDetektivbyra01Projects] = useState(
        []
    );

    const [fabelDetektivbyra02Projects, setFabelDetektivbyra02Projects] = useState(
        []
    );

    const [yrkerProjects, setYrkerProjects] = useState([]);

    const [hyperProjects, setHyperProjects] = useState([]);

    const [selectedProject, setSelectedProject] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
   
   
    const handleImageLoaded = (projectId) => {
        setProjects(prevProjects => prevProjects.map(project => 
          project.id === projectId ? { ...project, isLoaded: true } : project
        ));
      };
   
   
    const urlPrefix = "https://ragdoll.pictures/ragdoll_webapp_assets/covers/";

    useEffect(() => {
        const fetchProjects = async () => {
            const allProjectsSnapshot = await getDocs(collection(db, "projects"));
            setProjects(allProjectsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2024 Animation projects
            const animationProjects2024Query = query(
                collection(db, "projects"),
                where("year", "==", "2024"),
                where("category", "==", "animation")
            );
            const animationProjects2024Snapshot = await getDocs(animationProjects2024Query);
            setAnimationProjects2024(animationProjects2024Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2022 Animation projects
            const animationProjects2022Query = query(
                collection(db, "projects"),
                where("year", "==", "2022"),
                where("category", "==", "animation")
            );
            const animationProjects2022Snapshot = await getDocs(animationProjects2022Query);
            setAnimationProjects2022(animationProjects2022Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2022 Animation projects
            const bookProjects2022Query = query(
                collection(db, "projects"),
                where("year", "==", "2022"),
                where("category", "==", "bok")
            );
            const bookProjects2022Snapshot = await getDocs(bookProjects2022Query);
            setBookProjects2022(bookProjects2022Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2024 Animation projects
            const appProjects2024Query = query(
                collection(db, "projects"),
                where("year", "==", "2024"),
                where("category", "==", "app")
            );

            // Query for 2023 Animation projects
            const animationProjects2023Query = query(
                collection(db, "projects"),
                where("year", "==", "2023"),
                where("category", "==", "animation")
            );
            const animationProjects2023Snapshot = await getDocs(animationProjects2023Query);
            setAnimationProjects2023(animationProjects2023Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2023 Animation projects
            const animationProjects2021Query = query(
                collection(db, "projects"),
                where("year", "==", "2021"),
                where("category", "==", "animation")
            );
            const animationProjects2021Snapshot = await getDocs(animationProjects2021Query);
            setAnimationProjects2021(animationProjects2021Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2023 Animation projects
            const bookProjects2021Query = query(
                collection(db, "projects"),
                where("year", "==", "2021"),
                where("category", "==", "bok")
            );
            const bookProjects2021Snapshot = await getDocs(bookProjects2021Query);
            setBookProjects2021(bookProjects2021Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2023 Animation projects
            const animationProjects2020Query = query(
                collection(db, "projects"),
                where("year", "==", "2020"),
                where("category", "==", "animation")
            );
            const animationProjects2020Snapshot = await getDocs(animationProjects2020Query);
            setAnimationProjects2020(animationProjects2020Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2023 Animation projects
            const bookProjects2020Query = query(
                collection(db, "projects"),
                where("year", "==", "2020"),
                where("category", "==", "bok")
            );
            const bookProjects2020Snapshot = await getDocs(bookProjects2020Query);
            setBookProjects2020(bookProjects2020Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2023 Animation projects
            const appProjects2020Query = query(
                collection(db, "projects"),
                where("year", "==", "2020"),
                where("category", "==", "app")
            );
            const appProjects2020Snapshot = await getDocs(appProjects2020Query);
            setAppProjects2020(appProjects2020Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2023 Animation projects
            const appProjects2019Query = query(
                collection(db, "projects"),
                where("year", "==", "2019"),
                where("category", "==", "app")
            );
            const appProjects2019Snapshot = await getDocs(appProjects2019Query);
            setAppProjects2019(appProjects2019Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2023 Animation projects
            const animationProjects2019Query = query(
                collection(db, "projects"),
                where("year", "==", "2019"),
                where("category", "==", "animation")
            );
            const animationProjects2019Snapshot = await getDocs(animationProjects2019Query);
            setAnimationProjects2019(animationProjects2019Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            const appProjects2024Snapshot = await getDocs(appProjects2024Query);
            setAppProjects2024(appProjects2024Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for Mattemagisk projects remains unchanged
            const piratmysteriumQuery = query(
                collection(db, "projects"),
                where("subject", "==", "piratmysterium")
            );
            const piratmysteriumSnapshot = await getDocs(piratmysteriumQuery);
            setPiratmysteriumProjects(piratmysteriumSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for Mattemagisk projects remains unchanged
            const rommysteriumQuery = query(
                collection(db, "projects"),
                where("subject", "==", "rommysterium")
            );
            const rommysteriumSnapshot = await getDocs(rommysteriumQuery);
            setRomProjects(rommysteriumSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for Mattemagisk projects remains unchanged
            const piOgLuringsMysteriumQuery = query(
                collection(db, "projects"),
                where("subject", "==", "pi og lurings mysterium")
            );
            const piOgLuringsMysteriumSnapshot = await getDocs(piOgLuringsMysteriumQuery);
            setPiOgLuringsMysteriumProjects(piOgLuringsMysteriumSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for Mattemagisk projects remains unchanged
            const mattemagiskMysteriumQuery = query(
                collection(db, "projects"),
                where("subject", "==", "mattemagisk mysterium")
            );
            const mattemagiskMysteriumSnapshot = await getDocs(mattemagiskMysteriumQuery);
            setMattemagiskMysteriumProjects(mattemagiskMysteriumSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for Mattemagisk projects remains unchanged
            const photostoriesQuery = query(
                collection(db, "projects"),
                where("category", "==", "Photo stories")
            );
            const photostoriesSnapshot = await getDocs(photostoriesQuery);
            setPhotostoriesProjects(photostoriesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for Mattemagisk projects remains unchanged
            const yrkerQuery = query(
                collection(db, "projects"),
                where("category", "==", "Yrker")
            );
            const yrkerSnapshot = await getDocs(yrkerQuery);
            setYrkerProjects(yrkerSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for Mattemagisk projects remains unchanged
            const hyperQuery = query(
                collection(db, "projects"),
                where("category", "==", "Hej Hyper")
            );
            const hyperSnapshot = await getDocs(hyperQuery);
            setHyperProjects(hyperSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for Mattemagisk projects remains unchanged
            const fabelDetektivbyra01Query = query(
                collection(db, "projects"),
                where("category", "==", "Fabel Detektivbyrå 01")
            );
            const fabelDetektivbyra01Snapshot = await getDocs(fabelDetektivbyra01Query);
            setFabelDetektivbyra01Projects(fabelDetektivbyra01Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for Mattemagisk projects remains unchanged
            const fabelDetektivbyra02Query = query(
                collection(db, "projects"),
                where("category", "==", "Fabel Detektivbyrå 02")
            );
            const fabelDetektivbyra02Snapshot = await getDocs(fabelDetektivbyra02Query);
            setFabelDetektivbyra02Projects(fabelDetektivbyra02Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2024 Animation projects
            const appProjects2018Query = query(
                collection(db, "projects"),
                where("year", "==", "2018"),
                where("category", "==", "games")
            );
            const appProjects2018Snapshot = await getDocs(appProjects2018Query);
            setAppProjects2018(appProjects2018Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2022 Animation projects
            const animationProjects2018Query = query(
                collection(db, "projects"),
                where("year", "==", "2018"),
                where("category", "==", "animation")
            );
            const animationProjects2018Snapshot = await getDocs(animationProjects2018Query);
            setAnimationProjects2018(animationProjects2018Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2022 Animation projects
            const bookProjects2018Query = query(
                collection(db, "projects"),
                where("year", "==", "2018"),
                where("category", "==", "bok")
            );
            const bookProjects2018Snapshot = await getDocs(bookProjects2018Query);
            setBookProjects2018(bookProjects2018Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2022 Animation projects
            const gameProjects2017Query = query(
                collection(db, "projects"),
                where("year", "==", "2017"),
                where("category", "==", "game")
            );
            const gameProjects2017Snapshot = await getDocs(gameProjects2017Query);
            setGameProjects2017(gameProjects2017Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2022 Animation projects
            const bookProjects2017Query = query(
                collection(db, "projects"),
                where("year", "==", "2017"),
                where("category", "==", "bok")
            );
            const bookProjects2017Snapshot = await getDocs(bookProjects2017Query);
            setBookProjects2017(bookProjects2017Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));

            // Query for 2022 Animation projects
            const appProjects2017Query = query(
                collection(db, "projects"),
                where("year", "==", "2017"),
                where("category", "==", "app")
            );
            const appProjects2017Snapshot = await getDocs(appProjects2017Query);
            setAppProjects2017(appProjects2017Snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
        };

        fetchProjects();
    }, []);

    const handleImageClick = (project) => {
        setSelectedProject(project);
        setIsPopupOpen(true);
        document.body.style.overflow = 'hidden'; // Lock background scroll when the popup is open
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        document.body.style.overflow = ''; // Re-enable background scrolling

    };

    return (

      

            <div className="wrap">

                <div className="year">
                    <div className='yearNumberContainer'>
                        <div className="yearNumber">
                            <h2 >2024</h2>
                        </div>
                    </div>

                    <h3>Animations</h3>
                    <div className="sliderContainer">
                        {
                             animationProjects2024.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                              ))
                        }
                    </div>

                    <h3>Apps</h3>
                    <div className="sliderContainer">
                        {
                            appProjects2024.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                </div>

                <div className="year">
                    <div className='yearNumberContainer'>
                        <div className="yearNumber">
                            <h2 >2023</h2>
                        </div>
                    </div>

                    <h3>Animations</h3>
                    <div className="sliderContainer">
                        {
                            animationProjects2023.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                    <h4>Mattemagisk -Piratmysterium</h4>
                    <div className="sliderContainer">
                        {
                            piratmysteriumProjects.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                    <h4>Mattemagisk -Rommysterium</h4>
                    <div className="sliderContainer">
                        {
                            rommysteriumProjects.map(project => (
                                <ProjectImage
                                key={project.id}
                                src={urlPrefix + project.cover}
                                alt={project.title}
                                onClick={() => handleImageClick(project)}
                              />
                            ))
                        }
                    </div>

                    <h4>Mattemagisk -Pi og Luringens mysterium</h4>
                    <div className="sliderContainer">
                        {
                            piOgLuringsMysteriumProjects.map(project => (
                                <ProjectImage
                                key={project.id}
                                src={urlPrefix + project.cover}
                                alt={project.title}
                                onClick={() => handleImageClick(project)}
                              />
                            ))
                        }
                    </div>

                    <h4>Mattemagisk -Mattemagisk mysterium</h4>
                    <div className="sliderContainer">
                        {
                            mattemagiskMysteriumProjects.map(project => (
                                <ProjectImage
                                key={project.id}
                                src={urlPrefix + project.cover}
                                alt={project.title}
                                onClick={() => handleImageClick(project)}
                              />
                            ))
                        }
                    </div>
                </div>

                <div className="year">
                    <div className='yearNumberContainer'>
                        <div className="yearNumber">
                            <h2 >2022</h2>
                        </div>
                    </div>
                    <h3>Animations</h3>

                    <div className="sliderContainer">
                        {
                            animationProjects2022.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                    <h4>Photo stories</h4>
                    <div className="sliderContainer">
                        {
                            photostoriesProjects.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                    <h3>Books</h3>
                    <div className="sliderContainer">
                        {
                            bookProjects2022.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="year">
                    <div className='yearNumberContainer'>
                        <div className="yearNumber">
                            <h2 >2021</h2>
                        </div>
                    </div>
                    <h3>Animations</h3>

                    <div className="sliderContainer">
                        {
                            animationProjects2021.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                    <h4>Fabel Detektivbyrå</h4>

                    <div className="sliderContainer">
                        {
                            fabelDetektivbyra02Projects.map(project => (
                                <ProjectImage
                                key={project.id}
                                src={urlPrefix + project.cover}
                                alt={project.title}
                                onClick={() => handleImageClick(project)}
                              />
                            ))
                        }
                    </div>

                    <h3>Books</h3>

                    <div className="sliderContainer">
                        {
                            bookProjects2021.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="year">
                    <div className='yearNumberContainer'>
                        <div className="yearNumber">
                            <h2 >2020</h2>
                        </div>
                    </div>

                    <h3>Apps</h3>

                    <div className="sliderContainer">
                        {
                            appProjects2020.map(project => (
                                <ProjectImage
                                key={project.id}
                                src={urlPrefix + project.cover}
                                alt={project.title}
                                onClick={() => handleImageClick(project)}
                              />
                            ))
                        }
                    </div>

                    <h3>Books</h3>

                    <div className="sliderContainer">
                        {
                            bookProjects2020.map(project => (
                                <ProjectImage
                                key={project.id}
                                src={urlPrefix + project.cover}
                                alt={project.title}
                                onClick={() => handleImageClick(project)}
                              />
                            ))
                        }
                    </div>

                    <h3>Animations</h3>

                    <div className="sliderContainer">
                        {
                            animationProjects2020.map(project => (
                                <ProjectImage
                                key={project.id}
                                src={urlPrefix + project.cover}
                                alt={project.title}
                                onClick={() => handleImageClick(project)}
                              />
                            ))
                        }
                    </div>

                    <h4>Yrker</h4>
                    <div className="sliderContainer">
                        {
                            yrkerProjects.map(project => (
                                <ProjectImage
                                key={project.id}
                                src={urlPrefix + project.cover}
                                alt={project.title}
                                onClick={() => handleImageClick(project)}
                              />
                            ))
                        }
                    </div>

                    <h4>Fabel Detektivbyrå</h4>

                    <div className="sliderContainer">
                        {
                            fabelDetektivbyra01Projects.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                </div>
                <div className="year">
                    <div className='yearNumberContainer'>
                        <div className="yearNumber">
                            <h2 >2019</h2>
                        </div>
                    </div>
                    <h3>Animations</h3>

                    <div className="sliderContainer">
                        {
                            animationProjects2019.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                    <h4>Hej Hyper</h4>

                    <div className="sliderContainer">
                        {
                            hyperProjects.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                    <h3>Apps</h3>

                    <div className="sliderContainer">
                        {
                            appProjects2019.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                </div>
                <div className="year">
                    <div className='yearNumberContainer'>
                        <div className="yearNumber">
                            <h2 >2018</h2>
                        </div>
                    </div>
                    <h3>VR game</h3>

                    <div className="sliderContainer">
                        {
                            appProjects2018.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>


                    <h3>Books</h3>
                    <div className="sliderContainer">
                        {
                            bookProjects2018.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                </div>
                <div className="year">
                    <div className='yearNumberContainer'>
                        <div className="yearNumber">
                            <h2 >2017</h2>
                        </div>
                    </div>
                    <h3>VR game</h3>

                    <div className="sliderContainer">
                        {
                            gameProjects2017.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                    <h3>Apps</h3>

                    <div className="sliderContainer">
                        {
                            appProjects2017.map(project => (
                                <ProjectImage
                                  key={project.id}
                                  src={urlPrefix + project.cover}
                                  alt={project.title}
                                  onClick={() => handleImageClick(project)}
                                />
                            ))
                        }
                    </div>

                    <h3>Books</h3>

                    <div className="sliderContainer">
                        {
                            bookProjects2017.map(project => (
                                <ProjectImage
                                key={project.id}
                                src={urlPrefix + project.cover}
                                alt={project.title}
                                onClick={() => handleImageClick(project)}
                              />
                            ))
                        }
                    </div>
                </div>

                {
                    selectedProject && (
                        <Popup isOpen={isPopupOpen} closePopup={closePopup} content={selectedProject}/>
                    )
                }
            </div>
       
    );
}

export default Main;
