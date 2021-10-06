import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyMapComponent from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcxtC06rkmeB52VEzmXhTfdzV0_7SsYhI&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={
        <div
          style={{
            height: `400px`,
            width: `1233px`,
            marginTop: `100px`,
            // marginLeft: `700px`,
            // marginRight: `10`,
          }}
        />
      }
      mapElement={<div style={{ height: `100%`, width: `100%` }} />}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
