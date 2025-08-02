import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const btn = document.querySelector('.show-more');

let page = 1;
let value = '';

let height;

form.addEventListener('submit', async event => {
  event.preventDefault();
  hideLoadMoreButton();
  clearGallery();

  value = event.target.elements['search-text'].value.trim();
  if (!value) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const images = await getImagesByQuery(value, page);

    let total = images.total;

    if (images.hits.length >= total) {
      iziToast.error({
        message: 'Were sorry, but youve reached the end of search results',
      });
      hideLoadMoreButton();
      return;
    }

    if (images.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(images.hits);

    showLoadMoreButton();
    let elem = document.querySelector('.gallery-item');
    let rect = elem.getBoundingClientRect();
    height = rect;
  } catch {
    iziToast.error({
      message: 'An error occurred while fetching images.',
    });
  } finally {
    hideLoader();
  }
});

btn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const images = await getImagesByQuery(value, page);

    createGallery(images.hits);
    const firstCard = document.querySelector('.gallery-item');
    if (firstCard) {
      const cardHeight = firstCard.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    if (images.totalHits <= page * 15) {
      iziToast.info({
        message: 'You have reached the end of the results.',
      });
      hideLoadMoreButton();
    }
  } catch {
    iziToast.error({
      message: 'Error loading more images.',
    });
  } finally {
    hideLoader();
  }
});
