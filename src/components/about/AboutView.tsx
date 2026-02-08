import React from 'react';
import "./AboutView.css";
interface AboutViewProps {
  onBack: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onBack }) => {
  return (
    <div className="about-layout">
        <button 
          onClick={onBack}
          className="home-page-buttom"
        >
          ← Home
        </button>

      <section>
        <h1>About Me Section</h1>
        <p>
          Hello! I am <span>Florencia Cardinali</span>, a developer who loves mixing logic with creativity. My passion is to create beautiful interfaces and immersive digital experiences.

          I have experience working with modern web technologies and game development. I am always learning new tools to improve my work. My goal is to build projects that look good and work perfectly.
        </p>
      </section>
      
      <img src="" alt="" />

    

    </div>
  );
};

export default AboutView;