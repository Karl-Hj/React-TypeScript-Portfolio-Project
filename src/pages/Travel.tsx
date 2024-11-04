// import travelVideo from "../assets/videos/travel.mp4";
import { MaskVideo } from "../components/MaskVideo";
import { Beach } from "../components/Beach";
import { Swipe } from "../components/Swipe";
import "../components/css/maskVideo.css";
import { useEffect, useRef, useState } from "react";
import "./travel.css";
import "../components/css/maskVideo.css";
import "../components/css/beach.css";
export function Travel() {
  const widthRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  //Listens to window size
  useEffect(() => {
    function updateWidth() {
      if (widthRef.current) {
        setWidth(widthRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  console.log(widthRef);
  return (
    <div className="travel-container" ref={widthRef}>
      <MaskVideo />
      {width < 810 ? <Swipe /> : <Beach />}
    </div>
  );
}
