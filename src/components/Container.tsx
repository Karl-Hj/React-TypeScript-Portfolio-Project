import { Home } from "../pages/Home";
import { Hotels } from "../pages/Hotels";
import "./container.css";

//Conteiner function that contains and loads all pages
export function Container() {
  return (
    <div className="container">
      <Home />
      <Hotels />
    </div>
  );
}
