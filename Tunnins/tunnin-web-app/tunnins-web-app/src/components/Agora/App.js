import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
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
        dispatch(getFetchParam(agora_key, sessionId));      
    }

    console.log("Props: ", props);

    return (
        <div className="App">
            <Call disableVideo={props.videoStatus}/>
        </div>
    );

}

export default App;