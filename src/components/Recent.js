import React from "react";
import moment from "moment";
import "bulma/css/bulma.min.css";

const Recent = ({ firstEarthquake }) => {
  const timeOfQuake = moment(firstEarthquake.time).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );

  return (
    <div class="column">
      <div class="card level" style={{ backgroundColor: `#38a3a5` }}>
        <div class="card-content level-item has-text-centered" id="question">
          <h1 class="title is-4" style={{ color: `white` }}>
            Most Recent Earthquake
          </h1>
        </div>
      </div>
      <footer class="card-footer" style={{ backgroundColor: `#57cc99` }}>
        <div
          class="card-footer-item"
          style={{ marginTop: `50px`, marginBottom: `50px` }}
        >
          <h3>Place - {firstEarthquake.place}</h3>
        </div>
        <div
          class="card-footer-item"
          style={{ marginTop: `50px`, marginBottom: `50px` }}
        >
          <h3>Magnitude - {firstEarthquake.magnitude}</h3>
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
          <h3>Was it felt? {firstEarthquake.felt ? "Yes" : "No"}</h3>
        </div>
      </footer>
    </div>
  );
};

export default Recent;
