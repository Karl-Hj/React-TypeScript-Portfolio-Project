import { Outlet } from "react-router-dom";
import { useToggle } from "./costumHooks/useToggle";
import "./css/navBar.css";

//Navbar that also loads in the container page

export function Navbar() {
  const [isActive, ToggleDropdown] = useToggle(false);

  const dropDown = isActive ? "main-nav__item active" : "main-nav__item";

  return (
    <>
      <header className="main-header">
        <nav className="main-nav">
          <ul className="main-nav__items ">
            <li className={dropDown}>test1</li>
            <li className={dropDown}>test2</li>
            <li className={dropDown}>test3</li>
            <li className="main-nav__menu-icon" onClick={ToggleDropdown}>
              <span className="main-nav__icon-bars"></span>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
