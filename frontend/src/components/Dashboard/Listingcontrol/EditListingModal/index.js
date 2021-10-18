import React from 'react';
import { useEffect, useState } from 'react';
import { Modal } from '../../../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { changeListing, fetchListings } from '../../../../store/listings'  
import { fetchBookings } from '../../../../store/bookings';
import { fetchReviews } from '../../../../store/reviews';            
import styles from './edit.module.css'    

function EditListingModal({ showEditListingModal, setShowEditListingModal, listingId, userId, listing }) {
  
  const dispatch = useDispatch();    
  const history = useHistory();   

  const [name, setName] = useState(listing.name); 
  const [description, setDescription] = useState(listing.description); 
  const [price, setPrice] = useState(listing.price); 
  const [address, setAddress] = useState(listing.address);
  const [borough, SetBorough] = useState(listing.borough);
  const [neighborhood, SetNeighborhood] = useState(listing.neighborhood);
  const [latitude, setLatitude] = useState(listing.latitude); 
  const [longitude, setLongitude] = useState(listing.longitude);
  const [IMG1, setIMG1] = useState(listing.Images[0].url)
  const [IMG2, setIMG2] = useState(listing.Images[1].url)
  const [IMG3, setIMG3] = useState(listing.Images[2].url)
  const [IMG4, setIMG4] = useState(listing.Images[3].url) 
  const [IMG5, setIMG5] = useState(listing.Images[4].url)  
  const [validationErrors, setValidationErrors] = useState([])    
  const boroughs = ['Brooklyn', 'Bronx', 'Manhattan', 'Queens', 'Staten Island']          
    


  useEffect(() => {
    const errors = [];
    if (name.length === 0) errors.push("Please enter a Name")
    if (description.length === 0) errors.push("Please Describe your Home")
    if (price === 0) errors.push("Please Enter a Price")
    if (address.length === 0) errors.push("Please enter an Address")
    if (!neighborhood) errors.push("State field is required")    
    if (!latitude) errors.push("Please Enter a proper value")
    if (!longitude) errors.push("Please Enter a proper value")
 
    if (!IMG1) errors.push("Image field is required")
    if (!IMG2) errors.push("Image field is required")
    if (!IMG3) errors.push("Image field is required")
    if (!IMG4) errors.push("Image field is required")
    if (!IMG5) errors.push("Image field is required")  
    setValidationErrors(errors)  
  }, [name, description, price, address, borough, neighborhood, latitude, longitude, IMG1, IMG2, IMG3, IMG4, IMG5]);



  const handleSubmit = async (e) => {      
    e.preventDefault();

    if (validationErrors > 0) return;  

    const UpdateHome = { id: listingId, name, description, price, address, borough, neighborhood, latitude, longitude, IMG1, IMG2, IMG3, IMG4, IMG5 }

    let Updated = await dispatch(changeListing(UpdateHome))   
    if (Updated) {
      setShowEditListingModal(false)    
      await dispatch(changeListing(UpdateHome));  
      await dispatch(fetchListings())
      await dispatch(fetchBookings());  
      await dispatch(fetchReviews()); 
      history.push(`/users/${userId}`)   
    }  
  }
  
  return ( 
    <>  
      {showEditListingModal && ( 
        <Modal onClose={() => setShowEditListingModal(false)}> 

          <form className="modal-form" onSubmit={handleSubmit}>
                <label>Update Your Listing!</label> 
                <input
                  placeholder="Name"  
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  placeholder="Description"
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} 
                  required
                /> 
                <input
                  placeholder="Address"
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <select
                  value={borough}
                  onChange={(e) => SetBorough(e.target.value)}
                  required
                >
                  <option disabled value='initial'> -- Borough --
                  </option>
                  {boroughs.map(borough => (
                    <option
                      key={borough}
                    >
                      {borough}
                    </option>
                  ))}
                </select> 
                <input
                  placeholder="Neighborhood"
                  type="text"
                  name="neighborhood"
                  value={neighborhood}
                  onChange={(e) => SetNeighborhood(e.target.value)}  
                  required
                />
                <input
                  placeholder="Latitude"
                  type="text"
                  name="latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  required 
                />
                <input
                  placeholder="Longitude"
                  type="text"
                  name="longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  required
                />
                <input
                  placeholder="Price Per Day"
                  type="number"
                  name="price" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <input
                  placeholder="IMG1"
                  type="url"
                  name="picture"
                  value={IMG1}
                  onChange={(e) => setIMG1(e.target.value)} 
                  required
                />
                <input
                  placeholder="IMG2"
                  type="url"
                  name="picture"
                  value={IMG2}
                  onChange={(e) => setIMG2(e.target.value)}
                  required
                />
                <input 
                  placeholder="IMG3"
                  type="url"
                  name="picture"
                  value={IMG3}  
                  onChange={(e) => setIMG3(e.target.value)}
                  required
                />
                <input
                  placeholder="IMG4"
                  type="url"
                  name="picture"
                  value={IMG4}
                  onChange={(e) => setIMG4(e.target.value)}
                  required
                />
                <input  
                  placeholder="IMG5"
                  type="url"
                  name="picture"
                  value={IMG5}
                  onChange={(e) => setIMG5(e.target.value)}
                  required  
                /> 
                <button
                  type="submit"
                  disabled={validationErrors.length > 0}
                >
                  Update
                </button>
              </form>
        </Modal>
      )}
    </>
  );
}
export default EditListingModal;    