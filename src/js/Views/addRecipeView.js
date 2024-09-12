import View from './View';

class AddRecipeView extends View {
  _successMessage = 'Your recipe was successfully uploaded :)';
  _parentElement = document.querySelector('.upload');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.add-recipe-window');

  constructor() {
    super();
    this._controlWindow();
  }

  _controlWindow() {
    [this._btnOpen, this._btnClose, this._overlay].forEach(el =>
      el.addEventListener('click', this.toggle.bind(this))
    );
  }

  toggle() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
}
export default new AddRecipeView();
