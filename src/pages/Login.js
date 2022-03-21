import React,{useState } from 'react'
import "../pages/style.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

// import {useDispatch} from 'react-redux';
// import {LoginUser} from "../Store/ProblemActions";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignIn = () => {

  // const dispatch = useDispatch();
  // const login_User = (e) => {
   
  //   dispatch(LoginUser(e));
  // };
 
  const initialLoginState = {
    username:"",
    password:""
  }
  const [loginState, setLoginState] = useState(initialLoginState);

//HandleChange Function
  const handleChange = (event) => {
    const loginData =  {...loginState,
    [event.target.name] : event.target.value}
  
    setLoginState(loginData)
    console.log("loginData", loginData)
  
  }
  

//HandleSubmit Function

const history = useHistory()
const handleSubmit = (event) =>{
event.preventDefault();

// login_User(loginState)


axios.post("https://fixittogether.herokuapp.com/api/auth/login", loginState)
          .then((res) => {
            
          
               localStorage.setItem( "token", res.data.token);
             
               alert("You have Successfully Logged In")
               
          }).then(() => {
            
            history.push("/Body")
          })
}

    return(
        <div className='form'>
            <form onSubmit={handleSubmit}>
            <h3>Sign In Your Account !!!</h3>
            <input type="text"
            name="username"
             placeholder='Username'
             value={loginState.username}
             onChange={handleChange}
             >

             </input>
            <input type="password" 
            name='password'
            placeholder='Password'
            value={loginState.password}
            onChange={handleChange}
            >

            </input>
            <button type="submit">Sign In</button>
            <div className='already'>
              <p>I Don't Have an Account</p>
            <Link to="/SignUp" className='Link' >Register</Link>
            </div>
            
            <div className='col-2'>
    <a href='youtube.com' className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="1.5x" />
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="1.5x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1.5x" />
      </a>
      <a
        href="https://www.github.com/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faGithub} size="1.5x" />
      </a>
        </div>
        </form>
        </div>
    )
}
export default SignIn;