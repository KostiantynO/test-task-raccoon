export const makeItemsMarkup = (items, template) =>
  items.map(template).join('');

export const list = (markup, className) => `
<ul class="${className}">
  ${markup}
</ul>
`;

export const replaceMarkup = (target, markup) => {
  target.innerHTML = '';
  target.insertAdjacentHTML('beforeend', markup);
};

export const insertMarkup = (target, markup) => {
  target.insertAdjacentHTML('beforeend', markup);
};
