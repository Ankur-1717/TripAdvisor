import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapView = (props) => {
  const { data, google } = props;

  const customIcon = {
    path: 'M -10 -5 L -10 5 L 10 5 L 10 -5 Z',
    fillColor: 'orange',
    fillOpacity: 1,
    strokeColor: 'black',
    strokeWeight: 1,
    scale: 3,
  };

  return (
    <Map google={google} style={{ width: 800, height: 700, position: 'relative' }} className={'map'} zoom={2}>
      {data.map((item) => (
        <Marker key={item.id} title={`Price: $${item.price}`} name={item.price} position={{ lat: item.latitude, lng: item.longitude }} label={`$ ${item.price}`} icon={customIcon} />
      ))
      }
    </Map>
  )
}
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_MAP_API)
})(MapView)