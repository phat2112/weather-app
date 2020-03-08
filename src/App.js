import React,{useEffect} from 'react';
import Weather from 'Component/Weather';
import {connect} from 'react-redux'
import {WeatherSelectors} from 'Stores/Weather/Selectors'
import {weatherActions} from 'Stores/Weather/Actions'
import {LoadingSelectors} from 'Stores/Loading/Selectors'
import Loading from 'Component/Loading';
import WeatherList from 'Component/WeatherList';

function App({getWeather, dataWeather, loading}) {
  useEffect(() => {
    console.log('loading', loading)
  }, [loading])
  return (
    <>
    <div className="App">
        <Weather getWeather={getWeather} dataWeather={dataWeather} loading={loading}/>
        {/* <WeatherList getWeather={getWeather} dataWeather={dataWeather}/> */}
    </div>
    </>
  );
}
const mapStateToProps = state => ({
  dataWeather: WeatherSelectors.locationWeatherData(state),
  loading: LoadingSelectors.loading(state)
})
const mapDispatchToProps = dispatch => ({
  getWeather: location => dispatch(weatherActions.getWeather(location)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
