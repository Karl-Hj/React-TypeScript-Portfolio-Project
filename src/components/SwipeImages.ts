import img1 from "../assets/images/swipe/1.jpg";
import img2 from "../assets/images/swipe/2.jpg";
import img3 from "../assets/images/swipe/3.jpg";
import img4 from "../assets/images/swipe/4.jpg";
import img5 from "../assets/images/swipe/5.jpg";
import img6 from "../assets/images/swipe/6.jpg";

//Interface for images and text
export interface SwipeElements {
  id: number;
  src: string;
  alt: string;
  text: string;
}

export const Images: SwipeElements[] = [
  {
    id: 1,
    src: img1,
    alt: "Random travel picture",
    text: "test",
  },
  {
    id: 2,
    src: img2,
    alt: "Random travel picture",
    text: "test",
  },
  {
    id: 3,
    src: img3,
    alt: "Random travel picture",
    text: "picture",
  },
  {
    id: 4,
    src: img4,
    alt: "Random travel picture",
    text: "picture",
  },
  {
    id: 5,
    src: img5,
    alt: "Random travel picture",
    text: "picture",
  },
  {
    id: 6,
    src: img6,
    alt: "Random travel picture",
    text: "picture",
  },
];
