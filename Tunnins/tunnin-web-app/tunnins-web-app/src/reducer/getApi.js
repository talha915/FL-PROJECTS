// Constants
import { user_logout, upcoming_session, upcoming_client_sessions, past_sessions, agora_key, get_profile, pages, sessionById, get_booked_users, get_reviews, payments_api, all_faqs, toggle_faq } from '../constants/constants';

const initialState = {

}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case user_logout:
            return {
                ...state,
                logout: actions.payload
            }
        case upcoming_session:
            return {
                ...state,
                upcomingSession: actions.payload
            }
        case past_sessions:
            return {
                ...state,
                pastSession: actions.payload
            }
        case upcoming_client_sessions:
            return {
                ...state,
                upcomingSession: actions.payload
            }        
        case agora_key:
            return {
                ...state,
                agoraObj: actions.payload
            }
        case get_profile:
            return {
                ...state,
                userProfile: actions.payload
            }
        case pages:
            let pageData = JSON.parse(JSON.stringify(actions.payload));
            let parsedPage = {};
            for (let i = 0; i < pageData.length; i++) {
                if (pageData[i].title === "Terms & Conditions") {
                    parsedPage.terms = pageData[i];
                }
                if (pageData[i].title === "Privacy Policy") {
                    parsedPage.privacy = pageData[i];
                }
                if (pageData[i].title === "About Us") {
                    parsedPage.about = pageData[i];
                }
                if(pageData[i].title === "Cancellation Policy") {
                    parsedPage.cancelPolicy = pageData[i];
                }
            }
            return {
                ...state,
                pagesData: parsedPage
            }
        case sessionById:
            return {
                ...state,
                sessionByIdRes: actions.payload
            }
        case get_booked_users:
            return {
                ...state,
                bookedUsers: actions.payload
            }  
        case get_reviews:
            return {
                ...state,
                getReviews: actions.payload
            }  
        case payments_api:
            return {
                ...state,
                payouts: actions.payload
            }
        case all_faqs:
            let faqs = JSON.parse(JSON.stringify(actions.payload));
            for(let i=0; i<faqs.length; i++) {
                faqs[i].flag = false;
            }
            return {
                ...state,
                allFaqs: faqs
            }   
        case toggle_faq:
            return {
                ...state, 
                allFaqs: actions.payload
            }                     
        default:
            return state;    
    }
}