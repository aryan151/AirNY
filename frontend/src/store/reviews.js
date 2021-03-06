import { csrfFetch } from "./csrf";

const SET_REVIEWS = 'reviews/setReviews'
const ADD_REVIEW = 'reviews/addReview'
const UPDATE_REVIEW = 'reviews/updateReview'
const REMOVE_REVIEW = 'reviews/removeReview'

const initialState = {};  


const setReviews = (reviews) => ({
  type: SET_REVIEWS,
  reviews
})

const addReview = (review) => ({
  type: ADD_REVIEW,
  review
})

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review
})

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})


export const fetchReviews = () => async (dispatch) => {
  const res = await fetch('/api/reviews');
  const reviews = await res.json();
  dispatch(setReviews(reviews))
}

export const changeReview = (review) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: 'PUT',
    body: JSON.stringify(review) 
  })

  if (res.ok) {
    const updatedReview = await res.json()
    dispatch(updateReview(updatedReview)) 
    return updatedReview 
  }
}
export const postReview = (review) => async (dispatch) => {
  const res = await csrfFetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify(review)
  })

  if (res.ok) {
    const newReview = await res.json()
    dispatch(addReview(newReview))
    return newReview
  }
}

export const deleteReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    dispatch(removeReview(reviewId))
  }
}




// Define a reducer
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS: {
      const newState = {}
      action.reviews.forEach(review => {
        newState[review.id] = review
      })
      return newState
    }
    case ADD_REVIEW: {
      const newState = { ...state }
      newState[action.review.id] = action.review
      return newState
    }
    case REMOVE_REVIEW: {
      const newState = { ...state }
      delete newState[action.reviewId]
      return newState
    }
    default:
      return state;
  }
}

// Export the reducer
export default reviewsReducer;