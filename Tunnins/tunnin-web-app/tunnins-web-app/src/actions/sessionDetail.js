import localData from '../Data/Data.json';

// Constants
import { session_details, session_past_details } from '../constants/constants';

export const sessionDetails=(type)=> {
    if(type === session_details) {
        return {
            type: session_details,
            payload: localData.sessionDetails,
        }
    }
    else {
        let pastData = JSON.parse(JSON.stringify(localData.sessionDetails));
        let btns = pastData.btns;
        for(let i=0; i<btns.length; i++) {
            btns[i].flag = !btns[i].flag;
        }
        return {
            type: session_details,
            payload: pastData
        }
    }
}