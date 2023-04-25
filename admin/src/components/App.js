import { Route, Router } from 'react-router-dom';

import History from '../Routes/History';
import Home from './Home/Home';
import Header from './Header/Header';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
// import Sidebar from './Sidebar/Sidebar';
import Gallery from './Gallery/Gallery';
import Permission from './Permission/Permission';
import Signup from './Signup/Signup';
import { useEffect } from 'react';

import io from 'socket.io-client';
import { useDispatch } from 'react-redux';

import { socketData } from '../action';

const App = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const dispatch = useDispatch();
  const socket = io.connect('http://localhost:5000');

  useEffect(() => {
    console.log('first');
    socket.on('GetPermissions', (data) => {
      console.log('data through the socket', data);
      dispatch(socketData(data));
    });
  }, []);

  useEffect(() => {
    if (!token) {
      History.push('/auth/login');
    }
  });
  return (
    <div className="App">
      {/* <Sidebar /> */}

      <Router history={History}>
        <Header />
        {/* <Sidebar /> */}
        <Route path="/" exact component={Home} />
        <Route path="/auth/login" exact component={Login} />
        <Route path="/auth/signup" exact component={Signup} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/permission" exact component={Permission} />
      </Router>
    </div>
  );
};

export default App;
