import { useState } from 'react';
import { Modal } from '../../../../context/Modal';  

import EditListing from './editlistingmodal';  


function EditListingModal ({listing}) {   
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='dashedit'>
      <p onClick={() => setShowModal(true)}>Edit</p>   
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditListingModal listing={listing} setShowModal={setShowModal} />
        </Modal>   
      )}
    </div>  
  );
}

export default EditListingModal;        