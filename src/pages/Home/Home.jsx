import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import URL from '../../config';

// Refazer função que mapeia videos de cada categoria

const AppWrapper = styled.div`
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${URL}/categorias?_embed=videos`).then(async (response) => {
      if (response.ok) {
        const answer = await response.json();
        setVideos([...answer]);
        return;
      }
      throw new Error('Não foi possível pegar os dados.');
    });
  }, []);

  const videoBanner = {
    title: 'O que é o Juntos ?',
    description:
      'Entenda agora o que é o Juntos e como você pode fazer parte desta iniciativa tão legal e que pode impactar a vida de muitas pessoas !',
    url: 'https://www.youtube.com/watch?v=ZY3-MFxVdEw',
  };

  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={videoBanner.title}
        videoDescription={videoBanner.description}
        url={videoBanner.url}
      />

      {videos
        && videos.map((e) => (
          <Carousel key={e.id} ignoreFirstVideo={false} data={e} />
        ))}

      <Footer />
    </AppWrapper>
  );
}

export default Home;
