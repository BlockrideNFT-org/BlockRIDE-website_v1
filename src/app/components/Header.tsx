import { Link, NavLink } from "react-router-dom";
import { styled } from "twin.macro";

import { ReactComponent as Logo } from "../assets/images/logo.svg";
import Menu from "app/components/Menu";

export default function Header() {
  return (
    <Container>
      <Logo />

      <div className="menu">
        <Menu />
      </div>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/nft" tw="text-[#ffffff80]">
          NFT
        </NavLink>
        <NavLink to="/docs" tw="text-[#ffffff80]">
          Docs
        </NavLink>
      </div>

      <button>Launch App</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 28px;
  position: sticky;
  top: 0;
  margin: 40px 0;
  padding: 50px 73px 50px 73px;
  background: #000000;
  height: 64px;
  width: 100%;
  z-index: 999;
  @media screen and (max-width: 671px) {
    margin-top: 0;
    background: #141414;
  }

  > .menu {
    display: none;
    @media screen and (max-width: 671px) {
      display: block;
    }
    svg {
      width: 48px;
      height: 48px;
    }
  }

  @media screen and (max-width: 921px) {
    padding: 50px 20px;
  }
  @media screen and (max-width: 799px) {
    font-size: 20px;
  }

  @media screen and (max-width: 686px) {
    padding-right: 10px;
  }

  > svg {
    width: 215.47px;
    height: 46px;
  }

  > .links {
    display: flex;
    gap: 63.5px;

    @media screen and (max-width: 671px) {
      display: none;
    }

    > a {
      color: rgba(255, 255, 255, 0.5);

      &.active {
        color: #ffffff;
      }
    }
  }

  > button {
    background: #ffff;
    padding: 10px 20px;
    border-radius: 2px;
    @media screen and (max-width: 671px) {
      display: none;
    }
  }
`;