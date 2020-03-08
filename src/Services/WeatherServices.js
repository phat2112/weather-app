import axios from 'axios'
import {decamelizeKeys, camelizeKeys} from 'humps'

const apiKey = '3f5bc5163f264a60715b888bf1b34e49';
const getLocationDegree = location => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
                .then(res => camelizeKeys(res.data))
}
export const weatherServices = {
    getLocationDegree
}