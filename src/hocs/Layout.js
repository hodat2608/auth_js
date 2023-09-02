import React, { useEffect }from 'react'
import Navbar from '../components/Navbar';
import { checkAuthenticated } from '../actions/auth';
import { load_user } from '../actions/auth';
import { GoogleAuthenticate } from '../actions/auth';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'

const Layout = (props) => {
  let location  = useLocation();

  useEffect(()=> {
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null ;
    const code = values.code ? values.code : null ;
    console.log("state : ", state);
    console.log("code :", code);
    if (state && code ){
      props.GoogleAuthenticate(state,code)
    } else{
      props.checkAuthenticated();
      props.load_user();
    }
   
  },[location,props]);

  return (
    <div>
      <Navbar/>
      {props.chidren}
    </div>
  )
}

export default connect(null, {checkAuthenticated, load_user, GoogleAuthenticate}) (Layout);


