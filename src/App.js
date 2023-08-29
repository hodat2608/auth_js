import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import ResetPassword from './containers/ResetPassword';
import Layout from './hocs/Layout';
import Home from './containers/Home';
import { Provider  } from 'react-redux';
import store  from './store';
const App = () => ( 
    <Provider>
        <Router>
            <Layout />
                <Routes> 
                    <Route path='/home/' element={<Home/>} />
                    <Route path='/login/' element={<Login/>} />
                    <Route path='/Signup/' element={<Signup/>} />
                    <Route path='/activate/:uid/:token/' element={<Activate/>} />
                    <Route path='/reset-password/' element={<ResetPassword/>} />
                    <Route path='/password/reset/confirm/:uid/:token/' element={<ResetPasswordConfirm/>} />               
                </Routes>   
        </Router>
    </Provider>
)

export default App;