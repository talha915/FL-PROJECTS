import React from "react";
import Webcam from "react-webcam";


const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user"
};

function WebcamComponent() {
    return (
        <Webcam className="video-check-wrapper"
            audio={false}
            height={300}
            screenshotFormat="image/jpeg"
            width={300}
            videoConstraints={videoConstraints}
        />
    )
}

export default WebcamComponent;