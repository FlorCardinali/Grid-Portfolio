import "./Modulo_tres.css";

interface ModuloTresProps {
    onClick?: () => void;
}

const Modulo_tres = ({ onClick }: ModuloTresProps) => {
    return (
        <div className="mod-3" onClick={onClick}>
            <div className="liquid-wave wave-1"></div>
            <div className="liquid-wave wave-2"></div>
            <div className="liquid-wave wave-3"></div>
            <h2 >Studies and Certifications</h2>
        </div>
    );
}

export default Modulo_tres;