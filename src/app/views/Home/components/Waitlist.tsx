import { styled } from "twin.macro";
import { useNavigate } from "react-router-dom";

export default function LandingView() {
  const navigate = useNavigate();

  return (
    <Container>
      <p>
        The modern approach to{" "}
        <span tw="text-[#FF991E]">vehicle financing</span>
      </p>
      <p>
        Blockride offers a hassle-free approach to accessing smarter investment
        opportunities in the transportation sector, allowing you to earn real
        returns. We prioritize simplicity, accessibility, and affordability,
        making investing in this industry easier than ever before.
      </p>
      <button onClick={() => navigate("/join-waitlist")}>Join Waitlist</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  p {
    font-weight: 700;
    font-size: 48px;
    color: #fff;
    text-align: center;
    width: 100%;

    @media screen and (max-width: 743px) {
      font-size: 40px;
    }

    @media screen and (max-width: 450px) {
      font-size: 32px;
    }
  }

  p:last-of-type {
    font-weight: 400;
    font-size: 18px;
    margin-top: 20px;
    text-align: center;
    color: #9ea5ac;
    width: 836px;
    width: 100%;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    gap: 10px;
    margin-top: 31px;
    border-radius: 5px;
    background: linear-gradient(141deg, #ff991e 0%, #df0000 100%);
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  svg {
    width: 100%;
    @media screen and (max-width: 797px) {
      display: none;
    }
  }
`;
