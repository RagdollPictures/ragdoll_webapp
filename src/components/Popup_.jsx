import React from 'react';
import "./popup.css";

const Popup = ({ isOpen, closePopup, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={closePopup}>
      <div style={styles.popup} onClick={e => e.stopPropagation()}>
        {children}
        <button style={styles.closeButton} onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

const styles = {
    
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'fadeIn 0.1s',
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    
    borderRadius: '5px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    marginTop: '10px',
  }
};

export default Popup;
