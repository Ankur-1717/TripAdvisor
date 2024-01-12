import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import MapView from "./Map"
import Search from "./Search";
import { getAPIcalls } from '../utils/fetcher';

export default function Home() {
  const [data, setdata] = useState([])
  const fetcher = async() =>{
        try {
              const url = 'https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=2&limit=10' ;
              const response = await getAPIcalls(url) ;
              if(response.status === 200){
                    setdata(response.data) ;
              }
        } catch (error) {
              
        }
  }
  useEffect(() => {
        fetcher() ;
  }, [])
  const containerStyle = {
    position: 'absolute',  
    width: '100%',
    height: '70%'
  }
  return (
    <>
      <Navbar /> 
      <div class="container">
  <div class="row">
    <div class="col">
      <div style={containerStyle}>
      {data.length > 0 && <MapView data = {data}/> }
      </div>
    </div>
    <div class="col">
      <Cards data = {data}/> 
    </div>
  </div>
</div>
      
    </>
  );
}
