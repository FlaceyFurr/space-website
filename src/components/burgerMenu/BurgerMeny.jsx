import "./style.css";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <li>
          <NavLink to="/home" className="menu__item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination" className="menu__item">
            Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew" className="menu__item">
            Crew
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology" className="menu__item">
            Technology
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
