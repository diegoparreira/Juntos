import React from "react";
import "./Menu.css";
import Logo from "../../assets/img/LogoMain.png";
import ButtonLink from "../ButtonLink";

const Menu = () => {
  return (
    <nav className="topmenu">
      <a href="/">
        <img className="topmenu__logo" src={Logo} alt="Logo" />
      </a>
      <ButtonLink href="./" className="topmenu__button">
        Acessar
      </ButtonLink>
    </nav>
  );
};

export default Menu;
