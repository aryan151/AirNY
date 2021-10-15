import React from 'react';
import { Modal } from '../../../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { fetchListings } from '../../../../store/listings'  
import { fetchBookings } from '../../../../store/bookings';   
import { fetchReviews } from '../../../../store/reviews';  
import styles from '../../Dashboard.module.css'     

function EditReviewModal({ showEditReviewModal, setShowEditReviewModal, reviewId, userId }) {
  const dispatch = useDispatch()  
  const history = useHistory()   
    
  const handleSubmit = async (e) => {         
    e.preventDefault();
    setShowEditReviewModal(false)  
    //await dispatch(putListing(listingId))    
    await dispatch(fetchListings());  
    await dispatch(fetchBookings());
    await dispatch(fetchReviews());
    history.push(`/users/${userId}`)      
  }

  return (
    <>  
      {showEditReviewModal && ( 
        <Modal onClose={() => setShowEditReviewModal(false)}>
          <div className={styles.profileDeleteDivs}>
            <label>Edit Listing</label>
            <form onSubmit={handleSubmit}>
              <button type="submit"
                className={styles.deleteListingButton}>EDIT TEST</button>
            </form>
            <button onClick={() => setShowEditReviewModal(false)} 
              className={styles.deleteListingButton}>Cancel</button>  
          </div>
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;      