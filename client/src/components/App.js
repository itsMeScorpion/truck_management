import { Route, Router } from 'react-router-dom';

import History from '../Routes/History';
// import Home from './Home/Home';
import Header from './Header/Header';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <Router history={History}>
        <Header />
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/auth/login" exact component={Login} />
      </Router>
    </div>
  );
}

export default App;
