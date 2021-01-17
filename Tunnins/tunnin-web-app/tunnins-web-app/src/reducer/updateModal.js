const initialState = {
    modalState: {
        popUp: false
    }
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case 'forgotPassword':
            return {
                ...state.modalState,
                popUp: !state.modalState.popUp,
                modalState: actions.payload
            }
        break;
        case 'resetPassword':
            return {
                //popUp: !state.modalState.popUp,
                modalState: actions.payload,
                popUp: !state.modalState.popUp
            }    
        default:
            return state;    
    }
}