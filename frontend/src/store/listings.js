import { csrfFetch } from "./csrf";
  
const SET_LISTINGS = 'listings/setListings'
const ADD_LISTING = 'listings/addListing'
const UPDATE_LISTING = 'listing/updateListing'
const REMOVE_LISTING = 'listing/removeListing'    

const initialState = {};


const setListings = (listings) => ({
  type: SET_LISTINGS,
  listings
}); 

const addListing = (listing) => ({ 
  type: ADD_LISTING,
  listing
})

const updateListing = (listing) => ({
  type: UPDATE_LISTING,
  listing
})   

const removeListing = (listingId) => ({
  type: REMOVE_LISTING,
  listingId
})

export const fetchListings = () => async (dispatch) => {
  const res = await fetch('/api/listings');
  const listings = await res.json();
  dispatch(setListings(listings)) 
  //return listings
};

export const putListing = (home) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${home.id}`, {
    method: 'PUT', 
    body: JSON.stringify(home)
  });

  if (res.ok) { 
    const updatedHome = await res.json()
    dispatch(updateListing(updatedHome))   
    return updatedHome 
  }
}

export const postListing = (home) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings`, {
    method: 'POST', 
    body: JSON.stringify(home)
  })

  if (res.ok) {
    const listing = await res.json();
    dispatch(addListing(listing));
    return listing;
  }
}

export const deleteListing = (listingId) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${listingId}`, {
    method: 'DELETE' 
  })

  if (res.ok) {
    dispatch(removeListing(listingId))
  }
}



const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTINGS:
      const newState = { ...state };
      action.listings.forEach(listing => {
        newState[listing.id] = listing;  
      });
      return newState;
    case ADD_LISTING: {
      const newState = { ...state }
      newState[action.listing.id] = action.listing
      return newState
    }
    case UPDATE_LISTING: {
      const newState = { ...state }
      newState[action.listing.id] = action.listing
      return newState
    }
    case REMOVE_LISTING: {
      const newState = { ...state }
      delete newState[action.listingId]  
      return newState    
    }
    default:
      return state;
  }
}

export default listingsReducer;  