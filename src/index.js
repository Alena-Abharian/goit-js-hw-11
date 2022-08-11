import './css/styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';


const simplebox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log('simplebox', simplebox);

const BASE_URL = 'https://pixabay.com/api/';
const PARAMS = '?key=17103623-ab930b7d528134dd68b9da242&q=yellow+flowers&image_type=photo';

function fetchImg() {
  return fetch(`${BASE_URL}${PARAMS}`)
    .then(response => response.json());
}

function renderMarkup() {
  fetchImg().then(data => {
    console.log("data",data);
    addMarkup(data.hits, refs.list);
  });
}


const refs = {
  formEl: document.querySelector('#search-form'),
  list: document.querySelector('.gallery'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const search = e.currentTarget.elements.searchQuery.value.trim();
  console.log(search);

  renderMarkup();
  simplebox.refresh();

}


function creatImgCart(hit) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    webformatWidth,
    webformatHeight,
    likes,
    views,
    comments,
    downloads,
  } = hit;
  return `<li class='photo__card card-set-item'>
    <a class='gallery__item' href='${largeImageURL}'>
        <img class='gallery__image' src='${webformatURL}' alt='${tags}' loading='lazy' width='${webformatWidth}' height='${webformatHeight}'>
    <ul class='info card-set'>
        <li class='info__item card-set-item'>
            <b>Likes</b>
            <span>${likes}</span>
        </li>
        <li class='info__item card-set-item'>
            <b>Views</b>
            <span>${views}</span>
        </li>
        <li class='info__item card-set-item'>
            <b>Comments</b>
            <span>${comments}</span>
        </li>
        <li class='info__item card-set-item'>
            <b>Downloads</b>
            <span>${downloads}</span>
        </li>
    </ul>
    </a>
   </li>`;
}

function addMarkup(hits, element) {
  const markup = hits.map(creatImgCart).join('');
  element.insertAdjacentHTML('beforeend', markup);
}
