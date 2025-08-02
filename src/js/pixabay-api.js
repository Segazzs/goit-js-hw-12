import axios from 'axios';

const apiKey = '51493488-12143edce1099078d847fb8bb';

export function getImagesByQuery(query) {
  const encodedQuery = encodeURIComponent(query.trim());
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodedQuery}&orientation=horizontal&image_type=photo&safesearch=true`;

  return axios.get(url).then(response => response.data.hits);
}
