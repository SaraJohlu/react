
import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <nav className="navlist">
        <button className="nav-button"><Link to="/counter" className="nav-link">Räknare med React</Link></button>
        
      </nav>

  );
};

export default Nav;
