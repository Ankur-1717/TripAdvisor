import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Cards(props) {
  const data = props.data;
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
