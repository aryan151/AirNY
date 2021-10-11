import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Demo from './Demo'
import './Navigation.css';


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;  
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to="/listing" className="Listing">
          <button className="demobutton">Host</button></NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <Demo />
        <LoginFormModal />
        <NavLink to="/signup"><button className="demobutton">Sign Up</button></NavLink>
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

