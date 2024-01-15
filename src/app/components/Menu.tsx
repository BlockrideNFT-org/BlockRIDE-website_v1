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
          <NavLink to="/" tw="text-[#949798]">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <button tw="text-[#949798]">NFT</button>
        </Menu.Item>
        <Menu.Item>
          <button tw="text-[#949798]">DOCS</button>
        </Menu.Item>
        <Menu.Item>
          <Link
            to=""
            tw="px-[32px] pt-[14px] pb-[10px] border border-[#FE991E] rounded-[100px] text-[#111] bg-[#FE991E] text-[16px] font-medium w-full flex justify-center "
          >
            Sign Up
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

const Overlay = styled.div`
  background: #fff;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 0;

  .button {
    padding: 8px 15px;
    border-radius: 5px;
    background: linear-gradient(141deg, #ff991e 0%, #df0000 100%);
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-bottom:10px;
  }

  > a,button {

      &.active {
        color: #FE991E;
      }
      font-size: 20px;
    padding: 15px 0;
    }
    
  }
`;
