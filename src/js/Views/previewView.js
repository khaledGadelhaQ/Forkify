import View from './View';
import icons from 'url:../../img/icons.svg';

export default class PreviewView extends View {
  _parentElement = '';

  _generateMarkUp() {
    return this._data.map(this._generateMarkUpHelper).join('');
  }

  _generateMarkUpHelper(el) {
    const id = window.location.hash.slice(1);
    return `
        <li class="preview">
            <a class="preview__link ${
              el.id == id ? 'preview__link--active' : ''
            }" href="#${el.id}">
            <figure class="preview__fig">
                <img src="${el.img}" alt="${el.title}" />
            </figure>
            <div class="preview__data">
            <h4 class="preview__title">${el.title}</h4>
            <p class="preview__publisher">${el.publisher}</p>
            <div class="preview__user-generated ${el.key ? '' : 'hidden'}">
              <svg>
              <use href="${icons}#icon-user"></use>
              </svg>
            </div>
            </div>
            </a> 
        </li>
        `;
  }
}
