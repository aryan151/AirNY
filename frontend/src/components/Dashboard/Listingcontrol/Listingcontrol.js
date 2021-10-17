import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DeleteListingModal from './deletelisting';
import EditListingModal from './EditListingModal';
import styles from '../Dashboard.module.css'    
  
const ListingControl= ({ listing, userId }) => {
    
  const history = useHistory();
  const [showDeleteListingModal, setShowDeleteListingModal] = useState(false)    
  const [showEditListingModal, setShowEditListingModal ] = useState(false)

  const handleEditClick = (e) => {
    e.preventDefault();
    setShowEditListingModal(true)    
  }

  const handleDeleteClick = (e) => {
    e.preventDefault();
    setShowDeleteListingModal(true)    
  }

  return (       
    <div className={styles.buttonsDiv} key={listing?.id}>
      <img className={styles.imageCard} src={listing?.Images[0].url} alt='' 
      onClick={(e) => {
        e.preventDefault();
        history.push(`/listings/${listing.id}`)
      }}/>
 
      <div className={styles.threeButtons}>
  

      <div>
        <button
            onClick={handleEditClick} 
            className={styles.buttons} 
          >
            Edit
          </button>
          {showEditListingModal && <EditListingModal  
          showEditListingModal={showEditListingModal}   
          setShowEditListingModal={setShowEditListingModal}  
          listingId={listing.id} userId={userId} />}  
        </div>



        <div>
        <button
            onClick={handleDeleteClick}
            className={styles.buttons} 
          >
            Delete
          </button>
          {showDeleteListingModal && <DeleteListingModal 
          showDeleteListingModal={showDeleteListingModal}   
          setShowDeleteListingModal={setShowDeleteListingModal} 
          listingId={listing.id} userId={userId} />} 
        </div>
      </div>
    </div>
  )
}

export default ListingControl;