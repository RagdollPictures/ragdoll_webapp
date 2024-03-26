import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import "./projects.css";
import Popup from './Popup';
import "./popup.css";

function Main() {
    const [projects, setProjects] = useState([]);
    const [animationProjects2024, setAnimationProjects2024] = useState([]); // Updated for 2024 Animation projects
    const [appProjects2024, setAppProjects2024] = useState([]); // Updated for 2024 Animation projects
    
    const [mattemagiskProjects, setMattemagiskProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
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

            // Query for 2024 Animation projects
            const appProjects2024Query = query(
              collection(db, "projects"),
              where("year", "==", "2024"),
              where("category", "==", "app")
          );
          const appProjects2024Snapshot = await getDocs(appProjects2024Query);
          setAppProjects2024(appProjects2024Snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
          })));

            // Query for Mattemagisk projects remains unchanged
            const mattemagiskQuery = query(
                collection(db, "projects"),
                where("category", "==", "Mattemagisk")
            );
            const mattemagiskSnapshot = await getDocs(mattemagiskQuery);
            setMattemagiskProjects(mattemagiskSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
        };

        fetchProjects();
    }, []);

    const handleImageClick = (project) => {
        setSelectedProject(project);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="wrap">
            {/* 2024 Animation slider */}
            <h2>2024</h2>
            <h3>Animations</h3>
            <div className="sliderContainer">
                {animationProjects2024.map(project => (
                    <img
                        className="coverImage"
                        key={project.id}
                        src={urlPrefix + project.cover}
                        alt={project.title}
                        onClick={() => handleImageClick(project)}
                    />
                ))}
            </div>

            <h3>Apps</h3>
            <div className="sliderContainer">
                {appProjects2024.map(project => (
                    <img
                        className="coverImage"
                        key={project.id}
                        src={urlPrefix + project.cover}
                        alt={project.title}
                        onClick={() => handleImageClick(project)}
                    />
                ))}
            </div>

           <hr/>
            <h2>2023</h2>
            <h3>Animations</h3>
            <h4>Mattemagisk</h4>
            <div className="sliderContainer">
                {mattemagiskProjects.map(project => (
                    <img
                        className="coverImage"
                        key={project.id}
                        src={urlPrefix + project.cover}
                        alt={project.title}
                        onClick={() => handleImageClick(project)}
                    />
                ))}
            </div>

            {/* General projects slider */}
            <h2>Headline</h2>
            <div className="sliderContainer">
                {projects.map(project => (
                    <img
                        className="coverImage"
                        key={project.id}
                        src={urlPrefix + project.cover}
                        alt={project.title}
                        onClick={() => handleImageClick(project)}
                    />
                ))}
            </div>

            {/* Popup for selected project */}
            {selectedProject && (
                <Popup isOpen={isPopupOpen} closePopup={closePopup} content={selectedProject}/>
            )}
        </div>
    );
}

export default Main;
