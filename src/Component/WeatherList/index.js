import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "Component/Loading";
import { CloudOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";

const WeatherList = ({ getWeather, dataWeather }) => {
  const [maxDegree, setMaxTemp] = useState(0);
  const [minDegree, setMinTemp] = useState(0);
  const [mainDegree, setDegree] = useState(0);

  useEffect(() => {
    if (dataWeather) {
      let dgreeMaxNumber = dataWeather.main.tempMax - 273;
      let degreeMinNumber = dataWeather.main.tempMin - 273;
      let degreeTempNumber = dataWeather.main.temp - 273;
      setMaxTemp(Math.ceil(dgreeMaxNumber));
      setMinTemp(Math.ceil(degreeMinNumber));
      setDegree(Math.ceil(degreeTempNumber));
    }
  }, [dataWeather]);
  return (
    <div className="weather">
      <h1>
        Weather broadcast on over the world <CloudOutlined /> <CloudOutlined />
      </h1>
      <div className="weather-section">
        <div className="weather-container">
          {dataWeather ? (
            <>
              <h1>{dataWeather.name}</h1>
              <h2>{mainDegree}</h2>
              <h2>
                {maxDegree} - {minDegree}
              </h2>
            </>
          ) : (
            <Skeleton active />
          )}
        </div>
        <div className="weather-container">
          {dataWeather ? (
            <>
              <h1>{dataWeather.name}</h1>
              <h2>{mainDegree}</h2>
              <h2>
                {maxDegree} - {minDegree}
              </h2>
            </>
          ) : (
            <Skeleton active />
          )}
        </div>
        <div className="weather-container">
          {dataWeather ? (
            <>
              <h1>{dataWeather.name}</h1>
              <h2>{mainDegree}</h2>
              <h2>
                {maxDegree} - {minDegree}
              </h2>
            </>
          ) : (
            <Skeleton active />
          )}
        </div>
        <div className="weather-container">
          {dataWeather ? (
            <>
              <h1>{dataWeather.name}</h1>
              <h2>{mainDegree}</h2>
              <h2>
                {maxDegree} - {minDegree}
              </h2>
            </>
          ) : (
            <Skeleton active />
          )}
        </div>
      </div>
    </div>
  );
};

WeatherList.propTypes = {
  getWeather: PropTypes.func,
  dataWeather: PropTypes.object,
  loading: PropTypes.bool
};

export default WeatherList;
