import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categories';
// Refazer função que mapeia videos de cada categoria

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllCategoriesWithVideos()
      .then((response) => {
        setVideos(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const videoBanner = {
    title: 'O que é o Juntos ?',
    description:
      'Entenda agora o que é o Juntos e como você pode fazer parte desta iniciativa tão legal e que pode impactar a vida de muitas pessoas !',
    url: 'https://www.youtube.com/watch?v=ZY3-MFxVdEw',
  };

  return (
    <PageDefault>
      <BannerMain
        videoTitle={videoBanner.title}
        videoDescription={videoBanner.description}
        url={videoBanner.url}
      />

      {videos
        && videos.map((e) => (
          <Carousel key={e.id} ignoreFirstVideo={false} data={e} />
        ))}
    </PageDefault>
  );
}

export default Home;
