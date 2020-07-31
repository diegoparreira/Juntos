import React from 'react';
import { FooterBase, LogoImage } from './styles';
import SocialMedia from './components/SocialMedia';
import Logo from '../../assets/img/logo-oficial.png';

const Emoji = ({ label, symbol }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label || ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <LogoImage src={Logo} alt="Juntos Logo" />
      </a>
      <p>
        Criado com muito
        {' '}
        <Emoji symbol="💚" label="green-heart" />
        {' '}
        por Diego
        Parreira - 2020
      </p>
      <SocialMedia />
    </FooterBase>
  );
}

export default Footer;
