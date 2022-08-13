import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '17103623-ab930b7d528134dd68b9da242';
export const PER_PAGE = 40;

export async function fetchImg(search, page) {
  return axios.get(`${BASE_URL}?key=${KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`);
}
