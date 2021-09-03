import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Test from "./pages/test/Test";
import Profile from "./pages/profile/Profile";
import Nav from "./pages/navbar/Nav"

function App() {
  return (
    <>
    
    <Router>
      {/* <Navbar /> */}
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Profile' component={Profile} />
        <Route path='/Test' component={Test} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
