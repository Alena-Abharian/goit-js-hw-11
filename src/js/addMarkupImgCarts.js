export function addMarkupImgCarts(hits, element, creatImgCart) {
  const markup = hits.map(creatImgCart).join('');
  element.insertAdjacentHTML('beforeend', markup);
}
