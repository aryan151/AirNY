import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EditListingModal from './EditListingModal';
import styles from '../Dashboard.module.css'    
import { Link } from 'react-router-dom';

const ListingControl= ({ listing, userId }) => {

  const history = useHistory();

  
  return (
    <div className={styles.buttonsDiv} key={listing?.id}>
      <div>{listing?.name}</div>

      <div className={styles.threeButtons}>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
            history.push(`/listings/${listing.id}`)
          }}>
            <button className={styles.buttons}
              type="submit"
            >
              View
            </button>
          </form>
        </div>  
        <div>
        <EditListingModal listing={listing}/>   
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

export default ListingControl;