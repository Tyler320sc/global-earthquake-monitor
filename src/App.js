import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Map from "./components/map";
import Recent from "./components/Recent";

const App = () => {
  const [earthquakeData, setEarthquakeData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
    );

    const features = response.data.features;
    // console.log(features);
    const earthquakes = features.map((feature) => {
      // console.log(earthquakes);
      return {
        time: feature.properties.time,
        place: feature.properties.place,
        magnitude: feature.properties.mag,
        tsunami: feature.properties.tsunami,
        felt: feature.properties.felt,
        lat: feature.geometry.coordinates[0],
        lng: feature.geometry.coordinates[1],
      };
    });
    setEarthquakeData(earthquakes);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(`From App.js`, earthquakeData);
  return (
    <>
      <Map earthquakeData={earthquakeData} />
      {/* <Recent earthquakeData={earthquakeData} /> */}
    </>
  );
};
export default App;
