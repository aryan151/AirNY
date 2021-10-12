import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../../store/reviews';

import styles from './AllReviews.module.css' 

const AllReviews = ({ listingId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => Object.values(state.reviews))
  const listingReviews = reviews.filter(review => Number(review.listingId) === Number(listingId))

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <>
      <div className={styles.reviewText}>All Reviews</div>
      <div>
        {!!listingReviews.length && listingReviews?.map((review) =>  
          <div className={styles.singleReview} key={review?.id}>
            <p className={styles.usernametag}>{review?.User?.username}</p>
            <p>{review?.rating}</p>
            <p>{review?.description}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default AllReviews