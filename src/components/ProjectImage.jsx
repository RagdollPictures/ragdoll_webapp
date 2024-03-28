import React, { useState } from 'react';

const ProjectImage = ({ src, alt, onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);
  
    return (
      <img
        className={`coverImage ${isLoaded ? 'loaded' : ''}`}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onClick={onClick}
        width={80}
      />
    );
  };

  
export default ProjectImage;