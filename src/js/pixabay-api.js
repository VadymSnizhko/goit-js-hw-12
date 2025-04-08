import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
//повинна прибирати клас для відображення лоадера
import { hideLoader } from './render-functions';

export default function getImagesByQuery(query) {
  return axios(query)
    .then(response => response.data)
    .catch(error => {
      iziToast.show({
        color: 'red',
        position: 'topRight',
        message: `Помилка '${error.message}'`,
      });
      return null;
    })
    .finally(() => hideLoader());
}
