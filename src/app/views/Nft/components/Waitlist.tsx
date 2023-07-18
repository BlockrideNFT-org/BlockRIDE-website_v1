import { styled } from "twin.macro";
import { useNavigate } from "react-router-dom";

import Solana from "../../../assets/images/solana.png";
import MagicEden from "app/assets/images/magic-eden.png";

import { ReactComponent as Track } from "../../../assets/images/track.svg";
import { ReactComponent as Mint } from "app/assets/icons/mint.svg";
import { ReactComponent as Presale } from "app/assets/icons/presale.svg";
import { ReactComponent as Supply } from "app/assets/icons/supply.svg";

export default function WaitList() {
  const navigate = useNavigate();

  return (
    <Container>
      <p>
        Your ticket to ride the wild and decentralized world of{" "}
        <span>Mobility</span>
      </p>
      <p>Where the party never stops!</p>
      <button onClick={() => navigate("/join-waitlist")}>Launch App</button>
      <div className="industries_container">
        <div className="industries">
          <p>Working with the best in the industry</p>
          <div>
            <img src={Solana} alt="solana" />
            <img src={MagicEden} alt="magic-eden" />
          </div>
        </div>
      </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 76px;

  .industries_container {
    width: 100%;
    margin-top: 31px;
    @media screen and (max-width: 569px) {
      display: none;
    }
  }

  .industries {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 33px;
    background: #141414;
    border: 1px solid #ff991e;
    border-radius: 5px;
    @media screen and (max-width: 562px) {
      padding: 0;
      background: transparent;
      border: none;
    }

    img {
      @media screen and (max-width: 902px) {
        width: 100px;
      }
    }

    > p {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
    }

    > div {
      display: flex;
      gap: 35px;
    }
  }

  > p {
    font-weight: 700;
    font-size: 48px;
    letter-spacing: -1.2px;
    color: #fff;
    text-align: center;
    margin-top: -3px;

    span {
      color: #ff991e;
    }

    @media screen and (max-width: 797px) {
      font-size: 44px;
    }
    @media screen and (max-width: 450px) {
      font-size: 30px;
    }
  }

  > p:last-of-type {
    color: #9ea5ac;
    font-weight: 400;
    font-size: 18px;
    margin-top: 26px;
    text-align: center;
    @media screen and (max-width: 797px) {
      font-size: 30px;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    gap: 10px;
    margin-top: 45px;
    border-radius: 5px;
    background: linear-gradient(141deg, #ff991e 0%, #df0000 100%);
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  > svg {
    width: 100%;
    @media screen and (max-width: 797px) {
      display: none;
    }
  }

  .product {
    display: none;
    /* padding: 0 300px; */
    /* @media screen and (max-width: 817px) {
      flex-direction: column;
    } */
    /* margin-bottom: 100px; */
    margin-top: 50px;
    @media screen and (max-width: 671px) {
      display: flex;
    }

    @media screen and (max-width: 817px) {
      gap: 100px;
    }
    @media screen and (max-width: 544px) {
      gap: 50px;
    }

    @media screen and (max-width: 457px) {
      gap: 0px;
    }
    gap: 194px;
    div {
      text-align: center;
      p {
        font-weight: 500;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        padding: 0 31px;
        color: #fff;
        gap: 10px;

        span {
          font-weight: 500;
          font-size: 32px;
          @media screen and (max-width: 655px) {
            font-size: 25px;
          }
        }
      }
    }
    svg {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
