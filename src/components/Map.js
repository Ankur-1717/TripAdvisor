import React, {useState, useEffect} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapView = (props) => {
  const {data, google} = props ;
  
    // console.log("ankur ka data-> ", data[0].latitude);
      return (
        <Map google={google} className={'map'} zoom={14}>
          {data.map((item) =>(
              <Marker key={item.id} title={`Price: $${item.price}`} name={item.price} position={{lat: item.latitude, lng: item.longitude}} />
            ))
          }
        </Map>
      )
  }
export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_MAP_API)
})(MapView)