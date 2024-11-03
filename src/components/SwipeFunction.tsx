import Slider from "react-slick";
import { ImagesArray } from "./interfaces/interface";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useToggle } from "./costumHooks/useToggle";

export function SwipeFunction({ images }: ImagesArray) {
  const [isActive, ToggleExpand] = useToggle(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => {
        return (
          <div className="carousel-container" key={image.id}>
            <div className="image ">
              <img src={image.src} alt={image.alt} />
            </div>

            <div className="text">
              <p className="inner-text" onClick={ToggleExpand}>
                {image.text}
              </p>
            </div>
            {isActive ? (
              <div className="expand">
                <p className="expand-text">
                  <span className="close-tag" onClick={ToggleExpand}></span>
                  {image.text}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </Slider>
  );
}
