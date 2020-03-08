import {LOADING_ACTIONS} from 'Stores/Loading/constant'

const showLoading = () => ({
    type: LOADING_ACTIONS.SHOW_LOADING,
})
const hideLoading = () => ({
    type: LOADING_ACTIONS.HIDE_LOADING,
})
export const LoadingActions = {
    showLoading,
    hideLoading,
}