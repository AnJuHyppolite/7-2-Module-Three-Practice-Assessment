import Pokeball from "../assets/pokeball.jpeg";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="NavBarContainer">
      <NavLink to="/">
        <img src={Pokeball} alt="Pokeball" />
      </NavLink>
      <NavLink to="/pokemon">Pokemon</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/berries">Berries</NavLink>
    </nav>
  );
};

export default NavBar;
