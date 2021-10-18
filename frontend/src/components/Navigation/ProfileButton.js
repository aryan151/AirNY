import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom' 
import Dashboard from '../../components/Dashboard/Dashboard'
import {fetchListings} from '../../store/listings'
import {fetchBookings} from '../../store/bookings'
import {fetchReviews} from '../../store/reviews'

function ProfileButton({ user }) {
  const history = useHistory() 
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => { 
    dispatch(fetchListings());  
    dispatch(fetchBookings());
    dispatch(fetchReviews());
  }, [dispatch])

  const visitProfile = (e) => {
    e.preventDefault();
    history.push(`/users/${user.id}`)
  } 

  const openMenu = () => {
    if (!showMenu) setShowMenu(true);
    else setShowMenu(false);
    
  };
  
  // useEffect(() => {
  //   if (!showMenu) return;

  //   const closeMenu = () => {
  //     setShowMenu(false);
  //   };

  //   document.addEventListener('click', closeMenu);
  
  //   return () => document.removeEventListener("click", closeMenu);
  // }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  }; 
 
  return (
    <>
      <button onClick={openMenu}>
        <i className="M-item" />
        B
      </button>
      {showMenu && (  

      <div className="dropdown-menu">
        <ul className="profile-dropdown"> 
          <li>Welcome, {user.username}</li>
          {/* <li><Dashboard/></li> */}
          <li>
              <button onClick={visitProfile}>Dashboard</button>
          </li>
          <li>
              <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      </div>  
      )}
    </>
  );
}

export default ProfileButton;  