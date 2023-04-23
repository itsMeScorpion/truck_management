import { Route, Router } from 'react-router-dom';

import History from '../Routes/History';
import Home from './Home/Home';
import Header from './Header/Header';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './Sidebar/Sidebar';
import Gallery from './Gallery/Gallery';
import Permission from './Permission/Permission';
import Signup from './Signup/Signup';

function App() {
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
        {/* <Route path="/permission" exact component={Permission} /> */}
      </Router>
    </div>
  );
}

export default App;
