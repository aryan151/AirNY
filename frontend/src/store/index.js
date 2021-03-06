import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import sessionReducer from './session';
import listingsReducer from "./listings";
import reviewsReducer from "./reviews";
import { listingControlModalReducer, reviewControlModalReducer, bookingControlModalReducer } from "./controls";
import bookingsReducer from './bookings' 
import mapsReducer from './maps'
import searchReducer from "./search";
   
const rootReducer = combineReducers({
  session: sessionReducer,
  listings: listingsReducer,
  reviews: reviewsReducer,
  listingControl: listingControlModalReducer,
  reviewControl: reviewControlModalReducer,
  bookingControl: bookingControlModalReducer,
  bookings: bookingsReducer,
  maps: mapsReducer,
  search: searchReducer
}); 

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
