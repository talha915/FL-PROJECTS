// Contant
import {
    setting_contact,
    setting_bank,
    setting_terms,
    setting_about,
    setting_privacy,
    setting_faqs
} from '../constants/constants';

const initialState = {
    settings: {

    }
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case setting_contact:
            return {
                ...state.settings,
                contact: actions.payload
            }
        case setting_bank:
            return {
                ...state.settings,
                bank: actions.payload
            }
        case setting_terms:
            return {
                ...state.settings,
                terms: actions.payload
            }
        case setting_about:
            return {
                ...state.settings,
                about: actions.payload
            }
        case setting_privacy:
            return {
                ...state.settings,
                privacy: actions.payload
            }
        case setting_faqs:
            return {
                ...state.settings,
                faqs: actions.payload
            }
        default:
            return state;
    }
}