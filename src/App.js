import React from "react";
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import styled from "styled-components";
import data from "../src/data/dados_iniciais.json";
import banner_data from "../src/data/dados_banner.json";

// Agrupa conteúdo
const AppWrapper = styled.div`
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function App() {
  console.log(data);

  const videoBanner = {
    title: banner_data.titulo,
    description: banner_data.descricao,
    url: banner_data.url,
  };

  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={videoBanner.title}
        videoDescription={videoBanner.description}
        url={videoBanner.url}
      />


      <Carousel ignoreFirstVideo={true} category={data.categorias[0]}/>

      <Carousel ignoreFirstVideo={false} category={data.categorias[1]}/>

      <Carousel ignoreFirstVideo={false} category={data.categorias[2]}/>

      <Footer />
    </AppWrapper>
  );
}

export default App;
