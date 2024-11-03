// import travelVideo from "../assets/videos/travel.mp4";
import { MaskVideo } from "../components/MaskVideo";
import { Swipe } from "../components/Swipe";
import "./travel.css";
import "../components/css/maskVideo.css";
export function Travel() {
  return (
    <div className="travel-container">
      <MaskVideo />

      <Swipe />
    </div>
  );
}
