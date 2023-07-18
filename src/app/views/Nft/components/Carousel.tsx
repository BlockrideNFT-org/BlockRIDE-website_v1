import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../components/carousel.css";
import "../components/carouselTheme.css";

import { ReactComponent as Next } from "app/assets/icons/next.svg";
import { ReactComponent as Previous } from "app/assets/icons/previous.svg";
import { ReactComponent as Mint } from "app/assets/icons/mint.svg";
import { ReactComponent as Presale } from "app/assets/icons/presale.svg";
import { ReactComponent as Supply } from "app/assets/icons/supply.svg";

import Rider from "app/assets/images/rider.png";
import { styled } from "twin.macro";

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
    <Container tw="m-auto">
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
      <div className="product">
        <div>
          <Mint />
          <p>
            Mint PRICE <span>TBD</span>
          </p>
        </div>
        <div>
          <Presale />
          <p>
            Total supply <span>5,555</span>
          </p>
        </div>
        <div>
          <Supply />
          <p>
            Presale date <span>TBD</span>
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 100px;
  border-radius: 20px;
  background: linear-gradient(180deg, #ff991e 0%, rgba(223, 0, 0, 0) 100%);
  display: flex;

  @media screen and (max-width: 829px) {
    flex-direction: column;
    padding-top: 50px;
  }

  gap: 50px;

  .product {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 829px) {
      flex-direction: row;
    }
    /* padding: 0 300px; */
    /* @media screen and (max-width: 817px) {
      flex-direction: column;
    } */
    padding: 90px 0;

    @media screen and (max-width: 655px) {
      gap: 0;
      margin-bottom: 50px;
    }
    gap: 50px;
    div {
      color: #fff;
      text-align: center;
      p {
        font-weight: 500;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        padding: 0 31px;
        justify-content: center;

        span {
          font-weight: 500;
          font-size: 32px;
          text-align: center;
          @media screen and (max-width: 655px) {
            font-size: 25px;
          }
        }
      }
    }
    svg {
      width: 100%;
    }
  }

  @media screen and (max-width: 671px) {
    display: none;
  }
`;
