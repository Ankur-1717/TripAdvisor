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
              const apiUrl = process.env.REACT_APP_URL;
              const url = apiUrl ;
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
  
  return (
    <>
      <Navbar /> 
      <div className="col-md-6 col-sm-12 col-xs-12">
        <div className="container-fluid">
          {data.length > 0 && <MapView data = {data}/> }
        </div>
        <div>
          <Cards data = {data}/> 
        </div>
      </div>
    </>
  );
}
