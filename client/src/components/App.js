import { Route, Router } from 'react-router-dom';

import History from '../Routes/History';
import Home from './Home/Home';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
// import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <Router history={History}>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/contact-us" exact component={Contact} />
        {/* <Route path="/auth/login" exact component={Login} /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
