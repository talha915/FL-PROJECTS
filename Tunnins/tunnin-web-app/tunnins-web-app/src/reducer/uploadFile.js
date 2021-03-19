// Constants
import { uploaded_file } from '../constants/constants';

const initialState = {
    uploadFile: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case uploaded_file:
            return {
                ...state.uploadFile,
                data: actions.payload
            }
        default:
            return state;    
    }
}