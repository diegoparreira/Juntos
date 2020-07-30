import React from "react";
import styled from 'styled-components';
import Menu from "../Menu";
import Footer from "../Footer";

const Main = styled.main`
  background-color: var(--white);
  color: var(--blackLight);
  margin: 92px auto 50px;
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
