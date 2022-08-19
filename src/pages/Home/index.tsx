import Navbar from "components/Navbar";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Navbar />
        <main>
            <section className="section-home-container">
                <h2>Buscar usuário no Github</h2>
                <Link to="/find-profile"><button type="submit" className="btn btn-primary shadow-none">Iniciar</button></Link>
            </section>
        </main>
        </>
    );
}

export default Home;