import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import ResetPassword from './containers/ResetPassword';
import Layout from './hocs/Layout';
import Home from './containers/Home';
const App = () => ( 
    <Router>
        <Layout>
            <Routes>
                
                {/* <Route exact path='/' component={Home} /> */}
                <Route path='/home/' element={<Home/>} />
            </Routes>
        </Layout>
    </Router>
)

export default App;

