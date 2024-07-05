import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import { CLOSE_FORM_TIME } from './confing.js';
import recipeView from './Views/recipeView.js';
import searchView from './Views/searchView.js';
import resultsView from './Views/resultsView.js';
import paginationView from './Views/paginationView.js';
import bookmarksView from './Views/bookmarksView.js';
import addRecipeView from './Views/addRecipeView.js';

const getRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    // 0) update the results
    resultsView.update(model.loadSearchResultsPage());
    // 1) render spinner
    recipeView.renderSpinner();
    // 2) loading recipe (Model)
    await model.loadRecipe(id);
    // 3) Render recipe (RecipeView)
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderErrorMessage();
  }
};

const getSearchResults = async () => {
  try {
    const query = searchView.getQuery();
    /// render the spinner
    resultsView.renderSpinner();
    /// loading the Search Results
    await model.loadSearchResults(query);
    /// render the results
    resultsView.render(model.loadSearchResultsPage());
    // render the Pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.renderErrorMessage();
  }
};

const controlPagination = page => {
  try {
    // render the page
    resultsView.render(model.loadSearchResultsPage(page));
    // render the pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    throw err;
  }
};

const controlServings = newServing => {
  /// update the state of the recipe with the new servings
  model.updateServings(newServing);
  /// render the recipe
  recipeView.update(model.state.recipe);
};

const controlBookMark = () => {
  if (model.state.recipe.bookmarked)
    model.deleteBookMark(model.state.recipe.id);
  else model.addBookMark(model.state.recipe);

  recipeView.update(model.state.recipe);
  loadBookmark();
};

const loadBookmark = () => {
  // rendering bookmarks stored in the local storage
  bookmarksView.render(model.state.bookmarks);
};

const controlUploadRecipe = async function(data) {
  try {
    // render spinner
    addRecipeView.renderSpinner();
    // upload the recipe
    await model.uploadRecipe(data);   
    // render the recipe
    recipeView.render(model.state.recipe);
    // show success message
    addRecipeView.renderMessage('Your recipe was successfully uploaded :)');  
    // update the bookmarks
    loadBookmark();
    // update the window URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    
    setTimeout(()=>{
      addRecipeView.toggle();
      // we reload the page to be able add a recipe again
      window.location.reload(); 
    }, CLOSE_FORM_TIME * 1000)
    
  } catch (err) {
    addRecipeView.renderErrorMessage(
      'Wrong ingredints Format! Please use the correct Format :)'
    );
    setTimeout(()=>{
      // we reload the page to be able add a recipe again
      window.location.reload(); 
    }, CLOSE_FORM_TIME * 1000)

  }
};

(function () {
  // publisher-subscribur pattern
  console.log('Welcome to Forkify!');
  bookmarksView.addHandlerRender(loadBookmark);
  recipeView.addHandlerRender(getRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookMark(controlBookMark);
  searchView.addHandlerRender(getSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlUploadRecipe);
})();
