import React, { useEffect, useReducer, useState } from 'react';
import { Route, Link,NavLink, Switch, useHistory } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import image2 from '../pages/images/fixLogo.png'

import './component.css';

function Header(props) {
    
    const history = useHistory()
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
       console.log("token changed" )
      },[loggedIn]);

    // const logOutFunction = () => {
    //     console.log("token", token)
    //     localStorage.removeItem('token');
    //     history.push('/Login')
    // }
   
  function logOut(){
    localStorage.clear()
    // .then(() => {
      history.push("/Login")
    // })
  } 
    return (
        <div className="Header">

            <nav className="nav">

            {/* <img src={image2} alt="Logo" /> */}
            <a  href="http://localhost:3000/" className="logo"> &#9776;</a>
           
            <ul className='ul'>
                <li className='li'> <NavLink to="/" activeClassName='activeLink'>Home </NavLink> </li>

                <li className='li'> <NavLink to="/About" activeClassName='activeLink'> About </NavLink></li>

                <li className='li'> <NavLink to="/Contact" activeClassName='activeLink'>Contact </NavLink></li>
                <li className='li'> <NavLink to="/Posts" activeClassName='activeLink'> Posts</NavLink> </li>
                <li className='li'> <NavLink to="/Profile" activeClassName='activeLink'> Profile</NavLink> </li>
       {/* {loggedIn ?   <NavLink
          onClick={() => {
            if (loggedIn) {
              localStorage.removeItem("token");
              setLoggedIn(null);
            } else {
              localStorage.setItem("token");
              setLoggedIn(true);
            }
          }}
          
        >
         Logout
        </  NavLink> : } */}
        {/* <li className='li'> <NavLink to="/Login" activeClassName='activeLink'> Login</NavLink> </li>  */}



{/* {token ? <li>  <NavLink onClick={() => logOutFunction}>Logout</NavLink> </li>
: } */}

          {/* } */}
      
         {/* :   */}

      
         
               

                

                
            </ul>

            
            </nav>

            {localStorage.getItem("token") ?       
<nav className='userNav'>

<NavDropdown title={username}>
  <NavDropdown.Item >Add New Post</NavDropdown.Item><br />
         <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
         
       </NavDropdown>
</nav>
: null }
        

        </div>
    )
}

// const arr = ["Home", "about", "contact", "blog" ];
   {/* <ul>  {arr.map(function(item) { return <li to="">{item}</li>  })}   </ul> */}
export default Header;
