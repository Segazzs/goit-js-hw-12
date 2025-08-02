import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const value = event.target.elements['search-text'].value.trim();

  if (!value) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(value)
    .then(images => {
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(images);
    })
    .catch(() => {
      iziToast.error({
        message: 'An error occurred while fetching images.',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
