import React from "react";
import moment from "moment";

const EarthquakeDetails = ({ earthquake }) => {
  const timeOfQuake = moment(earthquake.time).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );

  return (
    <section>
      <h1>Earthquake Details</h1>
      <h3>Place - {earthquake.place}</h3>
      <h3>Magnitude - {earthquake.magnitude}</h3>
      <h3>Time - {timeOfQuake}</h3>
      <h3>Was it felt? {earthquake.felt ? "Yes" : "No"}</h3>
    </section>
  );
};

export default EarthquakeDetails;
