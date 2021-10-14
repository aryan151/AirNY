import { useState } from 'react';
import { Modal } from '../../../../context/Modal';  

import deletelisting from './editlisting';  


function deleteListing({listing}) { 
  const [showModal, setShowModal] = useState(false);        

  return (
    <div className='dash-delete'>
      <p onClick={() => setShowModal(true)}>Delete</p>   
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <deletelisting listing={listing} setShowModal={setShowModal} />
        </Modal>  
      )}   
    </div>
  );
}

export default deleteListing;        