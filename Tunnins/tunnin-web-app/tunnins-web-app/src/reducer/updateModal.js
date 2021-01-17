const initialState = {
    modalState: {
        popUp: false
    }
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case 'forgotPassword':
            console.log("I am called");
            return {
                ...state,
                modalState: actions.payload
            }
        default:
            return state;    
    }
}