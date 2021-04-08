import React, { useState, useEffect } from 'react';
import { ReactMic } from 'react-mic';

function Mic() {

    const [record, setRecord] = useState(false);

    const startRecording = () => {
        setRecord(true);
    }

    useEffect(() => {
        startRecording();
    }, []);

    const onData = (recordedBlob) => {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    return (
        <ReactMic
            record={record}
            className="sound-wave"
            onData={onData}
            strokeColor="#fff"
            backgroundColor="#D0A592"
        />
    );

}

export default Mic;