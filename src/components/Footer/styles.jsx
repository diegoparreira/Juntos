import styled from 'styled-components';

const FooterBase = styled.footer`
    align-items: center;
    background-color: var(--grayLight);
    border-top: 2px solid var(--primary);
    color: var(--blackLight);
    display: flex;
    font-size: .75em;
    justify-content: space-between;
    padding: 10px 50px;
    text-align: center;
    @media(max-width: 800px){
        margin-bottom: 50px;
    }
    & p {
      font-size: 1.25em;
      text-transform: uppercase;
    }
`;

const LogoImage = styled.img`
  max-width: 150px;
  @media (max-width: 800px) {
    max-width: 85px;
  }
`;

export {FooterBase, LogoImage};