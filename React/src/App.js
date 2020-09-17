import React from 'react';
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login'
import Gallery from './Components/Gallery/Gallery'
import About from './Components/About/About'
import Donate from './Components/Donate/Donate'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Gallery />
          </Route>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
