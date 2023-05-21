import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../components/carousel.css";
import "../components/carouselTheme.css";

import { ReactComponent as Next } from "app/assets/icons/next.svg";
import { ReactComponent as Previous } from "app/assets/icons/previous.svg";

import Rider from "app/assets/images/rider.png";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Previous />,
  };

  return (
    <div tw="m-auto">
      <Slider {...settings}>
        <div tw="text-[#fff]">
          <img src={Rider} alt="rider" />
        </div>
        <div tw="text-[#fff]">
          <img src={Rider} alt="rider" />
        </div>
        <div tw="text-[#fff]">
          <img src={Rider} alt="rider" />
        </div>
      </Slider>
    </div>
  );
}