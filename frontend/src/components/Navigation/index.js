import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import CreateListingModal from '../CreateListingModal';
import SignupFormModal from '../SignupFormModal';
import * as sessionActions from '../../store/session'; 
import { useState, useEffect } from 'react'; 
import Demo from './Demo';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Dashboard from '../Dashboard'
import './Navigation.css';
import Search from './Search' 


function Navigation({ isLoaded }) {
  const history = useHistory() 
  const dispatch = useDispatch();
  const [sideOpen, setSideOpen] = useState(true)
  const sessionUser = useSelector(state => state.session.user);

  const visitProfile = (e) => {
    e.preventDefault();
    history.push(`/users/${sessionUser.id}`)
  } 
  const browselist = (e) => {
    e.preventDefault();
    history.push(`/listings`) 
  } 

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push(`/`)
  };
  useEffect(() => {
    if(!sideOpen)
    setSideOpen(!sideOpen)
}, [sideOpen]) 

     
  let sessionLinks;  
  if (sessionUser) { 
    sessionLinks = (
      <>
      <div className='header'> 
        <ul>
          <li><p className='navele' onClick={browselist}>Browse</p> </li> 
          <li><CreateListingModal/> </li>
          <li><p className='navele' onClick={visitProfile}>Profile</p></li>
          <li><p className='navele' onClick={logout}>Log Out</p> </li> 
        </ul>  
      </div>
      </>
    );
  } else {  
    sessionLinks = (
      <>
      <div className='header'> 
        <ul> 
        <li><p className='navele' onClick={browselist}>Browse</p> </li> 
          <li><Demo /></li>
          <li><LoginFormModal /></li>
          <li><SignupFormModal/> </li>
        </ul>     
      </div>  
      </>
    );
  }

  return (
    <div className="Navbar">
      <div className="HomeDiv">
        <NavLink exact to="/" className="HomeNav">Air NY</NavLink>
        <Search/> 
      </div>
      <div className="Login">
        {isLoaded && sessionLinks}
      </div>
    </div> 

  );
}

export default Navigation;

