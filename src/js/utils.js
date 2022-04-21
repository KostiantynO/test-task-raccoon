export const makeItemsMarkup = (items, template) => items.map(template).join('');

export const replaceMarkup = (target, markup) => {
  target.innerHTML = '';
  target.insertAdjacentHTML('beforeend', markup);
};

export const insertMarkup = (target, markup) => {
  target.insertAdjacentHTML('beforeend', markup);
};
