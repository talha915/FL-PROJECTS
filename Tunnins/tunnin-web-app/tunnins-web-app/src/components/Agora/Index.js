import React, { Component } from 'react';

// Agora
import AgoraRTC from 'agora-rtc-sdk';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channel: ""
        };
    }
    onChange = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };
    onSubmit = e => {
        e.preventDefault();
        console.log("Submiting ", this.state.channel);
        this.setState({ channel: "" });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Channel Name</label>
                    <input
                        placeholder="Channel Name"
                        name="channel"
                        value={this.state.channel}
                    />
                    <input type="submit" value="Join Channel" />
                </form>
            </div>
        );
    }
}

export default Index;