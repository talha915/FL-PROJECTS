import localData from '../Data/Data.json';

// Constants
import { listed_notification } from '../constants/constants';

export const ListNotification=(type)=> {
    if(type == "past") {
        let data = JSON.parse(JSON.stringify(localData.notification));
        let cards = data.cards;
        for(let i=0; i<cards.length; i++) {
            cards[i].golive = cards[i].past;
            cards[i].routeTo = "/session-details-past";
        }
        return {
            type: listed_notification,
            payload: data,
        }
    }
    else {
        return {
            type: listed_notification,
            payload: localData.notification,
        }
    }
}

