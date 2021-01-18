import axios from 'axios';
import localData from '../Data/Data.json';

export const updateModal = (typeModal) => {
    if(typeModal == 'forgot') {
        return {
            type: 'forgotPassword',
            payload: localData.forgotPassword
        }
    }
    else if(typeModal == 'reset') {
        return {
            type: 'resetPassword',
            payload: localData.resetPassword
        }
    }
    else if(typeModal == 'close') {
        return {
            type: 'closeModal',
            payload: localData.signUp
        }
    }
}