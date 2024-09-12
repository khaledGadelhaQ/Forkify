import { API_URL, RECIPES_PER_PAGE, FIRST_PAGE, KEY } from './confing';
import { AJAX } from './helpers';

export const state = {
  recipe: {
    bookmarked: false,
  },
  search: {
    query: '',
    results: [],
    page: FIRST_PAGE,
    resultsPerPage: RECIPES_PER_PAGE,
  },
  bookmarks: [],
};

const getDataObject = data => {
  const recipe = data.data.recipe;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    img: recipe.image_url,
    ingredients: recipe.ingredients,
    sourceUrl: recipe.source_url,
    savingTime: recipe.cooking_time,
    servings: recipe.servings,
    ...(recipe.key && {key: recipe.key}),
  };
};

export const loadRecipe = async id => {
  try {
    const data = await AJAX(`${API_URL}/${id}`);
    state.recipe = getDataObject(data);
    if (state.bookmarks.some(el => el.id == id)) state.recipe.bookmarked = true;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async query => {
  try {
    state.search.query = query;
    state.search.page = FIRST_PAGE;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    state.search.results = data.data.recipes.map(el => {
      return {
        id: el.id,
        title: el.title,
        publisher: el.publisher,
        img: el.image_url,
        ...(el.key && {key: el.key}),
      };
    });
  } catch (err) {
    throw err;
  }
};

export const loadSearchResultsPage = (page = state.search.page) => {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = newServings => {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

const storeBookmarks = () => {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookMark = recipe => {
  // adding the recipe to the bookmarks array
  state.bookmarks.push(recipe);
  // checking if the current recipe match the recipe object then mark it as bookmarked
  if (recipe.id == state.recipe.id) state.recipe.bookmarked = true;
  // updating bookmarks stored in the local storage
  storeBookmarks();
};

export const deleteBookMark = id => {
  // delete the bookmark from the bookmarks array
  const index = state.bookmarks.findIndex(el => el.id == id);
  state.bookmarks.splice(index, 1);
  // checking if the current recipe match the recipe object then mark it as NOT bookmarked
  if (id == state.recipe.id) state.recipe.bookmarked = false;
  // updating bookmarks stored in the local storage
  storeBookmarks();
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(el => {
        return el[0].startsWith('ingredient') && el[1] != '';
      })
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        if (ingArr.length !== 3) throw new Error();
        const [quantity, unit, description] = ingArr;
        return {
          quantity: quantity ? +quantity : null,
          unit,
          description,
        };
      });
    const recipe = {
      title: newRecipe.title,
      image_url: newRecipe.image,
      source_url: newRecipe.sourceUrl,
      cooking_time: newRecipe.cookingTime,
      servings: newRecipe.servings,
      publisher: newRecipe.publisher,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = getDataObject(data);
    addBookMark(state.recipe);
  } catch (err) {
    throw err; 
  }
};

(function () {
  localStorage.clear();
  const data = localStorage.getItem('bookmarks');
  if (!data) return;
  state.bookmarks = JSON.parse(data);
})();
