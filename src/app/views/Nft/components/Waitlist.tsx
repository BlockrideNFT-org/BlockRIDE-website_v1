import { styled } from "twin.macro";

import { ReactComponent as Track } from "../../../assets/images/track.svg";
import { ReactComponent as Mint } from "app/assets/icons/mint.svg";
import { ReactComponent as Presale } from "app/assets/icons/presale.svg";
import { ReactComponent as Supply } from "app/assets/icons/supply.svg";

export default function WaitList() {
  return (
    <Container>
      <p>Your ticket to ride the wild and decentralized world of Mobility</p>
      <p>- where the party never stops!</p>
      <button>Join Waitlist</button>
      <Track />
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

  p {
    font-weight: 500;
    font-size: 64px;
    color: #fff;
    text-align: center;
    @media screen and (max-width: 797px) {
      font-size: 44px;
    }
    @media screen and (max-width: 450px) {
      font-size: 30px;
    }
  }

  p:last-of-type {
    font-weight: 500;
    font-size: 48px;
    margin-top: 20px;
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
    padding: 20px 30px;
    gap: 10px;
    background: #ffffff;
    border-radius: 6px;
    font-weight: 500;
    font-size: 32px;
    margin-top: 74px;
    margin-bottom: 70px;
  }

  > svg {
    width: 100%;
    @media screen and (max-width: 797px) {
      display: none;
    }
  }

  .product {
    display: flex;
    /* padding: 0 300px; */
    /* @media screen and (max-width: 817px) {
      flex-direction: column;
    } */
    margin-bottom: 100px;

    @media screen and (max-width: 817px) {
      gap: 100px;
    }
    @media screen and (max-width: 655px) {
      gap: 50px;
      margin-bottom: 50px;
    }
    @media screen and (max-width: 510px) {
      flex-direction: column;
    }
    gap: 194px;
    div {
      p {
        font-weight: 500;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        padding: 0 31px;

        span {
          font-weight: 500;
          font-size: 32px;
        }
      }
    }
    svg {
      width: 100%;
    }
  }
`;
