import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom' 

function ProfileButton({ user }) {
  const history = useHistory() 
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  

  const visitProfile = (e) => {
    e.preventDefault();
    history.push(`/users/${user.id}`)
  } 

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

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
        <ul className="MenuDrop"> 
          <li>
            Welcome, {user.username}
          </li>
          <li>
              <button onClick={visitProfile}>Dashboard</button>
            </li> 
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;  