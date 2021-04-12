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

    return (
        <div className="audio-check-wrapper">
        <ReactMic
            record={record}
            className="sound-wave"
            strokeColor="#fff"
            backgroundColor="#D0A592"
        />
        </div>
    );

}

export default Mic;