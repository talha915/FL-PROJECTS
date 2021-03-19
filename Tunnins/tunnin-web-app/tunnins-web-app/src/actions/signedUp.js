// Constants
import { signed_up } from '../constants/constants';

export const SignedUp=(action_type, data)=> {
    return {
        type: action_type,
        payload: data,
    }
}