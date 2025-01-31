
import { Link } from "react-router-dom";
import NavButton from "./NavButton"

const Nav = () => {
  return (
      <nav className="navlist">
        <NavButton />
        <button className="nav-button"><Link to="/counter" className="nav-link">Räknare med React</Link></button>
        <button className="nav-button"><Link to="/UseEffect" className="nav-link">useEffect</Link></button>
        
      </nav>

  );
};

export default Nav;
