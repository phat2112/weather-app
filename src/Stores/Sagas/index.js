import {all} from 'redux-saga/effects'
import weatherSagas from 'Stores/Weather/Sagas'

export default function* rootSaga(){
	yield all([
		weatherSagas(),
	])
}
