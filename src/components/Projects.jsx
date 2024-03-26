import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import "./projects.css";
import Popup from './Popup'; // Adjust this import based on your file structure
import "./popup.css";

function Main() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const urlPrefix = "https://ragdoll.pictures/ragdoll_webapp_assets/covers/";

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const fetchedProjects = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(fetchedProjects);
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
      <h2>Headline</h2>
      <div className="sliderContainer">
        {projects.map((project) => (
          <img
            className="coverImage"
            key={project.id}
            src={urlPrefix + project.cover}
            alt={project.title}
            onClick={() => handleImageClick(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <Popup
          isOpen={isPopupOpen}
          closePopup={closePopup}
          content={selectedProject}
        />
      )}
    </div>
  );
}

export default Main;
