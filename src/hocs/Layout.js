import React, { useEffect }from 'react'
import Navbar from '../components/Navbar';
import { checkAuthenticated } from '../actions/auth';
import { load_user } from '../actions/auth';
import { connect } from 'react-redux';


const Layout = ({checkAuthenticated,load_user,chidren}) => {

  useEffect(()=> {
      checkAuthenticated();
      load_user();
  },[]);

  return (
    <div>
      <Navbar/>
      {chidren}
    </div>
  )
}

export default connect(null, {checkAuthenticated, load_user}) (Layout);
