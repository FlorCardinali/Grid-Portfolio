import "./Modulo_dos.css"

interface ModuloDosProps {
  onClick: () => void;
}

const Modulo_dos: React.FC<ModuloDosProps> = ({ onClick }) => {
  return (
    <div className="mod-2" onClick={onClick}>
      {/* SOLUCIÓN LCP: Imagen real en vez de background css */}
      <img
        src="/about-background.webp"
        alt="About me background"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
        fetchPriority="high" />

      <h2 className="relative z-10">About Me</h2>
      <p className="relative z-10">
        I am a <span className="pinky-text">University Technician in Programming</span> (UTN) passionate about Scalable Architecture and Intuitive Design.
        I combine <span className="pinky-text">creativity</span> with <span className="pinky-text">logic</span> to build <span className="pinky-text">Full Stack Web Apps</span> (React, Node.js) and <span className="pinky-text">Video Games</span> (Unity). My focus is always on writing clean code and creating meaningful experiences. I am <span className="pinky-text">proactive</span> and ready to bring ideas to life
      </p>
    </div>
  );
}

export default Modulo_dos;