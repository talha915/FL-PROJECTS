import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { patchFetch } from '../../actions/patchApi';
import { getFetchParam } from '../../actions/getFetchParam';

// Constant
import { agora_key, upcoming_session } from '../../constants/constants';

import Call from "./Call";

function App(props) {

    const [status, setStatus] = useState(false);

    const dispatch = useDispatch();
    const channel = useSelector(state => state.postFetch);

    console.log("Channel", channel);

    useEffect(() => {
        selectChannel();
    });

    const selectChannel=()=> {
        if(channel.hasOwnProperty('userLogged')) {
            let id = channel.userLogged._id;
            dispatch(getFetchParam(upcoming_session+id));
            setStatus(props.status);
            if (status) {
                callChannel(status);
            }
        }
    }

    const callChannel=(status)=> {
        if(status) {
            let keyObj = {
                "channelName" : "TrainingSession",
                "sessionId" : "601aaf9e88f63a1e64e6aa75"
            };
            dispatch(patchFetch(agora_key, keyObj));
        }
    }

    return (
        <div className="App">
            <Call channel="TestSession2" />
        </div>
    );

}

export default App;