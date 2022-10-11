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

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './../components/cart';
import { BMW } from './../components/BMW';
import { Lamborghini } from "../components/Lamborghini";

export const linkStyles = {
  "text-decoration": "none",
  "list-style": "none",
}

function App() {
  return (
    <Router>
      <Header />
     <div className="container d-flex justify-content-center">

   
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
      </div>
      <Footer />
    </Router>
  );
}

export default App;
