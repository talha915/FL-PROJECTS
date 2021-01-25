import localData from '../Data/Data.json';

// Constants
import { listed_notification } from '../constants/constants';

export const ListNotification=()=> {
    return {
        type: listed_notification,
        payload: localData.notification,
    }
}

