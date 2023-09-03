import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import ResetPassword from './containers/ResetPassword';
import Layout from './hocs/Layout';
import Home from './containers/Home';
import MainContent from './containers/mainContent';
import Notificationresetpassword from './containers/Notification_resetpassword';
import Facebook from './containers/Facebook';
import Google from './containers/Google';
import { Provider  } from 'react-redux';
import store  from './store';
import './App.css';
const App = () => ( 
    <Provider store={store}>
        <Router>
            <Layout />
                <Routes> 
                    <Route path='/' element={<Home/>} />
                    <Route path='/notification/' element={<Notificationresetpassword/>} />
                    <Route path='/main/' element={<MainContent/>} />
                    <Route path='/login/' element={<Login/>} />
                    <Route path='/signup/' element={<Signup/>} />
                    <Route path='/facebook/' element={<Facebook/>} />
                    <Route path='/google/' element={<Google/>} />
                    <Route path='/activate/:uid/:token/' element={<Activate/>} />
                    <Route path='/reset-password/' element={<ResetPassword/>} />
                    <Route path='/password/reset/confirm/:uid/:token/' element={<ResetPasswordConfirm/>} />               
                </Routes>   
        </Router>
    </Provider>
)

export default App;