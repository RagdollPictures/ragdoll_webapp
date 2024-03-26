import React, { useState } from 'react';
import Projects from "../components/Projects";
import Popup from '../components/Popup';
import AddProjectForm from '../components/AddProjectForm';
import "./home.css";

const Home = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const togglePopup = () => setIsPopupOpen(!isPopupOpen);
  
    return (
      <div>

        <AddProjectForm/>

        <button onClick={togglePopup}>Show Popup</button>
        <Popup isOpen={isPopupOpen} closePopup={togglePopup}>

          <p>This is the popup content!</p>
          
        </Popup>

        <Projects/>
      </div>
    );
  };
  
  export default Home;
