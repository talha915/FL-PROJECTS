import axios from 'axios';
import localData from '../Data/Data.json';

export const getLocal = () => {
    return (dispatch) => {
        if (localData) {
            dispatch({
                type: 'fetchLocalData',
                payload: localData
            })
        }
    }
}