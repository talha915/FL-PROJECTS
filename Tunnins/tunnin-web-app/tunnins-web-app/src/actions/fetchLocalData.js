import axios from 'axios';
import localData from '../Data/Data.json';

export const getLocal=()=>{
    return (dispatch)=> {       
        dispatch({
            type: 'fetchLocalData',
            payload: localData
        })        
    }
}