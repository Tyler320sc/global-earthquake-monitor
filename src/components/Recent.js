import React from "react";
import moment from "moment";

const Recent = ({ firstEarthquake }) => {
  const timeOfQuake = moment(firstEarthquake.time).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  console.log(timeOfQuake);

  return (
    <section>
      <h1>Most Recent Earthquake</h1>
      <h3>Place - {firstEarthquake.place}</h3>
      <h3>Magnitude - {firstEarthquake.magnitude}</h3>
      <h3>Time - {timeOfQuake}</h3>
      <h3>Was it felt? {firstEarthquake.felt ? "Yes" : "No"}</h3>
    </section>
  );
};

export default Recent;
