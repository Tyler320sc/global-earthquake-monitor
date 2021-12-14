import React from "react";
import moment from "moment";
import "bulma/css/bulma.min.css";

const EarthquakeDetails = ({ earthquake }) => {
  const timeOfQuake = moment(earthquake.time).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );

  return (
    <div class="column">
      <div class="card level">
        <div
          class="card-content level-item has-text-centered"
          style={{ backgroundColor: `#38a3a5` }}
        >
          <h1 class="title is-4" style={{ color: `white` }}>
            Earthquake Details
          </h1>
        </div>
      </div>
      <footer class="card-footer" style={{ backgroundColor: `#57cc99` }}>
        <div
          class="card-footer-item"
          style={{ marginTop: `50px`, marginBottom: `50px` }}
        >
          <h3>Place - {earthquake.place}</h3>
        </div>
        <div
          class="card-footer-item"
          style={{ marginTop: `50px`, marginBottom: `50px` }}
        >
          <h3>Magnitude - {earthquake.magnitude}</h3>
        </div>
        <div
          class="card-footer-item"
          style={{ marginTop: `50px`, marginBottom: `50px` }}
        >
          <h3>Time - {timeOfQuake}</h3>
        </div>
        <div
          class="card-footer-item"
          style={{ marginTop: `50px`, marginBottom: `50px` }}
        >
          <h3>Was it felt? {earthquake.felt ? "Yes" : "No"}</h3>
        </div>
      </footer>
    </div>
  );
};

export default EarthquakeDetails;
