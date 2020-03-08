import { put, call, takeLatest } from 'redux-saga/effects'
import {WEATHER} from 'Stores/Weather/constant'
import {weatherActions} from './Actions'
import {weatherServices} from 'Services/WeatherServices'
import {LoadingActions} from 'Stores/Loading/Actions'

function* handleChangeWeather({location}){
    try{
        const resp = yield call(weatherServices.getLocationDegree, location)
        yield put(LoadingActions.showLoading())
        yield put(weatherActions.setWeather(resp))
        yield put(LoadingActions.hideLoading())
    }
    catch(err){
        yield put(LoadingActions.hideLoading())
        yield put(weatherActions.setWeatherError(err))
    }
}
export default function* watcher(){
    yield takeLatest(WEATHER.GET_WEATHER, handleChangeWeather)
}