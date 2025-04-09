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
import { hideLoader } from './js/render-functions';

import { showLoadMoreButton } from './js/render-functions';
import { hideLoadMoreButton } from './js/render-functions';

const form = document.querySelector('.form');
const btnSearch = document.querySelector('.btn-more');
const inputForm = document.querySelector('input');

const API_KEY = '49637256-cb46921c72200043e40baf2ce';
let showPage = 1;

form.addEventListener('submit', clickSearch);
btnSearch.addEventListener('click', showMoreResult);

function clickSearch(event) {
  event.preventDefault();
  hideLoadMoreButton();
  showPage = 1;
  const valueInput = inputForm.value.trim();

  const searchParam = new URLSearchParams({
    key: API_KEY,
    q: valueInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  });

  const query = `https://pixabay.com/api/?${searchParam}`;
  if (!valueInput) {
    return;
  }
  showLoader();

  clearGallery();
  console.log(valueInput);

  inputForm.value = '';

  fetchData(query);
}

async function fetchData(query) {
  try {
    const response = await getImagesByQuery(query, showPage);
    const data = response.data;

    if (data.total === 0) {
      iziToast.show({
        color: 'red',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(data.hits);
      showLoadMoreButton();
      showPage++;
      console.log(showPage);
    }
  } catch (error) {
    iziToast.show({
      color: 'red',
      position: 'topRight',
      message: `Помилка '${error.message}'`,
    });
  } finally {
    hideLoader();
  }
}

function showMoreResult() {
  showPage++;
  console.log(showPage);
}
