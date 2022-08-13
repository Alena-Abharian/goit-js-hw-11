export function creatImgCart(hit) {
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
  return `<div class='photo__card card-set-item'>
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
   </div>`;
}
