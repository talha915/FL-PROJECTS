import localData from '../Data/Data.json';


export const profileForm=(action_type, data)=> {
    return {
        type: action_type,
        payload: data,
    }
}