import Disclosure from "app/components/Disclosure";
import WaitlistForm from "app/components/WaitlistForm";
import React from "react";
import { styled } from "twin.macro";

export default function Blog() {
  return (
    <Container>
      <p>
        Home {">"} <span>Blog</span>
      </p>

      <h2>Coming soon...</h2>
      <Disclosure />
      <WaitlistForm />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 100px 50px 100px;

  @media screen and (max-width: 969px) {
    padding: 0 20px 50px 20px;
  }
  > p {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;

    span {
      color: var(--yellow, #ff991e);
    }
  }

  > h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-top: 16px;
  }
`;
