import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/all";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const cars = useSelector((state) => state.car.cars);

  return (
    <Navbar>
      <Logo href="/">TESLA</Logo>
      <Menu>
        {cars.map((car, index) => (
          <li key={index}>
            <NavLink href="#">{car}</NavLink>
          </li>
        ))}
      </Menu>
      <CustomAiOutlineMenu onClick={() => setToggle(true)} />
      <MobileMenu toggle={toggle}>
        <IconWrapper>
          <div></div>
          <CustomAiOutlineClose onClick={() => setToggle(false)} />
        </IconWrapper>
        {cars.map((car, index) => (
          <li key={index}>
            <a href="#" onClick={() => setToggle(false)}>{car}</a>
          </li>
        ))}
        <li>
          <a href="#" onClick={() => setToggle(false)}>Demo 1</a>
        </li>
        <li>
          <a href="#" onClick={() => setToggle(false)}>Demo 2</a>
        </li>
        <li>
          <a href="#" onClick={() => setToggle(false)}>Demo 3</a>
        </li>
      </MobileMenu>
    </Navbar>
  );
};

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

const Logo = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 400;
  letter-spacing: 5px;
  font-size: 32px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  padding: 10px 14px;
  border-radius: 5px;
  transition: background 200ms ease-in-out;
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const CustomAiOutlineMenu = styled(AiOutlineMenu)`
  cursor: pointer;
  width: 35px;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const CustomAiOutlineClose = styled(AiOutlineClose)`
  font-size: 22px;
  cursor: pointer;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const MobileMenu = styled.div`
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  transition: all 200ms ease-in-out;
  transform: translateX(${(props) => (props.toggle ? "0" : "300px")});
  opacity: ${(props) => (props.toggle ? "1" : "0")};
  box-shadow: -6px 10px 9px -1px rgba(66, 66, 66, 0.23);
  z-index: 100;
  padding: 20px;
  list-style: none;
  & li {
    width: 100%;
    display: flex;
    & a {
      color: ${(props) => props.theme.colors.primary};
      width: 100%;
      padding: 10px;
      line-height: 2;
      border-radius: 5px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Header;
