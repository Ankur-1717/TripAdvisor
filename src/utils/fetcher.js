import React from "react"
import axios from 'axios'

export const getAPIcalls = async(url) =>{
      console.log(url);
      const response = await axios.get(url) ;
      return response ;
}