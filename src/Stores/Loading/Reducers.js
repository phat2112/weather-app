import {INITIAL_STATE} from 'Stores/Loading/States'
import {LOADING_ACTIONS} from 'Stores/Loading/constant'

const loadingReducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING_ACTIONS.SHOW_LOADING:
            return{
                ...state,
               loading: true,
            }
        case LOADING_ACTIONS.HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }
}
export const LoadingReducers = {
    loadingReducers
}