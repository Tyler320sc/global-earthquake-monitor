import "./App.css";
import axios from "axios";
import "bulma/css/bulma.min.css";
import React, { useState, useEffect } from "react";
import Map from "./components/map";
import Recent from "./components/Recent";
import EarthquakeDetails from "./components/EarthquakeDetails";
import { FaGithub, FaTwitter } from "react-icons/fa";

const App = () => {
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
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
          lat: feature.geometry.coordinates[1],
          lng: feature.geometry.coordinates[0],
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
      <section class="hero is-small" style={{ backgroundColor: `#22577a` }}>
        <div class="hero-body has-text-centered">
          <p class="title is-1" style={{ color: `#f0f8ff` }}>
            Global Earthquake Monitor
          </p>
        </div>
      </section>

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
      <footer class="footer" style={{ backgroundColor: `#80ed99` }}>
        <div class="content has-text-centered is-primary">
          <p>
            <strong>By Tyler Carroll 2021</strong>
            <a href="https://github.com/Tyler320sc">
              <FaGithub
                style={{
                  marginLeft: `25px`,
                  marginRight: `25px`,
                  color: `black`,
                }}
              />
            </a>
            <a href="https://twitter.com/home">
              <FaTwitter
                style={{
                  color: `black`,
                }}
              />
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
export default App;
