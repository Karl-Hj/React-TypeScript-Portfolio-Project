import { Home } from "../pages/Home";
import { Travel } from "../pages/Travel";

import "./container.css";

//Conteiner function that contains and loads all pages
export function Container() {
  return (
    <div className="container">
      <Home />
      <Travel />
    </div>
  );
}
