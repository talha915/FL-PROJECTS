import React from "react";
import Webcam from "react-webcam";


const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user"
};

function WebcamComponent() {
    return (
        <Webcam
            audio={false}
            height={500}
            screenshotFormat="image/jpeg"
            width={500}
            videoConstraints={videoConstraints}
        />
    )
}

export default WebcamComponent;