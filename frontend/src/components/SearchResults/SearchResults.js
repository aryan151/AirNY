import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';   
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { searchResults } from '../../store/search';  
import MapContainer from '../Maps/index'
import styles from './Searchresults.css'    
     
const SearchResults  = () => {      
    
  const dispatch = useDispatch();
  const location = useLocation();   
  const listings = useSelector(state => Object.values(state.listings)); 

useEffect(() => {
    dispatch(searchResults((location.state.search)))  
  }, [dispatch, location]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.spotContainer}>
        <div className={styles.courtDiv}>All Locations</div>
        <hr/>
        {!!listings.length && listings.map((listing) => 
          <div key={listing.id} className={styles.spotCard}>
            <NavLink key={listing.id} className={styles.aCard} to={`/listings/${listing.id}`}>
              <img className={styles.imageCard} src={listing?.Images[0].url} alt='' />
              <div className={styles.nameDiv}>
                <div className={styles.infoDiv}>  
                  <div className={styles.nameDiv1}>{listing?.name}</div>
                  <div className={styles.nameDiv2}>{listing?.borough}, {listing?.neighborhood}</div>
                  <div className={styles.priceDiv}>${listing?.price} per day</div>
                </div>
              </div>
            </NavLink>
          </div>
        )}
      </div>
      <div className={styles.mapsContainer}><MapContainer listings={listings} /></div>
    </div >
  )
}

export default SearchResults;   