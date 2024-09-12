import icons from 'url:../../img/icons.svg';

export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length == 0))
      return this.renderErrorMessage();
    this._data = data;
    const html = this._generateMarkUp();
    this._clear();
    this._add(html);
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length == 0))
      return this.renderErrorMessage();
    this._data = data;
    const newMarkUp = this._generateMarkUp();
    const newDOM = document.createRange().createContextualFragment(newMarkUp);

    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElemenst = Array.from(this._parentElement.querySelectorAll('*'));

    curElemenst.forEach((curEle, indx) => {
      const newEle = newElements[indx];
      if (!newEle.isEqualNode(curEle)) {
        Array.from(newEle.attributes).forEach(attr => {
          curEle.setAttribute(attr.name, attr.value);
        });

        if(newEle.firstChild?.nodeValue.trim() !== '') curEle.textContent = newEle.textContent;
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _add(html) {
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderSpinner() {
    const html = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div> 
          `;
    this._clear();
    this._add(html);
  }

  renderErrorMessage(message = this._errorMessage) {
    const html = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div> 
      `;
    this._clear();
    this._add(html);
  }

  renderMessage(message) {
    const html = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div> 
      `;
    this._clear();
    this._add(html);
  }
}
