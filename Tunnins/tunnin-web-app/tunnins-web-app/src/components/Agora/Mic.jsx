import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

function Mic() {

    const [record, setRecord] = useState(false);

    const startRecording = () => {
        setRecord(true);
    }

    const onData = (recordedBlob) => {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    return (
        <ReactMic
            record={record}
            className="sound-wave"
            onData={onData}
            strokeColor="#000000"
            backgroundColor="#FF4081" 
        />
    );

}

export default Mic;