import React, { useEffect, useState } from "react";
import Search from "./Search";

export default function Weather() {
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState(null);
  const [search, setSearch] = useState("");

  async function fetchWeather(city) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9cf145b87a35a1d51bdf0361435b9b31`
      );

      const data = await response.json();
      if (data) {
        setData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeather(search);
  }

  useEffect(() => {
    fetchWeather("lucknow");
  }, []);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {Loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {Data?.name}, <span>{Data?.sys?.country}</span>
            </h2>
          </div>
          <div className="temp">{Data?.main?.temp}</div>
          <p className="description">
            {Data && Data.weather && Data.weather[0]
              ? Data.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{Data?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{Data?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
