import React from 'react'
import GoogleMapReact from 'google-map-react'

function Map() {

    const coordinates = { lat: 0, long: 0};

  return (
    <div className=' w-full h-full'>
        <GoogleMapReact 
            bootstrapURLKeys={{key: " "}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={""}
            onChange={""}
            onChildClick={""}
        >

        </GoogleMapReact>
    </div>
  )
}

export default Map