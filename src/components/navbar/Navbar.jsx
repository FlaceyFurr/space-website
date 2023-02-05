import "./style.css";
import logo from "./../../images/header/logo.svg";

import { NavLink } from "react-router-dom";
import BurgerMenu from "../burgerMenu/BurgerMeny";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link_active barlow-condensed";
  const normalLink = "nav-list__link barlow-condensed";

  return (
    <nav className="nav">
      <NavLink to="/home" className="nav__logo">
        <img src={logo} alt="logo" />
      </NavLink>
      <hr className="nav__line" />
      <ul className="nav-list">
        <li className="nav-list__item">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <span className="bold">00</span> home
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <span className="bold">01</span> destination
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <span className="bold">02</span> crew
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <span className="bold">03</span> technology
          </NavLink>
        </li>
      </ul>
      <div className="blur"></div>

      <BurgerMenu />
    </nav>
  );
};

export default Navbar;
