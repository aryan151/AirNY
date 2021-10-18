import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchListings } from '../../store/listings'; 
import styles from './OneListing.module.css' 
import AllReviews from './AllReviews'
import NewReview from './NewReview'
import Booking from './NewBooking/NewBooking';
import MapContainer from '../Maps'      
import Slideshow from './SlideShow';  
  
const OneListing = () => {  
   
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const { listingId } = useParams();
  const listings = useSelector(state => Object.values(state.listings))  
  const Home = listings.filter(listing => Number(listing.id) === Number(listingId)) 
  const imagepack = [Home[0]?.Images[0]?.url, Home[0]?.Images[1]?.url, Home[0]?.Images[2]?.url,
  Home[0]?.Images[3]?.url, Home[0]?.Images[4]?.url] 
  const [showSlides, setShowSlides] = useState(false)     
  const [showBooking, setShowBooking] = useState(false) 
  const handleSlides = (e) => { 
    e.preventDefault();
    setShowSlides(true)  
  }


  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);  

  return (
    <div className={styles.frost}>   
    <div className={styles.singleSpot}>
      <div className={styles.nameSpot}>
        <h2 className={styles.courtName}>{Home[0] && Home[0]?.name}</h2>
        <p>{Home[0] && Home[0]?.borough}, {Home[0] && Home[0]?.neighborhood}</p>  
      </div>
      <div className={styles.twoImageContainers}>
        <img className={styles.spotImage0} src={Home[0]?.Images[0]?.url} alt=''/>
        <div className={styles.gridImages}>
          <div>
            <img className={styles.spotImage1} src={Home[0]?.Images[1]?.url} alt='' />
          </div>
          <div>
            <img className={styles.spotImage2} src={Home[0]?.Images[2]?.url} alt='' />
          </div>
          <div>
            <img className={styles.spotImage3} src={Home[0]?.Images[3]?.url} alt='' />
          </div>
          <div>
            <img className={styles.spotImage4} src={Home[0]?.Images[4]?.url} alt='' />
          </div>
        </div>
      </div>
      <div>
        <button
            onClick={handleSlides}   
            className={styles.buttons}  
          >   
          Gallery
          </button>  
          {showSlides && <Slideshow    
          showSlides={showSlides}     
          setShowSlides={setShowSlides}   
          images={imagepack} listingId={listingId}/>}    
        </div> 

      <div className={styles.Summary} hidden={showBooking} onClick={() => setShowBooking(true)}>{`Bookings are avalible!`}</div>
      {showBooking && <div className={styles.midContainer}>  
         <div  hideForm={() => setShowBooking(false)}>
          <Booking /> 
        </div>
      </div> }
      <hr/>
      <div className={styles.reviewContainer}>
          <div className={styles.allreviewpage}>
              <AllReviews listingId={listingId} /> 
          </div>
          <div className={styles.reviewForm}>
              {sessionUser ? <NewReview /> : ''} 
          </div>
      </div>  
      <div className={styles.singleSpotContainer}>
        <MapContainer listings={Home} />
      </div>
      </div>
      
    </div>
  )    
}

export default OneListing; 