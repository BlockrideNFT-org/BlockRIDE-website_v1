import React from "react";
import { styled } from "twin.macro";

export default function WaitlistForm() {
  return (
    <Container>
      <div className="row-left">
        <p>JOIN OUR WAITLIST</p>
        <h3>Become an early Fractional Fleet Owner</h3>
        <h4>Help build the future of transportation.</h4>
        <form action="">
          <input type="email" placeholder="Email*" />
          <input type="text" placeholder="Country*" />
          <input type="text" placeholder="SPL Wallet*" />
          <button>Join Waitlist</button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 92px;
  border-radius: var(--medium-border-radius, 10px);
  border: 2px solid #29231b;
  background: radial-gradient(
      3790.72% 487.51% at -2.66% 16.61%,
      #000 18.43%,
      #ff991e 100%
    ),
    radial-gradient(
      2162.23% 136.55% at -21.91% 28.13%,
      rgba(0, 0, 0, 0.2) 11.62%,
      rgba(223, 0, 0, 0.2) 76.77%
    );
  background-blend-mode: screen, normal;

  .row-left {
    color: #fff;
    padding: 53px 0 53px 49px;
    @media screen and (max-width: 959px) {
      padding: 53px 0 53px 10px;
    }

    form {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 16px;
      @media screen and (max-width: 375px) {
        padding-right: 10px;
      }

      input {
        border-radius: 5px;
        background: #fff;
        padding: 16px 13px;
        font-size: 14px;
        font-weight: 400;
        color: #9ea5ac;

        @media screen and (max-width: 375px) {
          width: 100%;
        }

        &:focus {
          outline: none;
        }
      }
    }
    p {
      font-weight: 600;
      font-size: 12px;
      margin-bottom: 11px;
    }
    h3 {
      font-weight: 700;
      font-size: 32px;
    }
    h4 {
      font-weight: 400;
      font-size: 20px;
    }
    button {
      padding: 8px 15px;
      border-radius: 5px;
      background: linear-gradient(141deg, #ff991e 0%, #df0000 100%);
      font-size: 16px;
      font-weight: 500;
      color: #fff;
    }
  }
`;
