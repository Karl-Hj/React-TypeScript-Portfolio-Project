import { ImagesArray } from "./interfaces/interface";
import "./css/beachSwipe.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
export function BeachSwipe({ images }: ImagesArray) {
  const travelRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  function displayInfoBody(image: {
    destination: string;
    days: number;
    price: number;
    description: string;
  }) {
    const current = travelRef.current;
    if (current) {
      current.style.display = "block";
      const destination = current.querySelector(
        "td.destination"
      ) as HTMLTableCellElement;
      const days = current.querySelector("td.days") as HTMLTableCellElement;
      const price = current.querySelector("td.price") as HTMLTableCellElement;
      const description = current.querySelector(
        "p.description"
      ) as HTMLParagraphElement;

      if (destination) {
        destination.innerText = image.destination;
      }
      if (days) {
        days.innerText = image.days.toString();
      }
      if (price) {
        price.innerText = "$" + image.price.toString();
      }

      if (description) {
        description.innerText = image.description;
      }
    }
  }

  return (
    <>
      <div className="beach-carusal-container">
        <Slider {...settings}>
          {images.map((image) => {
            {
              console.log(image.src);
            }
            return (
              <div key={image.id}>
                <img
                  className="slides"
                  src={image.src}
                  onClick={() => displayInfoBody(image)}
                ></img>
                <div className="beach-text-container">{image.destination}</div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="travel-information" ref={travelRef}>
        <table>
          <tbody>
            <tr>
              <th>Destination:</th>
              <td className="destination"></td>
            </tr>
            <tr>
              <th>Days:</th>
              <td className="days"></td>
            </tr>
            <tr>
              <th>Price:</th>
              <td className="price">$</td>
            </tr>
          </tbody>
        </table>
        <p className="description"></p>
      </div>
    </>
  );
}
