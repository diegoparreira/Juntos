import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

const mapVideos = async (videos, id) =>
  videos.map((e) => {
    if (e.categoriaId === id) return e;
  });

const AppWrapper = styled.div`
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = "http://localhost:8080/videos";
      fetch(URL).then(async (response) => {
        if (response.ok) {
          const answer = await response.json();
          setVideos(answer);
          return;
        }
        throw new Error("Não foi possível pegar os dados.");
      });
    }
  }, []);

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = "http://localhost:8080/categorias";
      fetch(URL).then(async (response) => {
        if (response.ok) {
          const answer = await response.json();
          setCategories(answer);
          return;
        }
        throw new Error("Não foi possível pegar os dados.");
      });
    }
  }, []);

  console.log(mapVideos(videos, 1));

  const videoBanner = {
    title: "O que é o Juntos ?",
    description:
      "Entenda agora o que é o Juntos e como você pode fazer parte desta iniciativa tão legal e que pode impactar a vida de muitas pessoas !",
    url: "https://www.youtube.com/watch?v=ZY3-MFxVdEw",
  };

  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={videoBanner.title}
        videoDescription={videoBanner.description}
        url={videoBanner.url}
      />

      {categories &&
        categories.map((e) => (
          <Carousel ignoreFirstVideo={false} category={e} data={videos} />
        ))}
        
      <Footer />
    </AppWrapper>
  );
}

export default Home;
