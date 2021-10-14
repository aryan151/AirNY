import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import CreateListingModal from '../CreateListingModal';
import SignupFormModal from '../SignupFormModal';
import { useState, useEffect } from 'react'; 
import Demo from './Demo';
import { useHistory } from 'react-router';
import Dashboard from '../Dashboard'
import './Navigation.css';


function Navigation({ isLoaded }) {
  const [sideOpen, setSideOpen] = useState(true)
  const sessionUser = useSelector(state => state.session.user);


  useEffect(() => {
    if(!sideOpen)
    setSideOpen(!sideOpen)
}, [sideOpen]) 


  let sessionLinks;  
  if (sessionUser) {
    sessionLinks = (
      <>
        <CreateListingModal/>  
        <NavLink to="/listings" className="M-item">Browse</NavLink>  
        <ProfileButton user={sessionUser} />  
      </>
    );
  } else {  
    sessionLinks = (
      <>
        <Demo />
        <LoginFormModal />
        <SignupFormModal/> 
      </>
    );
  }

  return (
    <div className="Navbar">
      <div className="left">
        <NavLink exact to="/" className="HomeNav">Test</NavLink>
      </div>
      <div className="right">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;

