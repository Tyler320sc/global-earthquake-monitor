import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Map from "./components/map";
import Recent from "./components/Recent";
import EarthquakeDetails from "./components/EarthquakeDetails";

const App = () => {
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
      );

      const features = response.data.features.filter(
        (earthquake) => earthquake.properties.mag > 0
      );
      const earthquakes = features.map((feature) => {
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
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Map earthquakeData={earthquakeData} setSelected={setSelected} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {selected ? (
            <EarthquakeDetails earthquake={selected} />
          ) : (
            <Recent firstEarthquake={earthquakeData[0]} />
          )}
        </>
      )}
    </>
  );
};
export default App;
