import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Home/Home.component';
import Header from './Components/Header/Header.component';
import About from './Components/About/About.component';
import Contact from './Components/Contact/Contact.component';
import Login from './Components/Login/Login.component';
import Signup from './Components/Signup/Signup.component';
import Details from './Components/Details/DetailsComponent';
import Footer from './Components/Footer/FooterComponent';
import Dashboard from './Components/Admin/Admin.Component'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    <Route exact path="/" component={Home}/>
        <Route path="/header" component={Header}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/watch-details" component={Details}/>
        <Route path="/admin" component={Dashboard}/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
