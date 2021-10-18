import React from 'react';
import { Modal } from '../../../../context/Modal';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { fetchBookings, changeBooking } from '../../../../store/bookings'   
import { fetchReviews } from '../../../../store/reviews';       
import { fetchListings } from '../../../../store/listings'  
import { DateRangePicker } from 'react-date-range';  
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import moment from 'moment';     
import styles from '../../Dashboard.module.css'          
       

function EditBookingModal({ showEditBookingModal, setShowEditBookingModal, bookingId, userId, booking}) {
  const dispatch = useDispatch()     
  const history = useHistory()   


  const [startDate, setStartDate] = useState(booking.startDate);
  const [endDate, setEndDate] = useState(booking.endDate);  

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  };
  
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstdate = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`
    const lastdate  = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`

      
    const Upbooking = {
      id: bookingId,
      userId,
      listingId: booking.listingId,
      startTime : firstdate,
      endTime: lastdate
    }

    let ModifyBooking = await dispatch(changeBooking(Upbooking))
    if (ModifyBooking) { 
        setShowEditBookingModal(false)
        await dispatch(changeBooking(bookingId))  
        await dispatch(fetchListings());     
        await dispatch(fetchBookings());
        await dispatch(fetchReviews());
        history.push(`/users/${userId}`)   
    }
  }
 
  return (  
    <>
      {showEditBookingModal && (   
        <Modal onClose={() => setShowEditBookingModal(false)}>  
      <div className="datepickersearch">   
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} minDate={moment().toDate()}/>

        <button onClick={handleSubmit} disabled={(!startDate && !endDate)}>Update Booking</button>
      </div>  
        </Modal>
      )}
    </>
  );
}

export default EditBookingModal;    