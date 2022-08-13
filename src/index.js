import './css/styles.css';
import { fetchImg, PER_PAGE } from './js/fetchImg';
import { addMarkupImgCarts } from './js/addMarkupImgCarts';
import { creatImgCart } from './js/creatImgCart';
import { clearImgCarts } from './js/clearImgCarts';
import refs from './js/refs';
import simplebox from './libs/simplebox';
import { notiflixFailure, notiflixInfo, notiflixSuccess } from './libs/notiflix';

async function renderMarkupImgCarts(search, page) {
  const { data: { hits, totalHits } } = await fetchImg(search, page);
  if (!hits.length) {
    notiflixFailure('Sorry, there are no images matching your search query. Please try again.');
  } else if (page >= Math.floor(totalHits / PER_PAGE)) {
    notiflixInfo('We\'re sorry, but you\'ve reached the end of search results.');
    showLoadBtn(false);
  } else {
    addMarkupImgCarts(hits, refs.list, creatImgCart);
    showLoadBtn(true);
    page === 1 && notiflixSuccess(`Hooray! We found ${totalHits} images.`);
  }
  simplebox.refresh();
}

let page = 1;

refs.formEl.addEventListener('submit', onFormSubmit);
refs.load.addEventListener('click', onNextPage);

async function onFormSubmit(e) {
  e.preventDefault();
  const search = e.currentTarget.elements.searchQuery.value.trim();
  resetPage();
  clearImgCarts(refs.list);
  await renderMarkupImgCarts(search, page);
}

async function onNextPage(e) {
  const search = refs.formEl.elements.searchQuery.value.trim();
  page += 1;
  await renderMarkupImgCarts(search, page);
}

function resetPage() {
  page = 1;
}

function showLoadBtn(isShow) {
  refs.load.style.display = isShow ? 'block' : 'none';
}
