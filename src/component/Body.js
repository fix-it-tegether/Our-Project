

import React, { useState } from 'react';

import Header from "./Header";

import Footer from "./Footer";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../pages/Home"
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import About from '../pages/About';
import data from "../data.js"
import SignUp from '../pages/SignUp';
import Posts from '../pages/Posts';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/Profile';
import AddNewPost from '../pages/AddNewPost';
function Body() {

    const [books, setBooks] = useState(data);
    
    // console.log("books", books);

    return (
        <div className='body'>

           <Header />

           <Switch>

        <Route path="/Contact" >
            <Contact/>
        </Route>


        <Route path="/Login">
            <Login />
        </Route>

        <Route path="/SignUp">
            <SignUp />
        </Route>

        <Route path="/About">
           <About/>
        </Route>

        <PrivateRoute path="/Posts">
           <Posts />
        </PrivateRoute>

        <PrivateRoute path="/Profile">
           <Profile />
        </PrivateRoute>

        <Route path="/AddNewPost">
           <AddNewPost />
        </Route>

        <Route path="/">
           <Home />
        </Route>
        

        </Switch>

        <Footer />
            
        


        </div>
    )
}

export default Body;

// hell zack
