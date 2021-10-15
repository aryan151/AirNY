import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../Dashboard.module.css';


const Bookingcontrol = ({ booking, userId }) => {
  
  const history = useHistory();  
  
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
            className={styles.buttons}
          >
            Edit  
          </button>
    
        </div>
        <div>
          <button 
            className={styles.buttons}
          >
            Delete  
          </button>
    
        </div>
      </div>
    </div>
  )
}

export default Bookingcontrol;