import Notiflix from 'notiflix';

function notiflixFailure(text) {
  Notiflix.Notify.failure(text);
}

function notiflixInfo(text) {
  Notiflix.Notify.info(text);
}

function notiflixSuccess(text) {
  Notiflix.Notify.success(text);
}

export { notiflixFailure, notiflixSuccess, notiflixInfo };
