import React from 'react';
import { Modal } from '../../../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { putListing, fetchListings } from '../../../../store/listings'  
import { fetchBookings } from '../../../../store/bookings';
import { fetchReviews } from '../../../../store/reviews';  
import styles from './edit.module.css'    

function EditListingModal({ showEditListingModal, setShowEditListingModal, listingId, userId }) {
  const dispatch = useDispatch()  
  const history = useHistory()  
    
  const handleSubmit = async (e) => {      
    e.preventDefault();
    setShowEditListingModal(false)
    //await dispatch(putListing(listingId))    
    await dispatch(fetchListings());  
    await dispatch(fetchBookings());
    await dispatch(fetchReviews());
    history.push(`/users/${userId}`)      
  }
  
  return (
    <>  
      {showEditListingModal && ( 
        <Modal onClose={() => setShowEditListingModal(false)}>



          <div className={styles.profileDeleteDivs}>
            <label>Edit Listing</label>

 
            
            <form onSubmit={handleSubmit}>
              <button type="submit"
                className={styles.deleteListingButton}>EDIT TEST</button>
            </form>





            <button onClick={() => setShowEditListingModal(false)} 
              className={styles.deleteListingButton}>Cancel</button>  
          </div>
        </Modal>
      )}
    </>
  );
}

export default EditListingModal;    