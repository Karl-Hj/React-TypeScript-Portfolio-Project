import "./swipe.css";
import { Images as SwipeImages } from "./SwipeImages"; //Contains array with img and interface

// Controls the swipe funtion on the travel page
export function Swipe() {
  //Settings for slick-slide carousel

  return (
    <div className="swipe-container">
      {SwipeImages.map((image) => {
        return (
          <div className="image" key={image.id}>
            <img src={image.src} alt={image.alt}></img>
            <div className="text">
              <p>{image.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
