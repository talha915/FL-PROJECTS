const initialState = {
    modalState: {}
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case 'forgotPassword':
            return {
                ...state,
                modalState: actions.payload
            }
        default:
            return state;    
    }
}