import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

const Maps = ({ apiKey, listings }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const [markersArr, setMarkersArr] = useState([])
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)

  useEffect(() => {
    const newArray = []
    if (listings?.length) {
      setLat(+listings[0]?.latitude)
      setLng(+listings[0]?.longitude)
      listings?.forEach(listing => {
        const obj = {}
        obj['name'] = listing?.name
        obj['lat'] = listing?.latitude
        obj['lng'] = listing?.longitude
        newArray.push(obj)
      })
      setMarkersArr(newArray)
    } else {
      setLat(0)
      setLng(0)
    }
  }, [listings])

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
          zoom={10}
          options={options}
        >
          {markersArr.map(marker => <Marker
            key={marker.name}
            position={{ lat: +marker.lat, lng: +marker.lng }}>
          </Marker>
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);