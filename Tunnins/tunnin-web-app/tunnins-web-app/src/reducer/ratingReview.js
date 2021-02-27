// Constants
import { ratingReviews } from '../constants/constants';

const initialState = {
    ratings: {}
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case ratingReviews:
            return {
                ...state.ratings,
                data: actions.payload
            }
        default:
            return state;    
    }
}