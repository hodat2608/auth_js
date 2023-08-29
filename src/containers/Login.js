import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const Login = () => {
    const [formData, setFormData] = useState({
      email:'',
      password : '',
    })

    const {email, password} = formData;

    const onChange = e => setFormData ({...formData,[e.target.name]: e.target.value});

    const onSubmit = e => {
      e.PreventDefault();  
    }

    return (
      <div className='container mt-5'> 
        <h1>Sign in</h1>
        <p>Sign in in your account </p>
        <form onSubmit = {e => onSubmit(e)}>
          <div className='form-group'> 
            <input 
                className='form-control'
                type='email'
                placeholder ='Email '
                name='email'
                value = {email}
                onChange = {e => onChange(e)}
                minLength= '6'
                required
                />            
          </div>
          <div className='form-group'> 
            <input 
                className='form-control'
                type='password'
                placeholder ='Password '
                name='password'
                value = {password}
                onChange = {e => onChange(e)}
                minLength= '6'
                required
                />            
          </div>
          <button className='btn btn-primary' type='submit'>Login</button>
        </form>
        <p className='mt-3'>
          Haven't account yet ? <Link to = '/Signup/'>Sign up</Link>
        </p>
        <p className='mt-3'>
          Forgot password ? <Link to = '/reset-password/'>Sign up</Link>
        </p>
      </div>
    )
}

export default connect(null,{}) (Login);
