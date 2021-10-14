import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../Dashboard.module.css';

const Reviewcontrol = ({ review, userId }) => {

  const history = useHistory();
  const reviewpart = review?.description.slice(0, 16) + '...'

  return (
    <div className={styles.buttonsDiv} key={review?.id}>
      <div>
        <div>Listing: {review?.Listing?.name}</div>
        <div>Rating: {review?.rating}</div>
        <div>Review: {reviewpart}</div>
      </div>
      <div className={styles.threeButtons}>
        <div>
          <button
            onClick={() => history.push(`/listings/${review.Listing.id}`)}
            className={styles.buttons}
          >
            View
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

export default Reviewcontrol; 