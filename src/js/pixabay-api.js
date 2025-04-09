import axios from 'axios';

export default function getImagesByQuery(query, page) {
  return axios(`${query}&page=${page}`);
}
