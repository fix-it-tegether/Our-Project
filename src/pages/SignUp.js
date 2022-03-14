import React, {useState} from 'react'
import "../pages/style.css";
// import axios from 'axios';
import * as yup from 'yup';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faUser,faLoock, faLock} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

function SignUp(){
//State That stores tha values of inputs
const initialFormState= {
  first_name:"",
  last_name:"",
  username:"",
  password:"",
  email:"",
  zipcode:"",
  state:"",
  city:""
}
const [formState, setFormState] = useState(initialFormState);
const [errors, setErrors] = useState(initialFormState);
//HandleChange Function
const handleChange = (event) => {
  const inputData =  {...formState,
  [event.target.name] : event.target.value}
  handleValidationChange(event)
  setFormState(inputData)
}
// console.log(formState)

// HandleSubmit Function
const handlesubmit = (event) => {
event.preventDefault();
console.log("formState", formState)
axios.post("https://fixittogether.herokuapp.com/api/auth/register", formState)
.then((res) => {
  console.log(res.data)

  setFormState(initialFormState)
 
   alert("You have Successfully Registered")
 
})
.catch((err) => console.log(err))
}


//Form Validation Using YUP
let schema = yup.object().shape({
  

  first_name: yup.string().required("Cannot be Blank"),
  last_name: yup.string().required("Cannot be Blank"),
  username: yup.string().required("Cannot be Blank"),
  password: yup.string().required("Cannot be Blank"),
  email: yup.string().email().required("Cannot be Blank"),
  zipcode: yup.string().required("Cannot be Blank"),
  state: yup.string().required("Cannot be Blank"),
  city: yup.string().required("Cannot be Blank")
});
// Handle Validation Function
const handleValidationChange = (event) => {
yup
      .reach(schema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({...errors, [event.target.name]: ""})
      })
      .catch((err) => {
        setErrors({...errors, [event.target.name]: err.errors[0]})
      })
  }
    return(
        <div className='form'>
            <form onSubmit={handlesubmit}>
            <h3>Signup Your Account !!!</h3>
            

                      

           <div className='col'>
           <label>
            <input type="text" placeholder='First Name'
            name="first_name"
            value={formState.first_name}
            onChange={handleChange}
            >
            </input>
            {errors.first_name.length > 0 ? <p className="errors">{errors.first_name}</p> : null}
           </label>
            
            <label>
            <input type="text" placeholder='Last Name'
             name="last_name"
             value={formState.last_name}
             onChange={handleChange}
            >
            </input>
            {errors.last_name.length > 0 ? <p className="errors">{errors.last_name}</p> : null}
            </label>
                      </div>

                      <div className='col'>
                        <label>
            <input type="text" placeholder='Username'
             name="username"
             value={formState.username}
             onChange={handleChange}
            >
               </input>
               {errors.username.length > 0 ? <p className="errors">{errors.username}</p> : null}
               </label>

               <label>
            <input type="password" placeholder='Password'
             name="password"
             value={formState.password}
             onChange={handleChange}
            >
            </input>
            {errors.password.length > 0 ? <p className="errors">{errors.password}</p> : null}
            </label>
           </div>

         <div className='col'>
        <label>
            <input type="email" placeholder='Email'
             name="email"
             value={formState.email}
             onChange={handleChange}
            >
            </input>
            {errors.email.length > 0 ? <p className="errors">{errors.email}</p> : null}
            </label>
           
           <label>

            <input type="number" placeholder='Zip Code'
             name="zipcode"
             value={formState.zipcode}
             onChange={handleChange}
            >
            </input>
            {errors.zipcode.length > 0 ? <p className="errors">{errors.zipcode}</p> : null}
            </label>
            
            </div>
            <div className='col'>
           
           <label>
            <input type="text" placeholder='State'
             name="state"
             value={formState.state}
             onChange={handleChange}
            >
               </input>
               {errors.state.length > 0 ? <p className="errors">{errors.state}</p> : null}
               </label>

              <label>
            <input type="text" placeholder='City'
             name="city"
             value={formState.city}
             onChange={handleChange}
            >
            </input>
            {errors.city.length > 0 ? <p className="errors">{errors.city}</p> : null}
            </label>
            
            </div>
            <button >Sign Up</button>
            <div className='already'>
            <p>Already i Have an Account</p>
            <Link to="/Login" className='Link' >Sign In</Link>
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
export default SignUp;