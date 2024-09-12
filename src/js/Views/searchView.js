class SearchView {
  #parentEl = document.querySelector('.search');
  #query;

  getQuery() {
    this.#query = this.#parentEl.querySelector('.search__field').value;
    this.#clear();
    return this.#query;
  }

  #clear() {
    this.#parentEl.querySelector('.search__field').value = '';
  }

  addHandlerRender(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      // preventing the form form reloading the page
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
