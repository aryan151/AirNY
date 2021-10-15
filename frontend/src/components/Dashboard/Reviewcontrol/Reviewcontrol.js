import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../Dashboard.module.css';
import EditReviewModal from './editreview';
import DeleteReviewModal from './deletereview';


const Reviewcontrol = ({ review, userId }) => {    

  const history = useHistory();
  const reviewpart = review?.description.slice(0, 16) + '...'
  const listingid = review.Listing.id; 

  const [showDeleteReviewModal, setShowDeleteReviewModal] = useState(false)    
  const [showEditReviewModal, setShowEditReviewModal ] = useState(false)

  const handleEditClick = (e) => {
    e.preventDefault();
    setShowEditReviewModal(true)    
  }

  const handleDeleteClick = (e) => { 
    e.preventDefault();
    setShowDeleteReviewModal(true)  
  }



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
            onClick={handleEditClick} 
            className={styles.buttons} 
          >
            Edit
          </button>  
          {showEditReviewModal && <EditReviewModal    
          showEditReviewModal={showEditReviewModal}     
          setShowEditReviewModal={setShowEditReviewModal} 
          reviewId={review.id} userId={userId} />}  
        </div>



        <div>
        <button
            onClick={handleDeleteClick}
            className={styles.buttons} 
          > 
            Delete
          </button>
          {showDeleteReviewModal && <DeleteReviewModal  
          showDeleteReviewModal={showDeleteReviewModal}   
          setShowDeleteReviewModal={setShowDeleteReviewModal} 
          reviewId={review.id} userId={userId} />}  
        </div>
      </div>
    </div>
  )
}

export default Reviewcontrol; 