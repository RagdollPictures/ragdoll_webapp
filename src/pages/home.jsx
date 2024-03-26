import React, { useState } from 'react';
import Projects from "../components/Projects";
import Popup from '../components/Popup';
import AddProjectForm from '../components/AddProjectForm';
import "./home.css";
import Header from '../components/header';

const Home = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const togglePopup = () => setIsPopupOpen(!isPopupOpen);
  
    return (
      <div>

        <Header />
        <Popup isOpen={isPopupOpen} closePopup={togglePopup}></Popup>

        <Projects/>
      </div>
    );
  };
  
  export default Home;
