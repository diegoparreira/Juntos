import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response, err) => {
      if (response.ok) {
        const answer = await response.json();
        return answer;
      }

      throw new Error(`Não foi possível cadastrar novo video devido ao erro ${err} ! :(`);
    });
}

export default { create };
