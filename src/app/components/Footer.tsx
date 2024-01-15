import { styled } from "twin.macro";

import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as Discord } from "../assets/icons/discord.svg";
import { ReactComponent as MagicEden } from "../assets/icons/magic-eden.svg";
import { ReactComponent as Realms } from "app/assets/icons/realms.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Container>
        <Logo />
        <div tw="flex text-[16px]">
          <NavLink to="/" tw="px-[12px] pt-[13px] pb-[3px] ">
            Home
          </NavLink>
          <NavLink to="" tw="p-[12px]">
            Blog
          </NavLink>
          <NavLink to="" tw="p-[12px]">
            NFTs
          </NavLink>
          <NavLink to="" tw="p-[12px]">
            Documentation
          </NavLink>
        </div>

        <p>
          <MagicEden />
          <Discord />
          <Realms />
        </p>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  padding: 49px 132px;
  background: #141414;
  border-top: 0.3px solid #ffffff;

  @media screen and (max-width: 921px) {
    padding: 49px 20px;
  }

  @media screen and (max-width: 640px) {
    display: block;
  }

  > svg {
    width: 215.47px;
    height: 46px;
    @media screen and (max-width: 799px) {
      width: 100px;
      heigth: 12px;
    }
  }

  p {
    color: inherit;
    font-weight: 400;
    font-size: 16px;

    @media screen and (max-width: 799px) {
      font-size: 16px;
    }

    @media screen and (max-width: 427px) {
      font-size: 12px;
    }
  }

  p:last-of-type {
    display: flex;
    gap: 8px;

    /* > svg {
      @media screen and (max-width: 528px) {
        display: none;
      }
    } */
  }
`;
