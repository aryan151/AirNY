import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../Dashboard.module.css';


const Bookingcontrol = ({ booking, userId }) => {
  
  const history = useHistory();
  
  return (
    <div className={styles.buttonsDiv} key={booking?.id}>
      <div>
        <div>Where - {booking?.Listing?.name}</div>
        <div>From - {booking?.startTime}</div>
        <div>To - {booking?.endTime}</div>
      </div>
      <div className={styles.threeButtons}>
        <div>  
          <form onSubmit={(e) => {
            e.preventDefault();
            history.push(`/listings/${booking.Listing.id}`)
          }}>  
            <button
              type="submit"
              className={styles.buttons}
            >
              View
            </button>
          </form>
        </div>
        <div>
          <button

            className={styles.buttons}
          >
            <p>Edit</p>
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