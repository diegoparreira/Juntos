import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias?_embed=videos`; 

function getAllCategoriesWithVideos() {
  return fetch(URL_CATEGORIES).then(async (response, error) => {
    if (response.ok) {
      const answer = await response.json();

      return answer;
    }
    throw new Error(`Não foi possível tratar o erro: ${error}`);
  });
}

export default { getAllCategoriesWithVideos };
