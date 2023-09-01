import React from 'react'
import { logout } from '../actions/auth';
import { connect } from 'react-redux'
import { Navigate,Link, } from 'react-router-dom';
import { Fragment } from 'react';

const MainContent = ({logout,isAuthenticated}) => {
  const logout_user =()=> {
    logout();
    <Navigate to="/login/"  />
  }
  const guestLinks = () => (
    // <Fragment>
    //     <li className='nav-item'>
    //         <Link className='nav-link' to='/login'>Login</Link>
    //     </li>
    //     <li className='nav-item'>
    //         <Link className='nav-link' to='/signup'>Sign Up</Link>
    //     </li>
    // </Fragment>
    <Navigate to="/login/"  />
  );
 
  const logout_true = () =>
  (
    <li className='nav-item'>
        <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
    </li>
  );

  return (
    <div>
      You are {isAuthenticated ? 'Login' : 'Not Login'}, Welcome to you
      {isAuthenticated ? logout_true() : guestLinks()}
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{logout}) (MainContent);
