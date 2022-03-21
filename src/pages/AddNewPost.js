import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { AddPosts } from '../Store/ProblemActions';
import { useHistory } from 'react-router-dom';
import "../pages/posts.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { date } from 'yup';

function AddNewPost() {

    const username = localStorage.getItem("username")
    const state = localStorage.getItem("state")
    const city = localStorage.getItem("city")
    
    const initialState = {
      username:username,
      creator_id: Date.now(),
      title:"",
      desc:"",
      upvotes:0,
      downvotes:0,
      resolved:"false",
      zipcode:0,
      city:city,
      state:state
    }
    const [newPost, setNewPost]= useState(initialState)
      console.log("newPost", newPost)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(AddPosts(newPost))
    })

//HandleChange Function
    const handleChange = (event) => {
        const addData = {...newPost,
        [event.target.name] : event.target.value}
        
        setNewPost(addData)
      }

      const history = useHistory()
// const newFunction = (e) =>{
//   console.log(e)
//   dispatch(AddPosts(e) )
 
// }
      //HandleSumit Function
const handleSubmit = (event) => {
  event.preventDefault();
AddPosts(newPost)
  .then(()=> {
    history.push("/Posts") 
  })
  setNewPost()
  
}


  return (
    <div className='mainPost'>
    <div className='postForm'>
      <h2>Create New Post</h2>
       <form className='addPost' onSubmit={handleSubmit}>
       <input type="text" placeholder='Title'
            name="title"
            value={newPost.title}
            onChange={handleChange}
            className='postInput'
            >
            </input>
    
            <input type="text" placeholder='Decsription'
            name="desc"
            value={newPost.desc}
            onChange={handleChange}
            className='postInput'
            >
            </input>
            <button type='button' >Post</button>
            
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
    </div>
  )
}

export default AddNewPost;