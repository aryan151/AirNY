import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings } from '../../store/listings'
import { fetchBookings } from '../../store/bookings';
import { fetchReviews } from '../../store/reviews';
import { useParams } from 'react-router-dom';
import ListingControl from './Listingcontrol'
import Bookingcontrol from './Bookingcontrol';
import Reviewcontrol from './Reviewcontrol'; 
import styles from  './Dashboard.module.css';  
import './DashMod.css'

function Dashboard() {
  
  const [toggleTab, setToggleTab] = useState(1); 
  const toggle = (index) => { setToggleTab(index) } 

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
    <div className="container"> 
      <div className="bloc-tabs">
      <button
          className={toggleTab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggle(1)} 
        >
          My Listings
        </button>
        <button
          className={toggleTab === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggle(2)} 
        >
          My Reviews
        </button>
        <button
          className={toggleTab === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggle(3)}  
        >
          My Bookings
        </button>
      </div>  

      <div className="content-tabs">
        <div className={toggleTab === 1 ? "content  active-content" : "content"}>
            <div className={styles.smallDiv}>
              {mylistings && mylistings.map((listing) =>
                <ListingControl key={listing?.id} listing={listing} userId={userId} />
              )}
            </div> 
          </div>
        <div className={toggleTab === 2 ? "content  active-content" : "content"}>
          <div className={styles.smallDiv}>
            {myreviews && myreviews.map((review) =>
              <Reviewcontrol key={review?.id} review={review} userId={userId} />   
            )}
          </div>
        </div>
        <div className={toggleTab === 3 ? "content  active-content" : "content"}>
          <div className={styles.smallDiv}> 
            {mybookings && mybookings.map((booking) =>
              <Bookingcontrol key={booking?.id} booking={booking} userId={userId} />
            )}
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Dashboard;