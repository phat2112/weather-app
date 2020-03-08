import React,{useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Input } from "antd";
import Loading from 'Component/Loading';
import { CloudOutlined } from '@ant-design/icons';

const Weather = ({getWeather, dataWeather, loading}) => {
  const { Search } = Input;
  const [maxDegree, setMaxTemp] = useState(0)
  const [minDegree, setMinTemp] = useState(0)
  const [mainDegree, setDegree] = useState(0)


  useEffect(() => {
      if(dataWeather){
          let dgreeMaxNumber =  dataWeather.main.tempMax - 273
          let degreeMinNumber = dataWeather.main.tempMin - 273
          let degreeTempNumber = dataWeather.main.temp -273
        setMaxTemp(Math.ceil(dgreeMaxNumber))
        setMinTemp(Math.ceil(degreeMinNumber))
        setDegree(Math.ceil(degreeTempNumber))

      }
  }, [dataWeather, loading])
  return (
    <div className="weather">
      <h1>Weather broadcast on over the world <CloudOutlined /> <CloudOutlined /></h1>
      <div className="weather-search">
        <h1>Find your location ?</h1>
        <Search
          placeholder="input search text"
          onSearch={value => getWeather(value)}
        />
      </div>
      <div className="weather-container">
        <h1>{dataWeather ? ( dataWeather.name ) : 'Location'}</h1>
        <h2>{dataWeather ? mainDegree : 'average degree'}</h2>
        <h2>{dataWeather ? maxDegree : 'max degree'} - {dataWeather ? minDegree : 'min degree'}</h2>
      </div>
      { loading ? <Loading /> : null }
    </div>
  );
};

Weather.propTypes = {
    getWeather: PropTypes.func,
    dataWeather: PropTypes.object,
    loading: PropTypes.bool,
};

export default Weather;
