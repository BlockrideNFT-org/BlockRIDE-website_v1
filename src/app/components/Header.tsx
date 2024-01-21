import { NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

import { ReactComponent as Logo } from "../assets/images/logo.svg";
import Menu from "./Menu";

export default function Header() {
  const handleClickScroll = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <div tw="flex justify-between items-center bg-[#140D04] text-[#CDCDCD] px-[83px] py-[22px] [@media(max-width:910px)]:(px-[20px])">
        <Logo />
        <div tw="hidden [@media(max-width:732px)]:(block) ">
          <Menu />
        </div>

        <div tw="flex bg-[rgba(254, 153, 30, 0.15)] text-[16px] font-normal p-[4px] rounded-[100px] p-[10px] [@media(max-width:732px)]:(hidden)">
          <NavLink to="/" tw="px-[12px] pt-[13px] pb-[3px]">
            Home
          </NavLink>
          <button tw="p-[12px]">Blog</button>
          <button tw="p-[12px]">NFTs</button>
          <button tw="p-[12px]">Documentation</button>
        </div>

        <div tw="text-[16px] flex gap-[12px] font-medium [@media(max-width:732px)]:(hidden)">
          <button tw="px-[32px] pt-[14px] pb-[10px] text-[#FE991E] border border-[#FE991E] rounded-[100px] text-[16px] font-medium [@media(max-width:779px)]:(px-[20px])">
            Launch App
          </button>
          <button
            onClick={handleClickScroll}
            tw="px-[32px] pt-[14px] pb-[10px] border border-[#FE991E] rounded-[100px] text-[#111] bg-[#FE991E] text-[16px] font-medium [@media(max-width:779px)]:(px-[20px])"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  > div > div > a {
    &.active {
      ${tw`bg-[#FE991E] rounded-[100px] text-[#000]`}
    }
  }
`;
