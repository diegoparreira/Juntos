import React from "react";
import Logo from "../../assets/img/logo-oficial.png";
import { LogoImage, MenuWrapper } from "./style.jsx";
import Button from "../Button";

function Menu(){
  return (
    <MenuWrapper className="topmenu">
      <a href="/">
        <LogoImage src={Logo} alt="Logo" />
      </a>
      <Button as="a" href="/" className="topmenu__button">
        Novo Video
      </Button>
    </MenuWrapper>
  );
};

export default Menu;
