import { styled } from "twin.macro";

import { ReactComponent as Track } from "../../../assets/images/track.svg";

export default function TopSection() {
  return (
    <Container>
      <div className="top">
        <h4>NFT beyond speculation</h4>
        <p>- invest in RWA not tokens</p>
      </div>
      <Track />
      <div className="hear">
        <h4>Hear me out</h4>
        <div>
          <p>
            Blockride is transforming the investment landscape by leveraging
            NFTs, or digital collectibles, to revolutionize fractionalized fleet
            ownership. Our platform empowers investors to own a portion of
            fleets of vehicles, such as Bus, Trains and Trams, without the
            traditional barriers to entry associated with physical ownership.
          </p>
          <p>
            Investors face challenges finding exceptional companies to invest in
            and navigating unpredictable investment returns. Diversification is
            also difficult, and opportunities can easily slip away. Blockride
            offers a new investment approach based on an entrepreneurial
            ecosystem where investors own a stake in businesses they believe in,
            with less investment risk, greater diversity, and comprehensive due
            diligence.
          </p>
          <p>
            Our NFT-powered platform pegs digital collectibles to real-world
            assets, providing a more tangible basis for valuation and
            eliminating the speculative hype that has characterized the NFT
            market in the past. This approach instills investor confidence in
            the value of their investments and creates a transparent and secure
            marketplace for NFT trading.
          </p>
          <p>
            Investors can choose their level of risk and control their returns,
            whether they prefer an active or passive investment approach. Our
            common currency facilitates value exchange between members, and our
            platform tracks key business indicators and provides data-driven
            insights for informed decision-making.
          </p>
          <p>
            Blockride aims to create a more inclusive and accessible investment
            ecosystem, democratizing ownership of valuable assets like fleets of
            vehicles.
          </p>
          <p>
            Our innovative investment approach has the potential to transform
            the way we think about ownership and investment. Join us on this
            exciting journey by signing up for our waitlist today.
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .top {
    color: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 797px) {
      margin-bottom: 70px;
    }

    h4 {
      font-weight: 500;
      font-size: 64px;
      @media screen and (max-width: 743px) {
        font-size: 40px;
      }

      @media screen and (max-width: 454px) {
        font-size: 30px;
      }
    }

    p {
      font-weight: 500;
      font-size: 48px;

      @media screen and (max-width: 743px) {
        font-size: 30px;
      }
    }
  }
  svg {
    width: 100%;
    @media screen and (max-width: 797px) {
      display: none;
    }
  }

  .hear {
    color: #f1f1f1;
    h4 {
      font-weight: 500;
      font-size: 80px;
      text-align: center;
      margin-bottom: 119px;

      @media screen and (max-width: 797px) {
        margin-bottom: 50px;
      }
      @media screen and (max-width: 743px) {
        font-size: 60px;
      }

      @media screen and (max-width: 454px) {
        font-size: 40px;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 60px;
      p {
        text-align: center;
        width: 729px;
        font-weight: 400;
        font-size: 20px;

        @media screen and (max-width: 736px) {
          width: 100%;
        }
      }
    }
  }
`;
