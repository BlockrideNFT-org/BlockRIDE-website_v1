import { styled } from "twin.macro";

import { ReactComponent as Map } from "app/assets/images/map.svg";
import { ReactComponent as Country } from "app/assets/images/country.svg";

export default function BottomSection() {
  return (
    <Container>
      <div className="map">
        <Map />
      </div>
      <div className="form">
        <div>
          <h4>The early bird gets the worm.</h4>
          <input placeholder="Email" />
          <input placeholder="Country" />
        </div>
        <Country />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .map {
    display: flex;
    justify-content: center;
    margin-top: 108px;

    @media screen and (max-width: 999px) {
      padding: 0 20px;
    }
    @media screen and (max-width: 743px) {
      margin-top: 0px;
    }
  }

  .form {
    display: flex;
    align-content: center;
    padding: 0 90px;
    margin-top: 108px;
    gap: 20px;
    @media screen and (max-width: 743px) {
      margin-top: 0px;
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 30px;

      input {
        width: 600px;
        background: transparent;
        padding: 43px 0;
        color: #ffff;
        outline: none;
        font-weight: 500;
        font-size: 48px;
        border-bottom: 1px solid #f1f1f1;
        @media screen and (max-width: 999px) {
          font-size: 30px;
        }

        @media screen and (max-width: 785px) {
          width: 100%;
        }

        &::focus {
          outline: none;
        }

        &::placeholder {
          font-weight: 500;
          font-size: 48px;
          color: #ffff;
          @media screen and (max-width: 999px) {
            font-size: 30px;
          }
        }
      }
      h4 {
        font-weight: 500;
        font-size: 80px;
        color: #ffff;

        @media screen and (max-width: 999px) {
          font-size: 50px;
        }
      }
    }

    svg {
      @media screen and (max-width: 785px) {
        align-self: center;
      }

      @media screen and (max-width: 454px) {
        width: 300px;
      }
    }

    @media screen and (max-width: 999px) {
      padding: 0 50px;
    }

    @media screen and (max-width: 850px) {
      padding: 0 20px;
    }

    @media screen and (max-width: 785px) {
      flex-direction: column;
      justify-content: center;
      gap: 50px;
    }
  }
`;
