import React from 'react';
import "./AboutView.css";
interface AboutViewProps {
  onBack: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onBack }) => {
  return (
    <section id="about">
      <div className='volver'>
        <button
          onClick={onBack}
          className="home-page-buttom"
        >
          Home
        </button>
        <h1>Info</h1>
      </div>

      <div className="about-grid-layout">
        <div className='about-text'>
          <h3>Introduction</h3>
          <p>Hello! I am <span id='pinky-text'>Florencia Cardinali</span>, a developer who loves mixing logic with creativity. My passion is to create <span id='pinky-text'>beautiful interfaces</span> and immersive digital experiences.
            <br></br><br></br>
            I have experience working with modern web technologies and game development. I am <span id='pinky-text'>always learning new tools</span> to improve my work. My goal is to build projects that look <span id='pinky-text'>good and work perfectly</span>.
          </p>
        </div>

        {/* profile image */}
        <div className='image-container'>
        </div>
      </div>
    </section>

  );
};

export default AboutView;