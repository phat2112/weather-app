import {fromJS} from 'immutable'

const locationWeatherData = state => {
    // console.log(state['weather'].get('dataWeather').toJS())

    // return state['weather'].get('dataWeather').toJS()
    return state['weather'].dataWeather

}
export const WeatherSelectors = {
    locationWeatherData
} 