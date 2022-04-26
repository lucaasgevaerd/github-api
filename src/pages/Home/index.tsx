import Navbar from "components/Navbar";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Navbar />
        <main>
            <section className="section-home-container">
                <h1>Desafio Github API</h1>
                <h2>Bootcamp Spring React - DevSuperior</h2>
                <Link to="/find-profile"><button type="submit" className="btn btn-primary shadow-none">Começar</button></Link>
            </section>
        </main>
        </>
    );
}

export default Home;