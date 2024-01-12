import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getAPIcalls } from '../utils/fetcher';

export default function CardDetails() {
      const {id} = useParams() ;
      const [data, setdata] = useState({}) ;
      const findArrayElementById =async(array)=>{
            return array.find((element) =>{
                  return element.id === id ;
            })
      } ;
      const fetcher = async() =>{
            try {
                  const url = 'https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=2&limit=10' ;
                  const response = await getAPIcalls(url) ;
                  if(response.status === 200){
                        const value = await findArrayElementById(response.data) ;
                        setdata(value)
                  }
            } catch (error) {
                  
            }
      }
      useEffect(() => {
            fetcher() ;
      }, [])
  return (
    <div className='container'>
      <div className="container">
            <img src={data.imageURL} alt="" />
      </div>
      <div>
      {data.name}
      </div>
      <div>
      {data.description}
      </div>
      <div>
      {data.listedBy}
      </div>
      <div>
      {data.latitude}
      </div>
      <div>
      {data.longitude}
      </div>
      <div>
      {data.price}
      </div>
      <div>
      {data.listedOn}
      </div>
      <div>
      {data.zipcode}
      </div>
      <div>
      {data.status}
      </div>
    </div>
  )
}
