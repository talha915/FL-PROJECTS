import localData from '../Data/Data.json';

// Constants
import { listed_notification, trainer_user_type } from '../constants/constants';

export const ListNotification=(type, userType)=> {
    if(type == "past") {
        let cards;
        let data = JSON.parse(JSON.stringify(localData.notification));
        if(userType === trainer_user_type) {
            cards = data.cards;
            for(let i=0; i<cards.length; i++) {
                cards[i].golive = cards[i].past;
            }
        }
        else {
            cards = data.userCards;
            for(let i=0; i<cards.length; i++) {
                cards[i].golive = cards[i].past;
            }
            data.cards = data.userCards;
        }
        return {
            type: listed_notification,
            payload: data,
        }
    }
    else {
        let cards;
        let data = JSON.parse(JSON.stringify(localData.notification));
        if(userType !== trainer_user_type) {
            cards = data.userCards;
            console.log("Users: ", cards);
            for(let i=0; i<cards.length; i++) {
                cards[i].golive = cards[i].past;
                cards[i].status="Booked";
                cards[i].statusDetail = "Booked";
            }
            data.cards = data.userCards;
        }
        return {
            type: listed_notification,
            payload: data,
        }
    }
}
