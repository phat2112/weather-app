import {combineReducers} from 'redux'
import {WeatherReducers} from 'Stores/Weather/Reducers'
import { LoadingReducers } from 'Stores/Loading/Reducers'


const rootReducer = combineReducers({
    weather: WeatherReducers.weatherReducer,
    loading: LoadingReducers.loadingReducers,
})
export default rootReducer