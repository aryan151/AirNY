import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { postListing } from '../../store/listings';       
  
const boroughs = ['Brooklyn', 'Bronx', 'Manhattan', 'Queens', 'Staten Island']    

const CreateListing = ({ setShowModal }) => {  

  const dispatch = useDispatch(); 
  const history = useHistory();
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [price, setPrice] = useState(''); 
  const [address, setAddress] = useState('');
  const [borough, SetBorough] = useState('initial');
  const [neighborhood, SetNeighborhood] = useState('');
  const [latitude, setLatitude] = useState(''); 
  const [longitude, setLongitude] = useState('');
  const [IMG1, setIMG1] = useState('')
  const [IMG2, setIMG2] = useState('')
  const [IMG3, setIMG3] = useState('')
  const [IMG4, setIMG4] = useState('') 
  const [IMG5, setIMG5] = useState('')
  const [validationErrors, setValidationErrors] = useState([])



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

    const Home = { name, description, price, address, borough, neighborhood, latitude, longitude, IMG1, IMG2, IMG3, IMG4, IMG5 }

    let NewListing = await dispatch(postListing(Home))   
    if (NewListing) {
      history.push(`/listings`)
    }
  }

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <label>Host Your Home!</label> 
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
        List!
      </button>
    </form>
  )
}

export default CreateListing;