import axios from 'axios';
import localData from '../Data/Data.json';

export const updateModal = (typeModal) => {
    if(typeModal == 'forgot') {
        return {
            type: 'forgotPassword',
            payload: localData.forgotPassword
        }
    }
}