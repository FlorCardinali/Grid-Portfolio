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
          <h3 className='about-subtitle'>Introduction</h3>
          <p>Hello! I am <span id='pinky-text'>Florencia Cardinali</span>, a developer who loves mixing logic with creativity. My passion is to create <span id='pinky-text'>beautiful interfaces</span> and immersive digital experiences.
            <br></br><br></br>
            I have experience working with modern web technologies and game development. I am <span id='pinky-text'>always learning new tools</span> to improve my work. My goal is to build projects that look <span id='pinky-text'>good and work perfectly</span>.
          </p>
        </div>

        {/* profile image */}
        <div className='image-container'>
        </div>
        <h3 className='about-subtitle skill-title'>Skills and Beliefs</h3>

        <div className='skill skill-one'>
          <h4>● Communication:</h4>
          <p>I think that the communication is the <span id='pinky-text'>key to success</span>, the <span id='pinky-text'>most powerful tool</span> to connect with people and to express ideas.</p>
        </div>
        <div className='skill skill-two'>
          <h4>● Teamwork:</h4>
          <p>I believe in the <span id='pinky-text'>power of teamwork</span> and collaboration to achieve the <span id='pinky-text'>best results</span> in the greatest and smallest projects.</p>
        </div>
        <div className='skill skill-three'>
          <h4>● Time management:</h4>
          <p>Everything that everyone does needs <span id='pinky-text'>time</span>, but the time is a limited resource. I use it very carefully to make the best use of it. I need time with my <span id='pinky-text'>family and friends</span> to recharge, time with my <span id='pinky-text'>bed</span> to rest and time to <span id='pinky-text'>work</span> to create the <span id='pinky-text'>best version of myself</span>.</p>
        </div>
        <div className='skill skill-four'>
          <h4>● Helping others:</h4>
          <p>All developers start from <span id='pinky-text'>zero</span> and be juniors, so, I am junior too, but I try to help them as much as I can, becouse I <span id='pinky-text'>value</span> the people who helped me in the past and I believe in the <span id='pinky-text'>future of the developers</span>.</p>
        </div>
        <div className='skill skill-five'>
          <h4>● Celebrate the differences</h4>
          <p>Everyone is <span id='pinky-text'>different and it is perfect</span>. I am a very <span id='pinky-text'>different person</span> as you can see, I am albino, I have a <span id='pinky-text'>partial visual disability</span> and I am fine with it. Always I find the form to <span id='pinky-text'>overcome it</span> but I am aware that not the most people can do it. All person in the world deserve <span id='pinky-text'>help</span> to be able to do it.</p>
        </div>
      </div>
    </section>

  );
};

export default AboutView;