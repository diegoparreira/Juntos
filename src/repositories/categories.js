import config from '../config';

const URL_CATEGORIES_VIDEOS = `${config.URL}/categorias?_embed=videos`;
const URL_CATEGORIES = `${config.URL}/categorias`;

function getAllCategoriesWithVideos() {
  return fetch(URL_CATEGORIES_VIDEOS).then(async (response) => {
    if (response.ok) {
      const answer = await response.json();

      return answer;
    }
    throw new Error('Não foi receber os dados do servidor...');
  });
}

function getAllCategories() {
  return fetch(URL_CATEGORIES).then(async (response) => {
    if (response.ok) {
      const answer = await response.json();
      return answer;
    }

    throw new Error('Não foi receber os dados do servidor...');
  });
}

function create(category) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(category),
  })
    .then(async (response, err) => {
      if (response.ok) {
        const answer = await response.json();
        return answer;
      }

      throw new Error(`Não foi possível cadastrar novo video devido ao erro ${err} ! :(`);
    });
}

export default { getAllCategoriesWithVideos, getAllCategories, create };
