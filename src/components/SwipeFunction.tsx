import { useState } from "react";
import { ImagesArray } from "./interfaces/interface";

export function SwipeFunction({ images }: ImagesArray) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="images-container">
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
    </div>
  );
}
