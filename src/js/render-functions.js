import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const show = document.querySelector('.show-more');

let lightbox;

export function createGallery(images) {
  let item = images
    .map(elem => {
      let imgUrl = elem.webformatURL;
      let bigImg = elem.largeImageURL;
      let likes = elem.likes;
      let views = elem.views;
      let comments = elem.comments;
      let downloads = elem.downloads;

      return `
      <li class="gallery-item">
      <a href="${bigImg}">
        <img src="${imgUrl}" alt="" />
        <ul class="img_info">
          <li>
            <p class="info_title">Likes</p>
            <p>${likes}</p>
          </li>
          <li>
            <p class="info_title">Views</p>
            <p>${views}</p>
          </li>
          <li>
            <p class="info_title">Comments</p>
            <p>${comments}</p>
          </li>
          <li>
            <p class="info_title">Downloads</p>
            <p>${downloads}</p>
          </li>
        </ul>
      </a>
    </li>
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', item);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
export function clearGallery() {
  if (gallery) {
    gallery.innerHTML = '';
  }
}
export function showLoader() {
  if (loader) {
    loader.classList.remove('none');
  }
}
export function hideLoader() {
  if (loader) {
    loader.classList.add('none');
  }
}

export function showLoadMoreButton() {
  if (show) {
    show.classList.remove('none');
  }
}

export function hideLoadMoreButton() {
  if (show) {
    show.classList.add('none');
  }
}
