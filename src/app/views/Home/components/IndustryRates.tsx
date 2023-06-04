import { styled } from "twin.macro";

import Solana from "../../../assets/images/solana.png";
import MagicEden from "app/assets/images/magic-eden.png";
import Chart from "app/assets/images/chart.png";
import Ticket from "app/assets/images/ticket.png";
import Income from "app/assets/images/income.png";
import Trade from "app/assets/images/trade.png";
import AuthScreen from "app/assets/images/auth-screen.png";
import Riders from "app/assets/images/riders.png";
import Disclosure from "app/components/Disclosure";

export default function IndustryRates() {
  return (
    <Container>
      <div className="header">
        <p>Working with the best in the industry</p>
        <div>
          <img src={Solana} alt="solana" />
          <img src={MagicEden} alt="magic-eden" />
        </div>
      </div>
      <div className="desktop">
        <div className="grid">
          <img src={Chart} alt="chart" />
          <div>
            <h4>Fleet Management Console</h4>
            <p>
              We provide holders with easy access to important data and insights
              related to their ownership. From mileage, maintenance records and
              vehicle health to revenue and income reports, our dashboard puts
              all the essential information at your fingertips. With a
              user-friendly interface and real-time data, you can stay informed
              and make informed decisions about your fractional ownership of the
              bus.
            </p>
          </div>
        </div>
        <div className="grid">
          <div>
            <h4>Own a piece for as little as $50</h4>
            <p>
              Invest in tangible assets with real growth potential and become a
              fleet owner with a minimum of $50. Fractional ownership is a
              viable option for those who lack the capital to purchase a vehicle
              outright, and with our seamless and accessible platform, anyone
              can invest in fleet vehicles from anywhere and at any time without
              limitations.
            </p>
          </div>
          <img src={Ticket} alt="ticket" />
        </div>
        <div className="grid">
          <img src={Income} alt="income" />
          <div>
            <h4>Invest in bus fleets securely and remotely</h4>
            <p>
              Tokenized bus fleets through STOs offered on our platform.
              Investors can benefit from increased liquidity in DeFi, while
              returns on the underlying assets will be tied to traditional
              finance. Our goal is to create a secure and accessible investment
              opportunity.
            </p>
          </div>
        </div>
        <div className="grid">
          <div>
            <h4>Receive daily pay-outs</h4>
            <p>
              Receive daily pay-outs directly to your wallets in $USDC, a
              stablecoin that is pegged to the value of the US dollar. This
              ensures that our investors receive their earnings in a stable and
              secure currency that is widely accepted in the digital asset
              market.
            </p>
          </div>
          <img src={Trade} alt="Trade" />
        </div>
      </div>

      <div className="mobile">
        <div className="grid">
          <img src={Chart} alt="chart" />
          <div>
            <h4>Fleet Management Console</h4>
            <p>
              We provide holders with easy access to important data and insights
              related to their ownership. From mileage, maintenance records and
              vehicle health to revenue and income reports, our dashboard puts
              all the essential information at your fingertips. With a
              user-friendly interface and real-time data, you can stay informed
              and make informed decisions about your fractional ownership of the
              bus.
            </p>
          </div>
        </div>
        <div className="grid">
          <img src={Ticket} alt="ticket" />
          <div>
            <h4>Own a piece for as little as $50</h4>
            <p>
              Invest in tangible assets with real growth potential and become a
              fleet owner with a minimum of $50. Fractional ownership is a
              viable option for those who lack the capital to purchase a vehicle
              outright, and with our seamless and accessible platform, anyone
              can invest in fleet vehicles from anywhere and at any time without
              limitations.
            </p>
          </div>
        </div>
        <div className="grid">
          <img src={Income} alt="income" />
          <div>
            <h4>Invest in bus fleets securely and remotely</h4>
            <p>
              Tokenized bus fleets through STOs offered on our platform.
              Investors can benefit from increased liquidity in DeFi, while
              returns on the underlying assets will be tied to traditional
              finance. Our goal is to create a secure and accessible investment
              opportunity.
            </p>
          </div>
        </div>
        <div className="grid">
          <img src={Trade} alt="Trade" />
          <div>
            <h4>Receive daily pay-outs</h4>
            <p>
              Receive daily pay-outs directly to your wallets in $USDC, a
              stablecoin that is pegged to the value of the US dollar. This
              ensures that our investors receive their earnings in a stable and
              secure currency that is widely accepted in the digital asset
              market.
            </p>
          </div>
        </div>
      </div>
      <div className="dashboard">
        <h4>One Dashboard</h4>
        <div className="main">
          <div className="row-left">
            <div>
              <span>1</span>
              <p>Connect with your preferred funded Solana wallet</p>
            </div>
            <div>
              <span>2</span>
              <p>Explore and buy into fractionalized fleet of your choice</p>
            </div>

            <div>
              <span>3</span>
              <p>Seamlessly swap or sell your holdings</p>
            </div>

            <div>
              <span>4</span>
              <p>Take control of all your assets from a single dashboard</p>
            </div>
          </div>
          <img src={AuthScreen} alt="blockride" />
        </div>
      </div>

      <div className="community">
        <div className="row-left">
          <p>Join the community. You don’t want to miss this.</p>
          <button>Learn More</button>
        </div>
        <img src={Riders} alt="riders" />
      </div>
      <Disclosure />
    </Container>
  );
}

const Container = styled.div`
  padding: 22px 100px;
  margin-bottom: 92px;

  @media screen and (max-width: 669px) {
    padding: 22px 50px;
  }

  @media screen and (max-width: 543px) {
    padding: 22px 20px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 41px 33px;
    background: #141414;
    border: 1px solid #2c2926;
    border-radius: 5px;

    @media screen and (max-width: 669px) {
      padding: 30px 20px;
    }

    @media screen and (max-width: 950px) {
      img {
        width: 100px;
      }
    }

    @media screen and (max-width: 523px) {
      padding: 0;
      background: transparent;
      border: none;
    }

    @media screen and (max-width: 471px) {
      display: none;
    }

    div {
      display: flex;
      gap: 36px;
    }
    p {
      color: #ffffff;
      font-weight: 500;
      font-size: 20px;

      @media screen and (max-width: 754px) {
        font-size: 12px;
      }
    }
  }

  .mobile {
    display:none @media screen and (max-width: 938px) {
      display: block;
    }
  }

  .desktop {
    @media screen and (max-width: 938px) {
      display: none;
    }
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 123px;
    padding: 59.5px 0;
    @media screen and (max-width: 998px) {
      gap: 70px;
    }

    @media screen and (max-width: 938px) {
      flex-direction: column;
    }

    img {
      width: 50%;
    }
    div {
      h4 {
        font-weight: 500;
        font-size: 40px;
        color: #ffffff;

        @media screen and (max-width: 998px) {
          font-size: 30px;
        }
      }
      p {
        font-weight: 500;
        font-size: 20px;
        @media screen and (max-width: 998px) {
          font-size: 16px;
        }
        color: rgba(241, 241, 241, 0.7);
      }
    }
  }

  .dashboard {
    .main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 938px) {
        flex-direction: column-reverse;
        gap: 50px;
      }
    }

    img {
      width: 50%;
    }

    h4 {
      font-weight: 500;
      font-size: 48px;
      color: #fff;
      text-align: center;
      margin-bottom: 95px;
      @media screen and (max-width: 797px) {
        font-size: 30px;
        margin-bottom: 50px;
      }
    }
    .row-left {
      display: flex;
      flex-direction: column;
      gap: 36px;

      > div {
        display: flex;
        align-items: center;
      }

      > div > p {
        color: #c8c8c8;
        font-weight: 500;
        font-size: 20px;
      }
      > div > span {
        width: 27px;
        height: 28px;
        margin-right: 22px;
        @media screen and (max-width: 485px) {
          width: 30px;
        }

        color: #000;
        background: #fff;
        padding: 7px 8px 3px 11px;
        border-radius: 50%;
      }
    }
  }

  .community {
    display: flex;
    padding: 0 64px;
    background: #141414;
    border: 1px solid #2c2926;
    border-radius: 5px;
    align-items: center;
    margin-top: 92px;

    @media screen and (max-width: 924px) {
      flex-direction: column;
      gap: 50px;
      padding: 20px 64px;
    }

    .row-left {
      p {
        color: #fff;
        font-weight: 500;
        font-size: 36px;
        margin-bottom: 40px;
      }
      button {
        background: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 5px;
        padding: 13px 25px;
        font-weight: 500;
        font-size: 15px;
      }
    }
  }
`;
