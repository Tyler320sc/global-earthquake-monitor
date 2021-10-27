import React from "react";

const Recent = ({ firstEarthquake }) => {
  //   console.log(`earthquakeData`, earthquakeData);
  return (
    <section>
      <h1>Most Recent Earthquake</h1>
      <h4>
        {firstEarthquake.place} {firstEarthquake.magnitude} magnitude
      </h4>
    </section>
  );
};

export default Recent;
