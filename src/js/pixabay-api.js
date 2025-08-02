import axios from 'axios';

const apiKey = '51493488-12143edce1099078d847fb8bb';
export const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  try {
    const encodedQuery = encodeURIComponent(query.trim());
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodedQuery}&orientation=horizontal&image_type=photo&safesearch=true&per_page=15&page=${page}`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
