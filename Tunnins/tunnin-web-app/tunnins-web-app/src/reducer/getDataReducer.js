const initialState = {
    dataState: {}
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case 'fetchLocalData':
            return {
                ...state.dataState,
                dataState: actions.payload
            }
        default:
            return state;    
    }
}