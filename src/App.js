import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import Login from './pages/Login';
import './App.css';
import Body from './component/Body';
import axiosAuth from './pages/AxiosAuth';
// import Home from './pages/Home';
// import Posts from './pages/Posts';

function App() {

  // const loginInfo = useSelector((state)=>state.token)

  // const [Islogin, setIslogin] = useState(loginInfo)
  // useEffect(()=>{
  //   isLoginTrue()
  // })

  // const isLoginTrue = () => {
  //   let store = JSON.parse(localStorage.getItem("token"))
  //   if(store && store.token) {
  //     setIslogin(store.token)
  //   }
  // }

  return (
    
     <div className="App">

      {/* {!isLoginTrue ? <Login />  :    } */}
       
       <Body />
      
    </div>
  );
}

export default App;










