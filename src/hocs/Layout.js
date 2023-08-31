import React, { useEffect }from 'react'
import Navbar from '../components/Navbar';
import { checkAuthenticated } from '../actions/auth';
import { load_user } from '../actions/auth';
import { connect } from 'react-redux';
const Layout = (props) => {

  useEffect(()=> {
    props.checkAuthenticated();
    props.load_user();
  },[]);

  return (
    <div>
      <Navbar/>
      {props.chidren}
    </div>
  )
}

export default connect(null, {checkAuthenticated, load_user}) (Layout);
