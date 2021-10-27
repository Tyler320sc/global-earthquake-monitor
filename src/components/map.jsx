import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
} from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcxtC06rkmeB52VEzmXhTfdzV0_7SsYhI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ earthquakeData }) => (
  <GoogleMap
    defaultZoom={2.5}
    defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
  >
    {earthquakeData.map((earthquake, index) => {
      return (
        <Circle
          key={index}
          center={{ lat: earthquake.lat, lng: earthquake.lng }}
          //   radius={earthquakeData[0].magnitude * 100000}
          radius={-0.001}
          options={{
            strokeColor: `red`,
            fillColor: `red`,
            fillOpacity: 0.2,
            strokeWeight: 0,
          }}
        />
      );
    })}
    {/* <Circle
      center={{ lat: earthquakeData[0].lat, lng: earthquakeData[0].lng }}
      radius={100000}
      options={{
        strokeColor: `red`,
        fillColor: `red`,
        fillOpacity: 0.2,
        strokeWeight: 0,
      }}
    /> */}
  </GoogleMap>
));

export default Map;
