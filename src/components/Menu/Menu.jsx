import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-oficial.png';
import { LogoImage, MenuWrapper, NewButton } from './style.jsx';

function Menu() {
  return (
    <MenuWrapper className="topmenu">
      <Link to="/">
        <LogoImage src={Logo} alt="Logo" />
      </Link>
      <NewButton as={Link} to="/cadastro/video" className="topmenu__button">
        Novo Video
      </NewButton>
    </MenuWrapper>
  );
}

export default Menu;
