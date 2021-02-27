import localData from '../Data/Data.json';

// Contant
import { profile_face } from '../constants/constants';

export const profileFace=()=> {
    return {
        type: profile_face,
        payload: localData.profileFace,
    }
}