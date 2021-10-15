import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EditListingModal from './EditListingModal';
import styles from '../Dashboard.module.css'    
import { Link } from 'react-router-dom';

const ListingControl= ({ listing, userId }) => {

  const history = useHistory();

  
  return (       
    <div className={styles.buttonsDiv} key={listing?.id}>
      <img className={styles.imageCard} src={listing?.Images[0].url} alt='' 
      onClick={(e) => {
        e.preventDefault();
        history.push(`/listings/${listing.id}`)
      }}/>
      <div>{listing?.name}</div>

      <div className={styles.threeButtons}>
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