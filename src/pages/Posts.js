import React, { useEffect } from 'react'
import {getPost} from '../Store/ProblemActions';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import "../pages/posts.css"
import AddNewPost from './AddNewPost';
import { useHistory } from 'react-router-dom';

export default function Posts() {
  
  const dispatch = useDispatch()
  useEffect( ()=> {
    dispatch(getPost())

  }, [dispatch])
  const history = useHistory()
  // localStorage.setItem( "upvotes",postsData.upvotes);
  // localStorage.setItem( "downvotes", postsData.downvotes);

  const postsData = useSelector(state => state.posts)

const myPost = () => {
  history.push("/AddNewPost")
}
  console.log("postsData", postsData)
  return (

    <div className='posts'>
      <div className='mine'>
        
       <div className='add' onClick={myPost} >What is The Problem Of Your City ?</div>
      

      </div>
      <div className='card'>
     {postsData ? postsData.map((onePost) => (

<div className='data'>
      <h3>Name: {onePost.creator_name}</h3>
      <p>Date: {onePost.created_at}</p>
     <p>Title: {onePost.title}</p>
     <p>Description: {onePost.desc}</p>
     <p>City: {onePost.city}</p>
    
     <div className='vote'> 
      <p>Upvotes: {onePost.upvotes}</p>
     <p>Downvoves: {onePost.downvotes}</p>
     </div>
     </div>
     
      )): <alert>No Data</alert>} 
      
      </div>
    </div>
  )
}
