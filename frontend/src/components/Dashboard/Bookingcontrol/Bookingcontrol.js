import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DeleteBookingModal from './deletebooking'
import EditBookingModal from './editbooking' 
import styles from '../Dashboard.module.css'    
  
const Bookingcontrol = ({ booking, userId }) => {
  

  const history = useHistory();
  const [showDeleteBookingModal, setShowDeleteBookingModal] = useState(false)    
  const [showEditBookingModal, setShowEditBookingModal ] = useState(false)

  const handleEditClick = (e) => {
    e.preventDefault();  
    setShowEditBookingModal(true)    
  }
  
  const handleDeleteClick = (e) => {  
    e.preventDefault();
    setShowDeleteBookingModal(true)    
  }      
  
  
  return (
    <div className={styles.buttonsDiv} key={booking?.id}>
      <div onClick={() => history.push(`/listings/${booking.Listing.id}`)}>
        <div>Listing - {booking?.Listing?.name}</div>
        <div>From - {booking?.startTime}</div>
        <div>To - {booking?.endTime}</div>
      </div>
      <div className={styles.threeButtons}> 
      <div>
        <button
            onClick={handleEditClick} 
            className={styles.buttons} 
          >
            Update 
          </button>
          {showEditBookingModal && <EditBookingModal  
          showEditBookingModal={showEditBookingModal}   
          setShowEditBookingModal={setShowEditBookingModal}  
          bookingId={booking.id} userId={userId} booking={booking}/>}  
        </div>



        <div>
        <button
            onClick={handleDeleteClick}
            className={styles.buttons} 
          >
            Delete
          </button>
          {showDeleteBookingModal && <DeleteBookingModal 
          showDeleteBookingModal={showDeleteBookingModal}    
          setShowDeleteBookingModal={setShowDeleteBookingModal} 
          bookingId={booking.id} userId={userId} />} 
        </div>
      </div>  
    </div>
  )
}

export default Bookingcontrol;