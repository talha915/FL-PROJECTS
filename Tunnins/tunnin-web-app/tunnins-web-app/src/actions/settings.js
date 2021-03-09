import localData from '../Data/Data.json';

// Contant
import {
    setting_contact,
    setting_bank,
    setting_terms,
    setting_about,
    setting_privacy,
    setting_faqs,
    setting_update_faqs
} from '../constants/constants';

export const settings=(type)=> {
    if (type === setting_contact) {
        return {
            type: setting_contact,
            payload: localData.settings.contacts,
        }
    }
    else
        if (type === setting_bank) {
            return {
                type: setting_bank,
                payload: localData.settings.bankDetails,
            }
        }
    else
        if(type === setting_terms) {
            return {
                type: setting_terms,
                payload: localData.settings.terms,
            }
        }
    else 
        if(type === setting_about) {
            return {
                type: setting_about,
                payload: localData.settings.about
            }
        }
    else 
        if(type === setting_privacy) {
            return {
                type: setting_privacy,
                payload: localData.settings.privacy
            }
        }
    else 
        if(type === setting_faqs) {
        return {
            type: setting_faqs,
            payload: localData.settings.faqs
        }
    }
    else {
        let faqs = JSON.parse(JSON.stringify(localData.settings.faqs));
        let data = faqs.quesList;
        for(let i=0; i<data.length; i++) {
            if(data[i].flag === true) {
                data[i].flag = false;
            }
            if(type.title === data[i].title) {
                data[i].flag = !data[i].flag;
            }
        }
        return {
            type: setting_update_faqs,
            payload: faqs
        }
    }                
}