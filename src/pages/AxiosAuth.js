import axios from 'axios';
import React from 'react'

const axiosAuth = () => {
  let token = localStorage.getItem("token");
  console.log(token);
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      token: `${token}`,
    },
  });
}

export default axiosAuth