import TravelVideo from "../assets/videos/travel.mp4";
import "./maskVideo.css";

export function MaskVideo() {
  return (
    <div className="mask-video__container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="mask-video"
      >
        <defs>
          <mask x="0" y="0" id="mask" width="100%" height="100%">
            <rect width="100%" height="100%" />
            <text className="travel-text" x="50" y="50" textAnchor="middle">
              Travel
            </text>
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" />
      </svg>
      <video className="travel-video" autoPlay loop>
        <source src={TravelVideo} type="video/mp4" />
      </video>
    </div>
  );
}
