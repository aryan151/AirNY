import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchListings } from '../../store/listings';
import csss from './Listings.module.css'  

const Listings  = () => {    
  
  const dispatch = useDispatch();
  const listings = useSelector(state => Object.values(state.listings)); 
  console.log(listings)  


  useEffect(() => {
    dispatch(fetchListings());  
  }, [dispatch]);

  return (
    <div className={csss.spotsPage}>
      <div className={csss.spotContainer}>
        {!!listings.length && listings.map((listing) => 
          <div key={listing.id} className={csss.spotCard}>
            <Link className={csss.aCard} key={listing.id} to={`/listings/${listing.id}`}> 
              <img className={csss.imageCard} src={listing?.Images[0].url} alt='' />
              <div className={csss.nameDiv1}>{listing?.name}</div>
              <div className={csss.priceDiv}>${listing?.price} / Day </div>
              <div className={csss.nameDiv2}>{listing?.borough} - {listing?.neighborhood}</div> 
            </Link>
          </div>
        )}
      </div>
      {/* <div>
        {map}
      </div> */} 
    </div>   
  )
}

export default Listings;  