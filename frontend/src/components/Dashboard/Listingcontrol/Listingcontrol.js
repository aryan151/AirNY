import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DeleteListingModal from '../DeleteListingModal/index';
import styles from '../Dashboard.module.css'    
import { Link } from 'react-router-dom';

const ListingComponent = ({ listing, userId }) => {

  const history = useHistory();

  
  return (
    <div className={styles.buttonsDiv} key={listing?.id}>
      <div>{listing?.name}</div>

      <div className={styles.view}>
        <Link key={listing.id} to={`/listings/${listing.id}`}> 
        <img className={csss.imageCard} src={listing?.Images[0].url} alt='' />
        </Link> 
      </div>



        <div>
          <button>
            Update 
          </button>
        </div>
        <div>
          <button>
            Delete
          </button>
        </div>


    </div>

  )
}

export default ListingComponent;