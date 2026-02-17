import "./Studies.css";
import Aurora from "../Aurora.tsx";
interface AboutViewProps {
    onBack: () => void;
}

const Studies: React.FC<AboutViewProps> = ({ onBack }) => {
    return (
        <section className="studies">
            <Aurora />
            <nav className='volver'>
                <button
                    onClick={onBack}
                    className="home-page-buttom"
                >
                    Home
                </button>
                <h1>Studies</h1>
            </nav>

            <h2 className="studies-title">Formal Education</h2>

            <div className="timeline-container">
                <div className="timeline-line"></div>

                {/* UPSO */}
                <div className="timeline-item branch-left">
                    <div className="timeline-dot"></div>
                    <div className="study-card animate-enter">

                        <h3 className="university-title">Technician in Design and Development of Video Games</h3>
                        <p className="university-name">Universidad Provincial del Sud Oeste</p>
                        <div className="date-status-card">
                            <p className="university-date">2025 - 2027</p>
                            <span className="status-tag">En curso</span>
                        </div>
                        <p className="university-description">
                            Game design  <span className="pinky-text"> ♦ </span>  Game development in Godot, Ren'py & Unity  <span className="pinky-text"> ♦ </span>  Game art 2D & 3D <span className="pinky-text"> ♦ </span> Game animation <span className="pinky-text"> ♦ </span> Game narrative <span className="pinky-text"> ♦ </span> Game sound design
                        </p>
                    </div>
                </div>
                <div className="timeline-item branch-right">
                    <div className="timeline-dot"></div>
                    <div className="study-card course-card animate-enter">
                        <h3 className="university-title">Art 3D for Video Games</h3>
                        <p className="university-name">Institute Cesar Milstein</p>
                        <div className="date-status-card">
                            <p className="university-date">2024</p>
                            <span className="status-tag">Completed</span>
                        </div>
                        <p className="course-description">
                            Voxel art, Blockbench <span className="pinky-text">♦</span> Mixamo & AI generative art <span className="pinky-text">♦</span> 3D modeling, MagicaVoxel <span className="pinky-text">♦</span> Character design
                        </p>
                    </div>
                </div>
                <div className="timeline-item branch-right">
                    <div className="timeline-dot"></div>
                    <div className="study-card course-card animate-enter">
                        <h3 className="university-title">Introduction to Programming</h3>
                        <p className="university-name">Fundaula Accenture</p>
                        <div className="date-status-card">
                            <p className="university-date">2023</p>
                            <span className="status-tag">Completed</span>
                        </div>
                        <p className="course-description">
                            Intrudction to Object Oriented Programming <span className="pinky-text">♦</span> Logic of Programming <span className="pinky-text">♦</span> Javascript
                        </p>
                    </div>
                </div>

                {/* UTN */}
                <div className="timeline-item branch-left">
                    <div className="timeline-dot"></div>
                    <div className="study-card animate-enter">
                        <h3 className="university-title">University Technician in Programming</h3>
                        <p className="university-name">Universidad Tecnológica Nacional</p>
                        <div className="date-status-card">
                            <p className="university-date">2022 - 2024</p>
                            <span className="status-tag">cursed 100% - requires an internship</span>
                        </div>
                        <p className="university-description">
                            Programming logic with C++ & Python <span className="pinky-text">♦</span> Object oriented programming with Java <span className="pinky-text">♦</span> Data structures & SOLID<span className="pinky-text">♦</span> Computer Architecture & Operating Systems <span className="pinky-text">♦</span> Databases with SQL<span className="pinky-text">♦</span> Web development, HTML, CSS, Javascript, Java with Spring Boot, Express & Node.js <span className="pinky-text">♦</span> Mobile development, Flutter, Java with Android Studio <span className="pinky-text">♦</span> Quality assurance <span className="pinky-text">♦</span> Project management, Scrum, Agile, Trello, Jira
                        </p>
                    </div>
                </div>
                <div className="timeline-item branch-right">
                    <div className="timeline-dot"></div>
                    <div className="study-card course-card animate-enter">
                        <h3 className="university-title">Argentina Programa 4.0</h3>
                        <p className="university-name">Ministerio de Desarrollo Productivo de la Nación</p>
                        <div className="date-status-card">
                            <p className="university-date">2020</p>
                            <span className="status-tag">Completed</span>
                        </div>
                        <p className="course-description">
                            Logic of Programming <span className="pinky-text">♦</span> Javascript, Python, Ruby <span className="pinky-text">♦</span> Bootstrap, HTML, CSS <span className="pinky-text">♦</span> Git, Github <span className="pinky-text">♦</span> Express, Node.js <br />
                        </p>
                    </div>
                </div>
                {/* Secundaria */}
                <div className="timeline-item branch-left">
                    <div className="timeline-dot"></div>
                    <div className="study-card animate-enter">
                        <h3 className="university-title">High School - Bachiller en Ciencias Naturales</h3>
                        <p className="university-name">Escuela Media nro 3 "Almafuerte" - Escuela "La Asuncion" - Escuela "San Francisco de Asis" - Instituto "Fortin Pavon"</p>
                        <div className="date-status-card">
                            <p className="university-date">2010 - 2015</p>
                            <span className="status-tag">Graduated - 7.41</span>
                        </div>
                        <p className="university-description">
                            Two yeas as assistant in the computer lab <span className="pinky-text">♦</span> Selected to make the model of the school's mural <span className="pinky-text">♦</span> No repeated years.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Studies;
