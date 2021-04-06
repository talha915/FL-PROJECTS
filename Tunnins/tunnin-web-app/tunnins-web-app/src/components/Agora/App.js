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

    let sessionId = props.sessionId;

    useEffect(() => {
        getChannel();
    });

    const getChannel=()=> {   
        let keyObj = {
            "sessionId": sessionId
        };
        dispatch(patchFetch(agora_key, keyObj));      
    }

    console.log("Props: ", props);

    return (
        <div className="App">
            <Call channel="TestSession2" />
        </div>
    );

}

export default App;