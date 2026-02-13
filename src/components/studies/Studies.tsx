import "./Studies.css";
interface AboutViewProps {
    onBack: () => void;
}

export const Studies: React.FC<AboutViewProps> = ({ onBack }) => {
    return (
        <section className="studies-container">
            <div className="volver">
                <button
                    onClick={onBack}
                    className="home-page-buttom"
                >
                    Home
                </button>
                <span>Studies</span>
            </div>
            <div className="studies-content">

                <div className="studies-item">
                    <h3 className="university-title">Technician in Design and Development of Video Games</h3>
                    <p className="university-name">Universidad Provincial del Sud Oeste</p>
                    <p className="university-date">2025 - 2027</p>
                    <p className="university-status">En curso</p>
                    <p className="university-description">I am currently studying to become a game designer and developer. I am learning about game design, game development, and game programming. I am also learning about game art, game animation, game narrative and game sound design.</p>
                </div>
                <div className="studies-item">
                    <h3 className="university-title">University Techanician in Programming</h3>
                    <p className="university-name">Universidad Tecnologica Nacional</p>
                    <p className="university-date">2022 - 2024</p>
                    <p className="university-status">cursed 100% - requires an internship to graduate</p>
                    <p className="university-description">I am a technician in programming with 100% of the subjects cursed and only an internship required to graduate. I have a strong foundation in programming and software development, with experience in various programming languages and technologies. I am a quick learner and a team player.</p>
                </div>
                <div className="studies-item">
                    <h3 className="university-title">High School - Bachiller en Ciencias Naturales</h3>
                    <p className="university-name">Escuela Media nro 3 "Almafuerte" - Escuela "La Asuncion" - Escuela "San Francisco de Asis" - Instituto "Fortin Pavon"</p>
                    <p className="university-date">2010 - 2015</p>
                    <p className="university-status">Graduated - 7.41</p>
                    <p className="university-description">My last two years I was an assistant in the computer lab, helping teachers and students with any computer-related issues. </p>
                </div>
            </div>
        </section>
    );
};
export default Studies;