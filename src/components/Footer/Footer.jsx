import React from "react";
import { FooterBase, LogoImage } from "./styles";
import SocialMedia from "./components/SocialMedia";
import Logo from "../../assets/img/logo-oficial.png";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <LogoImage src={Logo} alt="Juntos Logo" />
      </a>
      <p>
        Criado com muito <Emoji symbol="💚" label="green-heart" /> por Diego
        Parreira - 2020
      </p>
      <SocialMedia />
    </FooterBase>
  );
}

export default Footer;
