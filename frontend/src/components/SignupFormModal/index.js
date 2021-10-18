import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import '../Navigation/Navigation.css'

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p className='navele' onClick={() => setShowModal(true)}>Sign Up</p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />  
        </Modal>
      )}
    </>     
  );
}

export default SignupFormModal; 