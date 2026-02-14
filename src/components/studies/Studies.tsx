import "./Studies.css";

interface AboutViewProps {
    onBack: () => void;
}

const Studies: React.FC<AboutViewProps> = ({ onBack }) => {
    return (
        <section className="studies">
            <div className="aurora-container">
                <div className="aurora-blob aurora-1"></div>
                <div className="aurora-blob aurora-2"></div>
                <div className="aurora-blob aurora-3"></div>
            </div>
            <nav className="volver">
                <button onClick={onBack} className="home-page-buttom">Home</button>
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
                        <p className="university-date">2025 - 2027</p>
                        <span className="status-tag">En curso</span>
                        <p className="university-description">
                            ♦ Game design <br />
                            ♦ Game development in Godot, Ren'py & Unity  <br />
                            ♦ Game art 2D & 3D <br />
                            ♦ Game animation <br />
                            ♦ Game narrative <br />
                            ♦ Game sound design <br />
                        </p>
                    </div>
                </div>
                <div className="timeline-item branch-right">
                    <div className="timeline-dot"></div>
                    <div className="study-card course-card animate-enter">
                        <h3 className="university-title">Art 3D for Video Games</h3>
                        <p className="university-name">Institute Cesar Milstein</p>
                        <p className="university-date">2024</p>
                        <span className="status-tag">Completed</span>
                        <p className="course-description">
                            ♦ Voxel art, Blockbench <br />
                            ♦ Mixamo & AI generative art <br />
                            ♦ 3D modeling, MagicaVoxel <br />
                            ♦ Character design <br />
                        </p>
                    </div>
                </div>
                <div className="timeline-item branch-right">
                    <div className="timeline-dot"></div>
                    <div className="study-card course-card animate-enter">
                        <h3 className="university-title">Introduction to Programming</h3>
                        <p className="university-name">Fundaula Accenture</p>
                        <p className="university-date">2023</p>
                        <span className="status-tag">Completed</span>
                        <p className="course-description">
                            ♦ Intrudction to Object Oriented Programming <br />
                            ♦ Logic of Programming <br />
                            ♦ Javascript <br />
                        </p>
                    </div>
                </div>

                {/* UTN */}
                <div className="timeline-item branch-left">
                    <div className="timeline-dot"></div>
                    <div className="study-card animate-enter">
                        <h3 className="university-title">University Technician in Programming</h3>
                        <p className="university-name">Universidad Tecnológica Nacional</p>
                        <p className="university-date">2022 - 2024</p>
                        <span className="status-tag">cursed 100% - requires an internship to graduate</span>
                        <p className="university-description">
                            ♦ Programming logic with C++ & Python <br />
                            ♦ Object oriented programming with Java <br />
                            ♦ Data structures & SOLID<br />
                            ♦ Computer Architecture & Operating Systems <br />
                            ♦ Databases with SQL<br />
                            ♦ Web development, HTML, CSS, Javascript, Java with Spring Boot, Express & Node.js <br />
                            ♦ Mobile development, Flutter, Java with Android Studio <br />
                            ♦ Quality assurance <br />
                            ♦ Project management, Scrum, Agile, Trello, Jira <br />
                        </p>
                    </div>
                </div>
                <div className="timeline-item branch-right">
                    <div className="timeline-dot"></div>
                    <div className="study-card course-card animate-enter">
                        <h3 className="university-title">Argentina Programa 4.0</h3>
                        <p className="university-name">Ministerio de Desarrollo Productivo de la Nación</p>
                        <p className="university-date">2020</p>
                        <span className="status-tag">Completed</span>
                        <p className="course-description">
                            ♦ Logic of Programming <br />
                            ♦ Javascript, Python, Ruby <br />
                            ♦ Bootstrap, HTML, CSS <br />
                            ♦ Git, Github <br />
                            ♦ Express, Node.js <br />
                        </p>
                    </div>
                </div>
                {/* Secundaria */}
                <div className="timeline-item branch-left">
                    <div className="timeline-dot"></div>
                    <div className="study-card animate-enter">
                        <h3 className="university-title">High School - Bachiller en Ciencias Naturales</h3>
                        <p className="university-name">Escuela Media nro 3 "Almafuerte" - Escuela "La Asuncion" - Escuela "San Francisco de Asis" - Instituto "Fortin Pavon"</p>
                        <p className="university-date">03/2010 - 12/2015</p>
                        <span className="status-tag">Graduated - 7.41</span>
                        <p className="university-description">
                            ♦ Two yeas as assistant in the computer lab
                            <br />
                            ♦ Selected to make the model of the school's mural.
                            ♦ No repeated years.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Studies;
