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
                  const apiUrl = process.env.REACT_APP_URL ;
                  const url = apiUrl ;
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
    <div className='container p-100'>
      <div className='container mt-2 mb-4'>
            <div className='row align-items-center text-uppercase'>
                  <b>{data.name}</b>
            </div>
            <div className='col'>
                  <b>Listed By:</b> {data.listedBy}
            </div>
            <div className='row align-items-center mt-2'>
                  <div className='col mt-2 font-italic'>
                  {data.description}
                  </div>
            </div>
      </div>
      <div className="container">
            <img src={data.imageURL} alt="" className='img-fluid border' />
      </div>
      {/* <div>
      {data.latitude}
      </div>
      <div>
      {data.longitude}
      </div> */}
      <div className="container mt-4">
            {/* <div>
            {data.listedOn}
            </div> */}
            <div>
                  {/* <div>
                  {data.zipcode}
                  </div>  */}
                  <div>
                  ${data.price}
                  </div>
                  <button type='button'><b>Reserve</b></button>
            </div>
            {/* <div>
            {data.status}
            </div> */}
      </div>
    </div>
  )
}
