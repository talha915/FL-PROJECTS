import React, { useEffect } from 'react';
import AgoraRTC from "agora-rtc-sdk";

import {
    Button
} from 'reactstrap';

// Redux
import { useSelector } from "react-redux";

// Constants
import { agora_app_id, audience_type, host_type, trainer_user_type } from '../../constants/constants';

var rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {}
};

// Options for joining a channel
var option = {
    appID: agora_app_id,
    //channel: "test",
    uid: null,
    //token: "0062aded76d082d42acb12eb2918e3c1e74IAAOA5c5BYWXYPtNBhUNVTMtmMWcFsNdJXIkMiSb5rneUQx+f9gAAAAAEAAeXT+ce3ZrYAEAAQB9dmtg",
    //key: "0061c3aa8a838d14cd99bd626ab94291542IACP66wCBtKScftiDPTVJjwl85q+wUM3vwwQ5XYIu8bNpg5g9dIAAAAAIgDnqtWtQc5oYAQAAQDRimdgAgDRimdgAwDRimdgBADRimdg",
    //secret: "65af3512430e4ae795ef022d2459aff1"
}

function leaveEventHost(params) {
    rtc.client.unpublish(rtc.localStream, function (err) {
        console.log("publish failed");
        console.error(err);
    })
    rtc.client.leave(function (ev) {
        console.log(ev)
    })
}

function leaveEventAudience(params) {
    rtc.client.leave(function () {
        console.log("client leaves channel");
        //……
    }, function (err) {
        console.log("client leave failed ", err);
        //error handling
    })
}

function Call(props) {

    const agora = useSelector(state => state.getApi);

    const userLogged = useSelector(state => state.postFetch);

    const joinChannel = (role) => {
        // Create a client
        rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
        rtc.client.setLowStreamParameter({
            width: 3840,
            height: 2160,
            framerate: 60,
            bitrate: 6500,
        });
        //rtc.client.setEncoderConfiguration({ width: 1280, height: 720 }).then(() => { /** ... **/ })
        console.log("Role: ", role);
        // Initialize the client
        rtc.client.init(option.appID, function () {
            console.log("init success");

            // Join a channel
            rtc.client.join(option.token ?
                option.token : null,
                option.channel, option.uid ? +option.uid : null, function (uid) {
                    console.log("join channel: " + option.channel + " success, uid: " + uid);
                    rtc.params.uid = uid;
                    if (role === host_type) {
                        rtc.client.setClientRole(host_type);
                        // Create a local stream
                        rtc.localStream = AgoraRTC.createStream({
                            streamID: rtc.params.uid,
                            audio: true,
                            video: true,
                            screen: false,
                            width: 3840,
                            height: 2160,
                            framerate: 60,
                            bitrate: 6500,
                        })

                        //rtc.localStream.setEncoderConfiguration({ width: 1280, height: 720 }).then(() => { /** ... **/ })

                        // Initialize the local stream
                        rtc.localStream.init(function () {
                            console.log("init local stream success");
                            rtc.localStream.play("local_stream");
                            rtc.client.publish(rtc.localStream, function (err) {
                                console.log("publish failed");
                                console.error(err);
                            })
                        }, function (err) {
                            console.error("init local stream failed ", err);
                        });

                        rtc.client.on("connection-state-change", function (evt) {
                            console.log("audience", evt)
                        })


                    }
                    if (role === audience_type) {

                        rtc.client.on("connection-state-change", function (evt) {
                            console.log("audience", evt)
                        })

                        rtc.client.on("stream-added", function (evt) {
                            var remoteStream = evt.stream;
                            var id = remoteStream.getId();
                            if (id !== rtc.params.uid) {
                                rtc.client.subscribe(remoteStream, function (err) {
                                    console.log("stream subscribe failed", err);
                                })
                            }
                            console.log('stream-added remote-uid: ', id);
                        });

                        rtc.client.on("stream-removed", function (evt) {
                            var remoteStream = evt.stream;
                            var id = remoteStream.getId();
                            console.log('stream-removed remote-uid: ', id);
                        });

                        rtc.client.on("stream-subscribed", function (evt) {
                            var remoteStream = evt.stream;
                            var id = remoteStream.getId();
                            remoteStream.play("remote_video_");
                            console.log('stream-subscribed remote-uid: ', id);
                        })

                        rtc.client.on("stream-unsubscribed", function (evt) {
                            var remoteStream = evt.stream;
                            var id = remoteStream.getId();
                            remoteStream.pause("remote_video_");
                            console.log('stream-unsubscribed remote-uid: ', id);
                        })
                    }
                }, function (err) {
                    console.error("client join failed", err)
                })

        }, (err) => {
            console.error(err);
        });
    }

    const checkUserType = () => {
        if (userLogged.hasOwnProperty('userLogged')) {
            let { userType } = userLogged.userLogged;
            console.log("User Logged:", userType);
            if (userType === trainer_user_type) {
                joinChannel(host_type);
            }
            else {
                joinChannel(host_type)
            }
        }
    }

    if (agora.hasOwnProperty('agoraObj')) {
        let { data } = agora.agoraObj;
        option.token = data.Token;
        option.channel = data.ChannelName;
        checkUserType();
    }

    const disableVideo=()=> {
        AgoraRTC.createStream({
            streamID: rtc.params.uid,
            audio: true,
            video: false,
            screen: false,
            width: 3840,
            height: 2160,
            framerate: 60,
            bitrate: 6500,
        });
    }


    return (
        <div>
            <div id="local_stream" className="local_stream" style={{ width: "1080px", height: "720px" }}></div>
            
            {/* <div
                id="remote_video_"
                style={{ width: "400px", height: "400px" }}
            /> */}
        </div>
    );
}

export default Call;