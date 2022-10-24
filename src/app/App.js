import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HarleyDavidson from "../components/HarleyDavidson";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";
import Login from "../components/Login"; 
import Home from './../components/Home';
import  ColorsAPI  from '../components/colorsAPI';
import Account from "../components/Account";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './../components/cart';
import { BMW } from './../components/BMW';
import { Lamborghini } from "../components/Lamborghini";
import  About from "../components/About";

export const linkStyles = {
  "text-decoration": "none",
  "list-style": "none",
}
export const backgroundsty = {
  backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/007/164/537/original/fingerprint-identity-sensor-data-protection-system-podium-hologram-blue-light-and-concept-free-vector.jpg)"
}
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/articles/:title'>
            <Article  />
          </Route>
          <Route path='/authors/:name'>
            <Author  />
          </Route>
          <Route path='/sign-up'>
            <SignUp  />
          </Route>
          <Route path='/login'>
            <Login  />
          </Route>
          <Route path='/account'>
            <Account  />
          </Route>
          <Route path='/categories'>
            <Categories  />
          </Route>
          <Route path='/articles'>
            <Articles  />
          </Route>
          <Route path='/author'>
            <Author  />
          </Route>
          <Route path='/profile'>
            <Profile  />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/colors-api'>
            <ColorsAPI  />
          </Route>
          
          <Route path='/bmw'>
            <BMW  />
          </Route>
          
          <Route path='/lamborghini'>
            <Lamborghini  />
          </Route>
          
          <Route path='/harley-davidson'>
            <HarleyDavidson  />
          </Route>
          <Route path='/cart'>
            <Cart  />
          </Route>
          <Route path='/' exact>
            <Home  />
          </Route>
           
      </Switch>
      
      <Footer />
    </Router>
  );
}

export default App;
