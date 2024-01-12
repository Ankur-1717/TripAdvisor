import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAPIcalls } from '../utils/fetcher';

export default function CardDetails() {
  const { id } = useParams();
  const [data, setdata] = useState({});

  const findArrayElementById = async (array) => {
    return array.find((element) => {
      return element.id === id;
    });
  };

  const fetcher = async () => {
    try {
      const apiUrl = process.env.REACT_APP_URL;
      const url = apiUrl;
      const response = await getAPIcalls(url);
      if (response.status === 200) {
        const value = await findArrayElementById(response.data);
        setdata(value);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div className='container my-5'>
      <div className='row align-items-center text-uppercase'>
        <h1 className='col-12'>{data.name}</h1>
        <div className='col'>
          <p>
            <b>Listed By:</b> {data.listedBy}
          </p>
        </div>
      </div>

      <div className='row align-items-center mt-4'>
        <div className='col-md-8'>
          <p className='font-italic'><b>About: </b>{data.description}</p>
        </div>
      </div>
      <div className='col-md-4'>
            <img src={data.imageURL} alt='' className='img-fluid border' />
      </div>

      <div className='row mt-4'>
        <div className='col-md-8'>
          <p className='lead'>
            <b>Price:</b> ${data.price}
          </p>
        </div>
      </div>
      <div className='col'>
          <button type='button' className='btn btn-primary btn-lg btn-block'>
            <b>Reserve</b>
          </button>
      </div>
    </div>
  );
}
