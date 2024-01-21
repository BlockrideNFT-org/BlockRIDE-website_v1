import { Menu } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "twin.macro";

import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

export default function MyMenu() {
  return (
    <Menu>
      <Menu.Button>
        <MenuIcon />
      </Menu.Button>
      <Menu.Items as={Overlay}>
        <Menu.Item>
          <NavLink to="/" tw="text-[#949798] text-[20px] py-[15px]">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <p tw="text-[#949798]">Blog</p>
        </Menu.Item>
        <Menu.Item>
          <p tw="text-[#949798]">NFTs</p>
        </Menu.Item>
        <Menu.Item>
          <p tw="text-[#949798]">Documentation</p>
        </Menu.Item>
        <Menu.Item>
          <Link
            to=""
            tw="px-[32px] pt-[15px] pb-[9px] border border-[#FE991E] rounded-[100px] text-[#111] bg-[#FE991E] text-[16px] font-medium w-full flex justify-center "
          >
            Launch App
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

const Overlay = styled.div`
  background: #fff;
  position: absolute;
  top: 110px;
  right: 10px;
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 10px;

  .button {
    padding: 8px 15px;
    border-radius: 5px;
    background: linear-gradient(141deg, #ff991e 0%, #df0000 100%);
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 10px;
  }
  a {
    &.active {
      color: #fe991e;
    }
  }
  p {
    font-size: 20px;
    padding: 15px 0;
  }
`;
