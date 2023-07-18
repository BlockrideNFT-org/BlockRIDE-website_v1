import { styled } from "twin.macro";

import Solana from "../../../assets/images/solana.png";
import MagicEden from "app/assets/images/magic-eden.png";
import Income from "app/assets/images/income.png";
import Token from "app/assets/images/token.png";
import Security from "app/assets/images/security.png";
import Cryto from "app/assets/images/crypto.png";
import Disclosure from "app/components/Disclosure";

import { ReactComponent as AppImage } from "app/assets/images/app-image.svg";
import { ReactComponent as Notification } from "app/assets/icons/notification.svg";
import { ReactComponent as Return } from "app/assets/icons/return.svg";
import { ReactComponent as Analytics } from "app/assets/icons/analytics.svg";
import { ReactComponent as DashBoard } from "app/assets/icons/dashboard.svg";
import WaitlistForm from "app/components/WaitlistForm";

export default function IndustryRates() {
  return (
    <Container>
      <div className="header-container">
        <div className="header">
          <p>Working with the best in the industry</p>
          <div>
            <img src={Solana} alt="solana" />
            <img src={MagicEden} alt="magic-eden" />
          </div>
        </div>
      </div>

      <div className="app-img">
        <AppImage tw="w-[100%] mt-[36px]" />
      </div>

      <div className="investment_process">
        <div className="container">
          <div className="title">
            <h2>Simplify your investment process</h2>
            <h3>
              Blockride help simplify your bus fleet investment process,
              restoring your <br /> trust in bus hire purchase investment.
            </h3>
          </div>
          <div className="main">
            <div className="row">
              <div>
                <DashBoard />
                <div>
                  <p>One Dashboard</p>
                  <p>
                    Manage your investment and procurement from one <br />{" "}
                    dashboard.
                  </p>
                </div>
              </div>
              <div>
                <Analytics />
                <div>
                  <p>Real-time Analytics</p>
                  <p>
                    Manage all your investment concerns from one <br />
                    dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <Notification />
                <div>
                  <p>Get Notified</p>
                  <p>
                    Stay ahead with real-time notifications on our new <br />{" "}
                    offerings.
                  </p>
                </div>
              </div>
              <div>
                <Return />
                <div>
                  <p>Daily Return</p>
                  <p>
                    Claim your returns where and whenever without <br />
                    interruption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="desktop">
        <div className="grid">
          <img src={Income} alt="income" />

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
            <div className="sub-text">
              <div>
                <h3>Transparency</h3>
                <p>
                  We prioritize transparency by leveraging <br /> blockchain
                  technology for fare collection. Every <br /> transaction is
                  transparent, providing a clear <br /> view of fare collection
                  and ensuring <br />
                  accountability.
                </p>
              </div>
              <div>
                <h3>Analytics</h3>
                <p>
                  Gain valuable insights into revenue trends, <br /> passenger
                  traffic, and other key metrics. With <br /> this information,
                  you can make data-driven <br /> decisions to optimize
                  operations and maximize <br /> your returns.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div>
            <h4>Invest in bus fleets securely and remotely</h4>
            <p>
              Blockride offers a secure and accessible investment opportunity by
              tokenizing bus fleets through Security Token Offerings (STOs).
              Investors can enjoy increased liquidity in the decentralized
              finance (DeFi) space while earning returns based on the
              traditional financial performance of the underlying bus assets.
            </p>
            <div className="sub-text">
              <div>
                <h3>STO (Security Token Offering)</h3>
                <p>
                  Bus fleets are tokenized, allowing investors to participate in
                  STOs. This innovative approach brings together the benefits of
                  blockchain technology and traditional finance, providing a
                  regulated and transparent investment avenue.
                </p>
              </div>
              <div>
                <h3>Liquidity</h3>
                <p>
                  Investors can benefit from increased liquidity in the
                  decentralized finance (DeFi) space. Integration with
                  compatible DeFi platforms, unlocking flexibility and enhancing
                  use case.
                </p>
              </div>
            </div>
          </div>
          <img src={Security} alt="security" />
        </div>
        <div className="grid">
          <img src={Token} alt="token" />
          <div>
            <h4>Own a piece for as little as $50</h4>
            <p>
              Invest in tangible assets with real growth potential and become a
              fleet owner with a minimum of $50
            </p>
            <div className="sub-text">
              <div>
                <h3>Fractional Ownership</h3>
                <p>
                  Fractionalized fleet ownership opens up accessible investment
                  opportunities in the transportation industry to a wide range
                  of stakeholders and investors by eliminating the high barrier
                  to entry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div>
            <h4>Daily Pay-out in $USDC</h4>
            <p>
              Conveniently receive daily pay-outs directly to your wallets in
              $USDC, a stablecoin pegged to the value of the US dollar and
              widely accepted in the digital asset market. By utilizing $USDC,
              you can enjoy the benefits of consistent earnings while minimizing
              the volatility typically associated with other cryptocurrencies.
              Rest assured that your hard-earned profits are protected and
              accessible whenever you need them, providing you with peace of
              mind and financial stability in your investment journey.
            </p>
          </div>
          <img src={Cryto} alt="crypto" />
        </div>
      </div>

      <div className="mobile">
        <div className="grid">
          <img src={Income} alt="income" />
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
            <div className="sub-text">
              <div>
                <h3>Transparency</h3>
                <p>
                  We prioritize transparency by leveraging <br /> blockchain
                  technology for fare collection. Every <br /> transaction is
                  transparent, providing a clear <br /> view of fare collection
                  and ensuring <br />
                  accountability.
                </p>
              </div>
              <div>
                <h3>Analytics</h3>
                <p>
                  Gain valuable insights into revenue trends, <br /> passenger
                  traffic, and other key metrics. With <br /> this information,
                  you can make data-driven <br /> decisions to optimize
                  operations and maximize <br /> your returns.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <img src={Security} alt="security" />
          <div>
            <h4>Invest in bus fleets securely and remotely</h4>
            <p>
              Blockride offers a secure and accessible investment opportunity by
              tokenizing bus fleets through Security Token Offerings (STOs).
              Investors can enjoy increased liquidity in the decentralized
              finance (DeFi) space while earning returns based on the
              traditional financial performance of the underlying bus assets.
            </p>
            <div className="sub-text">
              <div>
                <h3>STO (Security Token Offering)</h3>
                <p>
                  Bus fleets are tokenized, allowing investors to participate in
                  STOs. This innovative approach brings together the benefits of
                  blockchain technology and traditional finance, providing a
                  regulated and transparent investment avenue.
                </p>
              </div>
              <div>
                <h3>Liquidity</h3>
                <p>
                  Investors can benefit from increased liquidity in the
                  decentralized finance (DeFi) space. Integration with
                  compatible DeFi platforms, unlocking flexibility and enhancing
                  use case.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <img src={Token} alt="token" />
          <div>
            <h4>Own a piece for as little as $50</h4>
            <p>
              Invest in tangible assets with real growth potential and become a
              fleet owner with a minimum of $50
            </p>
            <div className="sub-text">
              <div>
                <h3>Fractional Ownership</h3>
                <p>
                  Fractionalized fleet ownership opens up accessible investment
                  opportunities in the transportation industry to a wide range
                  of stakeholders and investors by eliminating the high barrier
                  to entry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <img src={Cryto} alt="crypto" />
          <div>
            <h4>Daily Pay-out in $USDC</h4>
            <p>
              Conveniently receive daily pay-outs directly to your wallets in
              $USDC, a stablecoin pegged to the value of the US dollar and
              widely accepted in the digital asset market. By utilizing $USDC,
              you can enjoy the benefits of consistent earnings while minimizing
              the volatility typically associated with other cryptocurrencies.
              Rest assured that your hard-earned profits are protected and
              accessible whenever you need them, providing you with peace of
              mind and financial stability in your investment journey.
            </p>
          </div>
        </div>
      </div>
      <div className="disclosure">
        <Disclosure />
      </div>

      <div className="waitlist">
        <WaitlistForm />
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 92px;

  /* @media screen and (max-width: 669px) {
    padding: 22px 50px;
  }

  @media screen and (max-width: 543px) {
    padding: 22px 20px;
  } */

  .app-img {
    padding: 22px 100px;
    @media screen and (max-width: 888px) {
      padding: 0 100px;
    }

    svg {
      @media screen and (max-width: 888px) {
        height: 200px;
      }
    }
  }

  .header-container {
    padding: 22px 100px;
    @media screen and (max-width: 747px) {
      padding: 0 20px;
    }
  }

  .disclosure {
    padding: 22px 100px;

    @media screen and (max-width: 877px) {
      padding: 22px 20px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 33px;
    background: #141414;
    border: 1px solid #ff991e;
    border-radius: 5px;
    margin-top: 36px;

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
      font-size: 16px;
      font-weight: 500;

      @media screen and (max-width: 754px) {
        font-size: 12px;
      }
    }
  }

  .mobile {
    display: none;
    @media screen and (max-width: 938px) {
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
      .sub-text {
        display: flex;
        gap: 21px;
        margin-top: 20px;
        div {
          h3 {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
          }
        }
      }

      h4 {
        font-weight: 700;
        font-size: 24px;
        color: #ffffff;
        margin-bottom: 20px;

        @media screen and (max-width: 998px) {
          font-size: 30px;
        }
      }
      p {
        font-weight: 400;
        font-size: 16px;
        @media screen and (max-width: 998px) {
          font-size: 16px;
        }
        color: rgba(241, 241, 241, 0.7);
      }
    }
  }

  .waitlist {
    @media screen and (max-width: 833px) {
      padding: 22px 20px;
    }
  }

  .investment_process {
    background: #141414;
    margin-top: 30px;

    > .container {
      padding: 97px 116px;

      @media screen and (max-width: 978px) {
        padding: 60px 30px;
      }

      @media screen and (max-width: 763px) {
        padding: 60px 0;
      }

      > .title {
        text-align: center;
        @media screen and (max-width: 518px) {
          text-align: left;
        }

        h2 {
          font-size: 32px;
          font-weight: 600;
          color: #fff;
          @media screen and (max-width: 763px) {
            font-size: 26px;
          }
        }

        h3 {
          font-size: 18px;
          font-weight: 400;
          color: #9ea5ac;
          margin-top: 22px;
          @media screen and (max-width: 763px) {
            font-size: 15px;
          }
        }
      }

      > .main {
        display: flex;
        justify-content: center;
        @media screen and (max-width: 701px) {
          flex-direction: column;
        }
        gap: 49px;
        margin-top: 67px;

        .row {
          display: flex;
          flex-direction: column;
          gap: 56px;
          > div {
            display: flex;
            gap: 32px;
            div {
              display: flex;
              flex-direction: column;
              gap: 10px;

              p:first-of-type {
                color: #fff;
                font-size: 16px;
                font-weight: 500;
              }
              p:last-of-type {
                color: #9ea5ac;
                font-size: 14px;
                font-weight: 400;
                line-height: 28px;
              }
            }
          }
        }
      }
    }
  }

  > div {
    padding: 22px 100px;

    @media screen and (max-width: 518px) {
      padding: 0 20px;
    }
  }
`;
