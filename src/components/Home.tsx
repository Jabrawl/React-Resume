import React, { useEffect } from 'react';
import './FallingButtons.css';

const Home: React.FC = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('.falling-button');

    const animateButtons = () => {
      buttons.forEach((button) => {
        button.classList.add('fall');
      });
    };

    animateButtons();
  }, []);

  return (
    <div className="falling-buttons-container">
      <button className="falling-button">Button 1</button>
      <button className="falling-button">Button 2</button>
      <button className="falling-button">Button 3</button>
      <button className="falling-button">Button 4</button>
    </div>
  );
};

export default Home;
