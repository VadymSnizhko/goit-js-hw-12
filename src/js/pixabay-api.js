import axios from 'axios';

export default function getImagesByQuery(query, page = 1) {
  //return axios(`${query}&page=${page}`);

  return axios(query, {
    params: {
      page: page,
    },
  });
}
