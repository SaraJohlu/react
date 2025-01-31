import { Link } from "react-router-dom"

const NavButton = () => {
    return(
        <nav>
            <Link to="/API" className="nav-link"><button className="nav-button">Min Github</button></Link>
        </nav>
    );
};

export default NavButton