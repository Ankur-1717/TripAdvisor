import React, {useEffect, useState} from 'react'
import { getAPIcalls } from '../utils/fetcher';
import Card from './Card';

export default function Cards() {
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
  return (
    <>
      {data.length !== 0 ? 
      (
            data.map((item) => 
            <div className='container mx-2 my-3' key={item.id}>
                  <Card item={item}/>
            </div>
            )
      ) 
      : 
      ("Loading...")
      }
    </>
  )
}
