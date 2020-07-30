import React from "react";
import styled from 'styled-components';
import Menu from "../Menu";
import Footer from "../Footer";

const Main = styled.main`
  background-color: var(--white);
  color: var(--blackLight);
  flex: 1;
  padding: 92px 5%;
  text-align: center;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
