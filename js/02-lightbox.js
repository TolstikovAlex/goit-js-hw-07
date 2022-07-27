import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryEl = document.querySelector('ul.gallery');
console.log(galleryEl);

const listEl = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`,
  )
  .join('');

//   Вводим галлерею на страницу
galleryEl.insertAdjacentHTML('afterbegin', listEl);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
