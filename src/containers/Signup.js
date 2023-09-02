import React from 'react'
import { useState } from 'react';
import { signup } from '../actions/auth';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const Signup = ({signup,isAuthenticated}) => {
    const [createdAccount, SetCreatedAccount] = useState(false);
    const [formData, setFormData] = useState({
      first_name :'',
      last_name :'',
      email:'',
      password :'',
      re_password:'',
    })

    const {first_name,last_name,email,password,re_password} = formData;

    const onChange = e => setFormData ({...formData,[e.target.name]: e.target.value});

    const onSubmit = e => {
      e.preventDefault();

      if (password === re_password) {
          signup(first_name,last_name,email,password,re_password);
          SetCreatedAccount(true);
      }
    };

    const continueWithGoogle = async () => {
      try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:8000`)
          window.location.replace(res.data.authorization_url);
      } catch (err) {

      }
    };
    
    if (isAuthenticated){
      return <Navigate to={'/main/'} />
    }

    if (createdAccount){
      return <Navigate to='/login/' />
    }

  return (
    <div className='container mt-5'>
        <h1>Sign Up</h1>
        <p>Create your Account</p>
        <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    placeholder='First Name*'
                    name='first_name'
                    value={first_name}
                    onChange={e => onChange(e)}
                    required
                />
            </div>
            <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Last Name*'
                    name='last_name'
                    value={last_name}
                    onChange={e => onChange(e)}
                    required
                />
            </div>
            <div className='form-group'>
                  <input
                      className='form-control'
                      type='email'
                      placeholder='Email*'
                      name='email'
                      value={email}
                      onChange={e => onChange(e)}
                      required
                  />
                </div>
                <div className='form-group'>
                  <input
                      className='form-control'
                      type='password'
                      placeholder='Password*'
                      name='password'
                      value={password}
                      onChange={e => onChange(e)}
                      minLength='6'
                      required
                  />
                </div>
                <div className='form-group'>
                  <input
                      className='form-control'
                      type='password'
                      placeholder='Confirm Password*'
                      name='re_password'
                      value={re_password}
                      onChange={e => onChange(e)}
                      minLength='6'
                      required
                  />
                </div>
            <button className='btn btn-primary' type='submit'>Register</button>
        </form>
        <p className='mt-3'>
            Already have an account? <Link to='/login'>Sign In</Link>
        </p>
        <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
              Continue With Google
        </button>
    </div>
);
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{signup}) (Signup) ;
