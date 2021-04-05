import React from 'react';
import AgoraRTC from "agora-rtc-sdk";

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
  appID: "2aded76d082d42acb12eb2918e3c1e74",
  channel: "test",
  uid: null,
  token: "0062aded76d082d42acb12eb2918e3c1e74IAAOA5c5BYWXYPtNBhUNVTMtmMWcFsNdJXIkMiSb5rneUQx+f9gAAAAAEAAeXT+ce3ZrYAEAAQB9dmtg",
  key: "0061c3aa8a838d14cd99bd626ab94291542IACP66wCBtKScftiDPTVJjwl85q+wUM3vwwQ5XYIu8bNpg5g9dIAAAAAIgDnqtWtQc5oYAQAAQDRimdgAgDRimdgAwDRimdgBADRimdg",
  secret: "65af3512430e4ae795ef022d2459aff1"
}

function joinChannel(role) {
  // Create a client
  rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
  // Initialize the client
  rtc.client.init(option.appID, function () {
      console.log("init success");

      // Join a channel
      rtc.client.join(option.token ?
          option.token : null,
          option.channel, option.uid ? +option.uid : null, function (uid) {
              console.log("join channel: " + option.channel + " success, uid: " + uid);
              rtc.params.uid = uid;
              if (role === "host") {
                  rtc.client.setClientRole("host");
                  // Create a local stream
                  rtc.localStream = AgoraRTC.createStream({
                      streamID: rtc.params.uid,
                      audio: true,
                      video: true,
                      screen: false,
                  })

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
              if (role === "audience") {
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
  return (
      <div>
          <button onClick={() => joinChannel('host')}>Join Channel as Host</button>
          <button onClick={() => joinChannel('audience')}>Join Channel as Audience</button>
          <button onClick={() => leaveEventHost('host')}>Leave Event Host</button>
          <button onClick={() => leaveEventAudience('audience')}>Leave Event Audience</button>
          <div id="local_stream" className="local_stream" style={{ width: "400px", height: "400px" }}></div>
          <div
              id="remote_video_"
              style={{ width: "400px", height: "400px" }}
          />
      </div>
  );
}

export default Call;