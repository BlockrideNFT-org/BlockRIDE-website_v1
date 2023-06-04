import { styled } from "twin.macro";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Track } from "../../../assets/images/track.svg";

export default function LandingView() {
  const navigate = useNavigate();

  return (
    <Container>
      <p>Solana’s first fractionalized fleet ownership</p>
      <p>- own a piece of your commute!</p>
      <button onClick={() => navigate("/join-waitlist")}>Join Waitlist</button>
      <Track />
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

    @media screen and (max-width: 743px) {
      font-size: 40px;
    }

    @media screen and (max-width: 411px) {
      font-size: 50px;
    }
  }

  p:last-of-type {
    font-weight: 500;
    font-size: 48px;
    margin-top: 20px;
    text-align: center;

    @media screen and (max-width: 743px) {
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
    background: #ffffff;
    border-radius: 6px;
    font-weight: 500;
    font-size: 25px;
    margin-top: 74px;
  }

  svg {
    width: 100%;
    @media screen and (max-width: 797px) {
      display: none;
    }
  }
`;
