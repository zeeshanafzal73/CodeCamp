import React from 'react';
import './MemeGenerator.css'; // Import your CSS file

export default function Header() {
  return (
    <header className="header-container"> {/* Added a class name */}
      <img
        src="https://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="problem"
        className="header-image" // Added a class name
      />
      <p className="header-text">MemeGenerator</p> {/* Added a class name */}
    </header>
  );
}
