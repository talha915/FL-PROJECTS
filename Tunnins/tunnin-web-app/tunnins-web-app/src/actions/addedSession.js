import localData from '../Data/Data.json';

import { added_session } from '../constants/constants';

export const addedSession=(data)=> {
    return {
        type: added_session,
        payload: data,
        editpayload: localData.editSesion
    }
}