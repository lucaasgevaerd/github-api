import './style.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary nav-container">
      <NavLink to="/"><h2>Github API</h2></NavLink>
    </nav>
  );
};

export default Navbar;
