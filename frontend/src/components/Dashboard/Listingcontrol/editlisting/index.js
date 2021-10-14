import { useState } from 'react';
import { Modal } from '../../../../context/Modal';  

import editlisting from './editlisting';  


function editlisting({listing}) { 
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='dashedit'>
      <p onClick={() => setShowModal(true)}>Edit</p>   
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <editlisting listing={listing} setShowModal={setShowModal} />
        </Modal>  
      )}
    </div>
  );
}

export default editlisting;      