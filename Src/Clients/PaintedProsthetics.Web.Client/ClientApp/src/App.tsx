import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from './pages/login'
import Gallery from './pages/gallery'
import About from './pages/about'
import Donate from './pages/donate'

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
