import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings } from '../../store/listings'
import { fetchBookings } from '../../store/bookings';
import { fetchReviews } from '../../store/reviews';
import { useParams } from 'react-router-dom';
import styles from './Dashboard.module.css';
import ListingControl from './Listingcontrol'
import Bookingcontrol from './Bookingcontrol';
import Reviewcontrol from './Reviewcontrol'; 

function Dashboard() {
   
  const dispatch = useDispatch();  
  const { userId } = useParams();

  const listings = useSelector(state => Object.values(state.listings))
  const mylistings = listings.filter(listings => Number(listings.userId) === Number(userId)) 

 
  const bookings = useSelector(state => Object.values(state.bookings))
  const mybookings = bookings.filter(booking => Number(booking.userId) === Number(userId))  
  

  const reviews = useSelector(state => ({ ...state.reviews }))
  const myreviews = Object.values(reviews).filter(review => Number(review.userId) === Number(userId))

  useEffect(() => { 
    dispatch(fetchListings());  
    dispatch(fetchBookings());
    dispatch(fetchReviews());
  }, [dispatch])

  return (
    <div className={styles.profileContainer}>
      <div>My Listings</div>
      <div className={styles.smallDiv}>
        {mylistings && mylistings.map((listing) =>
          <ListingControl key={listing?.id} listing={listing} userId={userId} />
        )}
      </div>
      <div>My Reviews</div>
      <div className={styles.smallDiv}>
        {myreviews && myreviews.map((review) =>
          <Reviewcontrol key={review?.id} review={review} userId={userId} />   
        )}
      </div>
      <div>My Bookings</div>
      <div className={styles.smallDiv}> 
        {mybookings && mybookings.map((booking) =>
          <Bookingcontrol key={booking?.id} booking={booking} userId={userId} />
        )}
      </div>
    </div>
  )
}

export default Dashboard;