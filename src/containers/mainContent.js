import React from 'react'
import { logout } from '../actions/auth';
import { connect } from 'react-redux'
import { Navigate,Link, } from 'react-router-dom';
import { Fragment } from 'react';

const MainContent = ({isAuthenticated}) => {
  if (isAuthenticated){
    console.log('boo: ', isAuthenticated)
  };
  return (
    <div>
      You are {isAuthenticated ? 'Login' : 'Not Login'}, Welcome to you
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(MainContent);
