import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <nav>
        <Link to="/counter"><button>Räknare med React</button></Link> 
        </nav>
    );
};

export default Nav