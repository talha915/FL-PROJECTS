import axios from 'axios';

import localData from '../Data/Data.json';

export const getLocal=()=>{
    return (dispatch)=> {
        axios.get(localData)
        .then((res)=> {
            dispatch({
                type: 'fetchLocalData',
                payload: res
            })
        })
    }
}