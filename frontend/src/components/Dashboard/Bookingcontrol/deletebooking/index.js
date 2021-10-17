import React from 'react';
import { Modal } from '../../../../context/Modal';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { fetchBookings, deleteBooking } from '../../../../store/bookings'  
import { fetchReviews } from '../../../../store/reviews';       
import { fetchListings } from '../../../../store/listings'  
import styles from '../../Dashboard.module.css'        

function DeleteBookingModal({ showDeleteBookingModal, setShowDeleteBookingModal, bookingId, userId }) {
  const dispatch = useDispatch()    
  const history = useHistory()  
  const [validationErrors, setValidationErrors] = useState([]) 
  const [confirmD, setConfirmD] = useState('');    

  useEffect(() => {
    const errors = []; 
    if (!(confirmD === 'DELETE')) errors.push("Type 'DELETE' to confirm Deletion")
    setValidationErrors(errors)  
  }, [confirmD]);
  

  const handleSubmit = async (e) => {  
    e.preventDefault();
    if (validationErrors > 0) return; 
    setShowDeleteBookingModal(false)
    await dispatch(deleteBooking(bookingId))  
    await dispatch(fetchListings());     
    await dispatch(fetchBookings());
    await dispatch(fetchReviews());
    history.push(`/users/${userId}`)      
  }  

  return (  
    <>
      {showDeleteBookingModal && ( 
        <Modal onClose={() => setShowDeleteBookingModal(false)}>
          <div className={styles.profileDeleteDivs}>
            <label>Type 'DELETE' to Confirm Deletion</label>
            <form onSubmit={handleSubmit}>
            <input
            placeholder=""  
            type="text"
            name="name"
            value={confirmD}
            onChange={(e) => setConfirmD(e.target.value)}
            required
            />
            <button type="submit"   disabled={validationErrors.length > 0}
                className={styles.deleteListingButton}>This Action Cannot be Reversed</button>
            </form>
            <button onClick={() => setShowDeleteBookingModal(false)} 
              className={styles.deleteListingButton}>Cancel</button>  
          </div>
        </Modal>
      )}
    </>
  );
}

export default DeleteBookingModal;    