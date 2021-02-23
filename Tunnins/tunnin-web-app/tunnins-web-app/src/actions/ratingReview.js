import localData from '../Data/Data.json';

// Constants
import { ratingReviews } from '../constants/constants';

export const ratingReview=()=> {
    return {
        type: ratingReviews,
        payload: localData.reviews
    }
}