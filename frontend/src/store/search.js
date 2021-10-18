import { csrfFetch } from "./csrf";

const SET_SEARCH = 'spots/setSearch'

const initialState = {};

const setSearch = (search) => ({
  type: SET_SEARCH,
  search
});

export const searchResults = (searchstring) => async (dispatch) => {
  const res = await csrfFetch('/api/listings/search', {
    method: 'POST',
    body: JSON.stringify({ searchstring })  
  });

  if (res.ok) {
    const FoundHomes = await res.json();
    dispatch(setSearch(FoundHomes))
    return FoundHomes  
  }
};   

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH: {
      const newState = {};
      action.search.forEach(result => {
        newState[result.id] = result;
      })
      return newState;
    }
    default:
      return state;
  }
}

// Export the reducer
export default searchReducer;