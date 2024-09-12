import PreviewView from './previewView';

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No Recipes Match Your Search 😢, Try Again!';
}
export default new ResultsView();
