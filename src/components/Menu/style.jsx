import styled from "styled-components";
import Button from "../Button";

const LogoImage = styled.img`
  max-width: 168px;
  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 2;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--grayLight);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

const NewButton = styled(Button)`
  background-color: var(--primary);
  color: white;
  border: 2px solid var(--primary);
`;



export { LogoImage, MenuWrapper, NewButton };
