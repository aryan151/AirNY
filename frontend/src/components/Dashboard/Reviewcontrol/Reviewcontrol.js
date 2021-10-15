import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../Dashboard.module.css';

const Reviewcontrol = ({ review, userId }) => {  

  const history = useHistory();
  const reviewpart = review?.description.slice(0, 16) + '...'
  const listingid = review.Listing.id; 
  return (
    <div className={styles.buttonsDiv} key={review?.id}>
      <div onClick={() => history.push(`/listings/${listingid}`)}>
        <div>Listing: {review?.Listing?.name}</div>
        <div>Rating: {review?.rating}</div>
        <div>Review: {reviewpart}</div>
      </div>
      <div className={styles.threeButtons}>
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

export default Reviewcontrol; 