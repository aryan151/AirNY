import { useState } from 'react';
import { Modal } from '../../context/Modal';  

import CreateListing from './CreateListing';  


function CreatePostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='message-button'>
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