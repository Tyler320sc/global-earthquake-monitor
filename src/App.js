import "./App.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={2.5}
        defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: 40.7128, lng: 74.006 }} />
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
    );
  })
);

export default MyMapComponent;
