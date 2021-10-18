import React from 'react';
import { Modal } from '../../../../context/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { useHistory } from 'react-router-dom'
import { fetchListings } from '../../../../store/listings'  
import { fetchBookings } from '../../../../store/bookings';   
import { fetchReviews, changeReview } from '../../../../store/reviews';  
import styles from '../../Dashboard.module.css'     

function EditReviewModal({ showEditReviewModal, setShowEditReviewModal, review, reviewId, userId }) {
  const dispatch = useDispatch()  
  const history = useHistory()   
  
  const [description, setDescription] = useState(review.description)
  const [rating, setRating] = useState(review.rating)
  const [validationErrors, setValidationErrors] = useState([]) 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const UpdatedReview = {  
      id: userId,  
      reviewId,
      rating,
      description
    }

    let newReview = await dispatch(changeReview(UpdatedReview)) 
    if (newReview) {
      
      setShowEditReviewModal(false)    
      await dispatch(changeReview(UpdatedReview))           
      await dispatch(fetchListings());  
      await dispatch(fetchBookings());
      await dispatch(fetchReviews());
      history.push(`/users/${userId}`)    
    }
  }
  


  return (
    <>  
      {showEditReviewModal && ( 
        <Modal onClose={() => setShowEditReviewModal(false)}>
          <form className={styles.reviewForm} onSubmit={handleSubmit}>
            <div className={styles.reviewText}>Update This Review</div> 
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className={styles.selectComponents}
            >
              <option disabled value='initial'>Rating</option>
              <option value={5}>5</option>
              <option value={4}>4</option>
              <option value={3}>3</option>
              <option value={2}>2</option>
              <option value={1}>1</option>
            </select>
            <textarea
              placeholder="Share Your Experience!"
              name="review"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textareaComponents}
            />
            <button
              type="submit"
              disabled={validationErrors.length > 0}
              className={styles.reviewFormButton}
            >
              Submit 
            </button>
          </form>
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;      