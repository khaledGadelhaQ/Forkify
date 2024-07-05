import previewView from './previewView';

class BookmarksView extends previewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No Bookmarks yet! Find a recipe and bookmark it ;)';

  addHandlerRender = handler => {
    window.addEventListener('load', handler);
  };
}
export default new BookmarksView();
