import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//для виконання HTTP-запитів
import getImagesByQuery from './js/pixabay-api';

//створювати HTML-розмітку для галереї
import { createGallery } from './js/render-functions';

//повинна очищати вміст контейнера галереї
import { clearGallery } from './js/render-functions';

//повинна додавати клас для відображення лоадера
import { showLoader } from './js/render-functions';

//повинна прибирати клас для відображення лоадера
//import { hideLoader } from './js/render-functions';

const form = document.querySelector('.form');
const btnSearch = document.querySelector('button');
const inputForm = document.querySelector('input');

const API_KEY = '49637256-cb46921c72200043e40baf2ce';

form.addEventListener('submit', clickSearch);

function clickSearch(event) {
  event.preventDefault();
  const valueInput = inputForm.value.trim();

  const searchParam = new URLSearchParams({
    key: API_KEY,
    q: valueInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const query = `https://pixabay.com/api/?${searchParam}`;
  if (!valueInput) {
    return;
  }
  showLoader();

  clearGallery();
  inputForm.value = '';
  const data = getImagesByQuery(query);

  console.log(data);

  data.then(value => {
    if (value.total === 0) {
      iziToast.show({
        color: 'red',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(value.hits);
    }
  });
}
