import { useState } from 'react';
import { Modal } from '../../context/Modal';  
import '../Navigation/Navigation.css'
import CreateListing from './CreateListing';  


function CreatePostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='navele'>
      <p onClick={() => setShowModal(true)}>Host</p> 
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateListing setShowModal={setShowModal} />
        </Modal>  
      )}
    </div>
  );
}

export default CreatePostModal;   