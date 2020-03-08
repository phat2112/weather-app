import {WEATHER} from 'Stores/Weather/constant'

const getWeather = location => ({
    type: WEATHER.GET_WEATHER,
    location
})
const setWeather = locationData => ({
    type: WEATHER.GET_WEAHTER_SUCCESS,
    locationData,
})
const setWeatherError = error => ({
    type: WEATHER.GET_WEATHER_FAIL,
    error
})
export const weatherActions = {
    getWeather,
    setWeather,
    setWeatherError,
}