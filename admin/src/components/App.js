import { Route, Router } from 'react-router-dom';

import History from '../Routes/History';
// import Home from './Home/Home';
import Header from './Header/Header';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
    
      <Router history={History}>
        {/* <Header /> */}
        {/* <Route path="/" exact component={Home} /> */}

        {/* <Route path="/auth/login" exact component={Login} /> */}
        <Route path="/dashboard" exact component={Dashboard} />

        {/* <Route path="/dashboard" exact component={Dashboard} /> */}
      </Router>
    </div>
  );
}

export default App;
