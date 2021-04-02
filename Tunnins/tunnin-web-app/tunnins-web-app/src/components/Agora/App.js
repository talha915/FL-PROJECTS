import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { patchFetch } from '../../actions/patchApi';

// Constant
import { agora_key } from '../../constants/constants';

import Call from "./Call";

function App(props) {

    const [status, setStatus] = useState(false);

    const dispatch = useDispatch();
    const channel = useSelector(state => state);

    console.log("Channel", channel);

    useEffect(() => {
        selectChannel();
    });

    const selectChannel = () => {
        setStatus(props.status);
        if (status) {
            callChannel(status);
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
            <Call channel="status" />
        </div>
    );

}

export default App;