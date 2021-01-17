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
        case 'resetPassword':
            return {
                //popUp: !state.modalState.popUp,
                modalState: actions.payload,
                popUp: !state.modalState.popUp
            } 
        case 'closeModal':
            return {
                popUp: false,
                modalState: actions.payload
            }
        default:
            return state;    
    }
}