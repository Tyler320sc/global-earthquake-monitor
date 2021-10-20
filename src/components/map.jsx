import React, { useState, useEffect } from "react";
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
)((props) => (
  <GoogleMap
    defaultZoom={2.5}
    defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
    <Circle
      center={{ lat: 40.73061, lng: -73.935242 }}
      radius={100000}
      options={{
        strokeColor: `red`,
        fillColor: `red`,
        fillOpacity: 0.2,
        strokeWeight: 0,
      }}
    />
  </GoogleMap>
));

export default Map;
