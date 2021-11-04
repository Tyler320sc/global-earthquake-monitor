import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
} from "react-google-maps";
import moment from "moment";

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
)(({ earthquakeData, setSelected }) => (
  <GoogleMap
    defaultZoom={2.5}
    defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
  >
    {earthquakeData.map((earthquake, index) => {
      const oneHrAgo = moment().subtract(1, "hours");
      const withinHr = moment(earthquake.time).isAfter(oneHrAgo);

      const oneDayAgo = moment().subtract(1, "days");
      const withinDay = moment(earthquake.time).isAfter(oneDayAgo);

      const oneWeekAgo = moment().subtract(7, "days");
      const withinWeek = moment(earthquake.time).isAfter(oneWeekAgo);

      const color = withinHr
        ? "red"
        : withinDay
        ? "yellow"
        : withinWeek
        ? "purple"
        : "green";

      return (
        <Circle
          key={index}
          center={{ lat: earthquake.lat, lng: earthquake.lng }}
          radius={earthquake.magnitude * 50000}
          options={{
            strokeColor: color,
            fillColor: color,
            fillOpacity: 0.4,
            strokeWeight: 0,
          }}
          onClick={() => setSelected(earthquake)}
        />
      );
    })}
  </GoogleMap>
));

export default Map;
