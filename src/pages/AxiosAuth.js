import axios from 'axios';
import React from 'react'

// export const postUrl = "";
const axiosAuth = () => {

  let token = localStorage.getItem("token");
 
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      token: `${token}`,
    },
  });
}

export default axiosAuth