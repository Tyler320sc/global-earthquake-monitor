import React from "react";

const EarthquakeDetails = ({ earthquake }) => {
  //   console.log(`earthquakeData`, earthquakeData);
  return (
    <section>
      <h1>Earthquake Details</h1>
      <h4>
        {earthquake.place} {earthquake.magnitude} magnitude
      </h4>
    </section>
  );
};

export default EarthquakeDetails;
