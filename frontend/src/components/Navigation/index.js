import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import CreateListingModal from '../CreateListingModal';
import SignupFormModal from '../SignupFormModal';
import Demo from './Demo';
import Dashboard from './Dashboard';
import './Navigation.css';


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;  
  if (sessionUser) {
    sessionLinks = (
      <>
        <CreateListingModal/>  
        <NavLink to="/listings" className="Listings">Browse</NavLink>  
        {/* <Dashboard content='listings' /> */}
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
      <div className="HomeDiv">
        <NavLink exact to="/" className="HomeNav">Test</NavLink>
      </div>
      <div className="Login">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;

