import { Menu } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "twin.macro";

import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

export default function MyMenu() {
  return (
    <Menu>
      <Menu.Button>
        <MenuIcon />
      </Menu.Button>
      <Menu.Items as={Overlay}>
        <Menu.Item>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/nft">NFT</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/">DOCS</NavLink>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

const Overlay = styled.div`
  background: #141414;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 0;

  > a {
    color: rgba(255, 255, 255, 0.5);

      &.active {
        color: #ffffff;
      }
      font-size: 20px;
    padding: 15px 0;
    }
    
  }
`;
