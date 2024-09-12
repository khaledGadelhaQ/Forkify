import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkUp() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;

    // page 1 and othe pages (only next button)
    if (curPage === 1 && numPages > 1) {
      return this._getNextPage(curPage + 1);
    }
    // a middle page (prv and next buttons)
    if (curPage > 1 && curPage < numPages) {
      return this._getNextPage(curPage + 1) + this._getPrvPage(curPage - 1);
    }
    // last page (prv)
    if (curPage > 1 && curPage === numPages) {
      return this._getPrvPage(curPage - 1);
    }
    // page 1 and no other pages (no buttons)
    return '';
  }

  _getNextPage(page) {
    return `
        <button data-goto="${page}" class=" btn--inline pagination__btn--next">
            <span>Page ${page}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;
  }

  _getPrvPage(page) {
    return `
        <button data-goto="${page}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page}</span>
        </button>
    `;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      handler(+btn.dataset.goto);
    });
  }
}
export default new PaginationView();
