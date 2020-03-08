import {WEATHER} from 'Stores/Weather/constant'
import {INITIAL_STATE} from 'Stores/Weather/States'
import { fromJS } from 'immutable'

const weatherReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case WEATHER.GET_WEAHTER_SUCCESS:
            // return fromJS({
            //     ...state,
            //     dataWeather: action.locationData
            // })
            return {
                ...state,
                dataWeather: action.locationData,
            }
        case WEATHER.GET_WEATHER_FAIL:
            return {
                ...state
            }
        default: 
            return state
    }
}
export const WeatherReducers = {
    weatherReducer
}