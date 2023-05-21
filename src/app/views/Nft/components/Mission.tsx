import { styled } from "twin.macro";

import { ReactComponent as Target } from "app/assets/icons/target.svg";
import { ReactComponent as MissionTrack } from "app/assets/images/mission.svg";
import { ReactComponent as Percentage } from "app/assets/images/benefit-1.svg";
import { ReactComponent as Exclusive } from "app/assets/images/benefit-2.svg";
import { ReactComponent as Emission } from "app/assets/images/benefit-3.svg";
import Disclosure from "app/components/Disclosure";

export default function Mission() {
  return (
    <Container>
      <div className="header">
        <Target /> <h4>Our Mission</h4>
      </div>
      <div className="main">
        <div>
          <p>
            Once upon a time, in a world of noise and fumes, Where getting
            around was a game of survival, Transport tycoons dreamed of a better
            way, To move people fast, with a dash of style.
            <br /> <br /> They knew that high motorization rates, And carbon
            emissions, were threats to our fate, So they set out on a mission to
            create, Rapid transit that was clean, fast, and great.
            <br /> <br /> They pooled their resources, their brains, and their
            brawn, To make their vision a reality at dawn, And after much toil,
            sweat, and tears, They brought forth a brand new way to steer.
            <br /> <br /> But they knew that building transit wasn't enough, For
            they needed more than steel and tough, They needed a community,
            strong and true, To make their vision come into view.
            <br /> <br /> And so they turned to the world of NFTs, To build a
            community, that's as tight as can be, They created the Blockride
            project, to unite, Transport lovers, to share in the delight.
            <br /> <br /> With NFTs, they found a way to build, A community,
            that was more than thrilled, To share their vision, and to support,
            A project, that would take them to great heights.
            <br /> <br /> They knew that NFTs were often seen, As tokens, for
            speculation and greed, But they had a plan, to turn it around, To
            make it a force, for good and profound.
            <br /> <br /> They focused on building community, To avoid the
            pitfalls, of greed and iniquity, They built a strong foundation,
            that's unbreakable, A community that's reliable, and unshakable.
            <br /> <br /> And now the Blockride NFTs are here, A symbol of the
            vision so clear, Of rapid transit that's clean and green, And a
            community that's tight-knit, and keen.
            <br /> <br /> So come, dear friends, and join the ride, Of the
            Blockride NFT project's tide, Where innovation, progress, and
            decentralization reign, And a better future for all is
            the ultimate aim.
          </p>
        </div>

        <MissionTrack />
      </div>
      <div className="benefits">
        <h4>Benefits</h4>
        <div className="benefit">
          <div>
            <Percentage />
            <p>Percentage share on every offering</p>
          </div>
          <div>
            <Exclusive />
            <p>Exclusive access to Blockride DAO</p>
          </div>
          <div>
            <Emission />
            <p>Daily emission of $*** token</p>
          </div>
        </div>
      </div>

      <Disclosure />
    </Container>
  );
}

const Container = styled.div`
  color: #fff;
  padding: 0 59px;
  @media screen and (max-width: 488px) {
    padding: 0 20px;
  }
  margin-bottom: 149px;
  margin-top: 100px;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 44px;
    margin-bottom: 130px;
    @media screen and (max-width: 797px) {
      margin-bottom: 50px;
    }

    h4 {
      font-weight: 500;
      color: inherit;
      font-size: 80px;
      @media screen and (max-width: 797px) {
        font-size: 44px;
      }
    }
    svg {
      border: #fff;
      border-radius: 50%;
      padding: 5px;
      background: #fff;
      @media screen and (max-width: 797px) {
        display: none;
      }
    }
  }

  .main {
    display: flex;
    justify-content: space-between;
    position: relative;
    div {
      width: 896.55px;
      @media screen and (max-width: 797px) {
        text-align: center;
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
    p {
      font-weight: 400;
      font-size: 20px;
      width: 58%;
      @media screen and (max-width: 797px) {
        /* text-align: center; */
        width: 100%;
      }
    }

    svg {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;

      @media screen and (max-width: 817px) {
        margin-right: -57px;
      }

      @media screen and (max-width: 797px) {
        display: none;
      }
    }
  }

  .benefits {
    h4 {
      font-weight: 500;
      font-size: 80px;
      color: #fff;
      margin-bottom: 61px;
      margin-top: 191px;
      text-align: center;
      @media screen and (max-width: 797px) {
        font-size: 40px;
      }
    }
    .benefit {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 34px 30px;
      }

      p {
        font-weight: 500;
        font-size: 24px;
        color: #fff;
        text-align: center;
      }
    }
  }
`;
