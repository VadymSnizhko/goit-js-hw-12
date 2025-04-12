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

//повинна додавати клас для відображення кнопки Load more.
import { showLoadMoreButton } from './js/render-functions';

//повинна прибирати клас для відображення кнопки Load more.
import { hideLoadMoreButton } from './js/render-functions';

const form = document.querySelector('.form');
const btnMore = document.querySelector('.btn-more');
const inputForm = document.querySelector('input');

const API_KEY = '49637256-cb46921c72200043e40baf2ce';
let showPage = 1;
let valueInput = '';

form.addEventListener('submit', clickSearch);
btnMore.addEventListener('click', showMoreResult);

function makeQuery(valueInput) {}

function clickSearch(event) {
  event.preventDefault();
  hideLoadMoreButton();
  showPage = 1;
  valueInput = inputForm.value.trim();

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
  //console.log(valueInput);

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
      if (showPage > 2) {
        const card = document.querySelector('.gallery-image');
        if (card) {
          const cardHeight = card.getBoundingClientRect().height;
          window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: 'smooth',
          });
        }
      }

      const isLastPage = showPage > Math.ceil(data.totalHits / 15);

      if (isLastPage) {
        hideLoadMoreButton();

        iziToast.show({
          color: 'red',
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results",
        });
      } else {
        showLoadMoreButton();
      }
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

async function showMoreResult() {
  //showPage++;
  btnMore.disable = true;
  btnMore.innerHTML = 'Loading...';

  //console.log(query);

  try {
    //fetchData();
    //const data = await getImagesByQuery(query, showPage);
    //console.log(data);
    //createGallery(data.hits);
    /** */
    const searchParam = new URLSearchParams({
      key: API_KEY,
      q: valueInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
    });

    const query = `https://pixabay.com/api/?${searchParam}`;

    fetchData(query);
    /** */

    btnMore.disable = false;
    btnMore.innerHTML = 'Load more';
  } catch (error) {
    iziToast.show({
      color: 'red',
      position: 'topRight',
      message: `Помилка: '${error.message}'`,
    });
  }
}
