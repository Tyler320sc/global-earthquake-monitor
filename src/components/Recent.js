import React from "react";

const Recent = ({ earthquakeData }) => {
  //   console.log(`earthquakeData`, earthquakeData);
  return (
    <section>
      <h1>Most Recent Earthquake</h1>
      <h4>
        {earthquakeData[0].place} {earthquakeData[0].magnitude} magnitude
      </h4>
    </section>
  );
};

export default Recent;
