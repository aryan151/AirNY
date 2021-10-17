import React from 'react';
import { Modal } from '../../../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteListing, fetchListings } from '../../../../store/listings'  
import { fetchBookings } from '../../../../store/bookings';
import { fetchReviews } from '../../../../store/reviews';  
import styles from './delete.module.css'    

function DeleteListingModal({ showDeleteListingModal, setShowDeleteListingModal, listingId, userId }) {
  const dispatch = useDispatch()  
  const history = useHistory() 
  const handleSubmit = async (e) => {  
    e.preventDefault();
    setShowDeleteListingModal(false)
    await dispatch(deleteListing(listingId))
    await dispatch(fetchListings());  
    await dispatch(fetchBookings());
    await dispatch(fetchReviews());
    history.push(`/users/${userId}`)      
  }

  return (
    <>
      {showDeleteListingModal && ( 
        <Modal onClose={() => setShowDeleteListingModal(false)}>
          <div className={styles.profileDeleteDivs}>
            <label>Confirm Deletion</label>
            <form onSubmit={handleSubmit}>
              <button type="submit"
                className={styles.deleteListingButton}>This Action Cannot be Reversed</button>
            </form>
            <button onClick={() => setShowDeleteListingModal(false)} 
              className={styles.deleteListingButton}>Cancel</button>  
          </div>
        </Modal>
      )}
    </>
  );
}

export default DeleteListingModal;  