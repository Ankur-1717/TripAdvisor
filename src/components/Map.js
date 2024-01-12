import React, {useState, useEffect} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapView = (props) => {
  const {data, google} = props ;
  
    // console.log("ankur ka data-> ", data[0].latitude);
      return (
        <Map google={google} style={{width: 800, height: 700, position: 'relative'}} className={'map'} zoom={2}>
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