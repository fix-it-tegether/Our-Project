import axios from 'axios';
import axiosAuth from '../pages/AxiosAuth';
//Acion Types
export const ADD_NEW_POST = "ADD_NEW_POST";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_START";

const token = localStorage.getItem("token")

//Action Creator Function
export const AddPosts = (addPost) => (dispatch) => {
  console.log("action success", addPost)
  
  dispatch({type:ADD_NEW_POST})
  axios.post("https://fixittogether.herokuapp.com/api/posts",{headers: {authorization: token}})
  .then((res) => {
    console.log("action success", res)
    dispatch({type:ADD_NEW_POST, payload:res.data})
  })
  .catch((err) =>{
    console.log(err)
  })
}


export const getPost= () => (dispatch) => {
 //dispatch start

//  const token = localStorage.getItem("token")
 dispatch({type:FETCH_DATA_START});
 
//  axiosAuth.get(`${postUrl}`) 
axios.get("https://fixittogether.herokuapp.com/api/posts")

  
  .then((res) => {
   
    
//dispatch Success
dispatch({type:FETCH_DATA_SUCCESS, payload:res.data})


  })
  .catch((err) => {
    dispatch({type:FETCH_DATA_FAIL, payload:err.message})
  })

}

// export const fetchDataStart = () => {
//   return{
//     type:FETCH_DATA_START
//   }
// }

// export const fetchDataSuccess = (posts) => {
//   return{
//     type:FETCH_DATA_SUCCESS,
//     payload:posts
//   }
// }

// export const fetchDataFail = (error) => {
// return{
//   type:FETCH_DATA_FAIL,
//   payload:error

// }
// }

// export const getPosts = () =>(dispatch) => {
//   dispatch(fetchDataStart);
//   axios.get("https://fixittogether.herokuapp.com/api/posts", {headers: { authorization: token }})
//   .then((res) => {
//     const posts = res.data
//     dispatch(fetchDataSuccess(posts));
//   })
// .catch(error => {
//   const errorMsg = error.message
//   dispatch(fetchDataFail(errorMsg));
// } )

  
// }