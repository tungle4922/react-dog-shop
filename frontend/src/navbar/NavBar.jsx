import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return ( 
        <>
        <nav className="navbar">
            <Link to ="/">Home</Link>
            <Link to ="/dogs">Pets</Link>
            <Link to ="/checkout">My Cart</Link>
        </nav>
        </>
     );
}
 
export default NavBar;
