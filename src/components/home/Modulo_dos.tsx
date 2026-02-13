import "./Modulo_dos.css"

interface ModuloDosProps {
  onClick: () => void;
}

const Modulo_dos: React.FC<ModuloDosProps> = ({ onClick }) => {
  return (
    <div className="mod-2" onClick={onClick}>
      <img
        src="/about-background.webp"
        alt="About me background"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
        fetchPriority="high"
      />

      <h2 className="relative z-10">About Me</h2>
      <p className="relative z-10">
        I am a <span>University Technician in Programming</span> (UTN) passionate about Scalable Architecture and Intuitive Design.
        I combine <span>creativity</span> with <span>logic</span> to build <span>Full Stack Web Apps</span> (React, Node.js) and <span>Video Games</span> (Unity). My focus is always on writing clean code and creating meaningful experiences. I am <span>proactive</span> and ready to bring ideas to life
      </p>
    </div>
  );
}

export default Modulo_dos;