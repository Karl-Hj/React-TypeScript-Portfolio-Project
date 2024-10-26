import { Outlet } from "react-router-dom";
import "./navBar.css";

//Navbar that also loads in the container page

export function Navbar() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
