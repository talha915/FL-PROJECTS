import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import SettingContent from '../Settings/SettingContent';
import PopupTweets from '../Settings/PopupTweets';

import '../../styles/main.css';

class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popupTweet: false
        }
    }

    popupTweets=()=> {
        this.setState({ popupTweet: !this.state.popupTweet });
    }

    render() {
        return (
            <div>
                <div id="page">
                    <main className="dashboard-wrap">
                        <Sidebar />
                        <SettingContent addToken={this.popupTweets}/>
                    </main>
                </div>

                {   
                    this.state.popupTweet && this.state.popupTweet ? 
                        <PopupTweets />
                    :
                        ''    
                }
            </div>
        )
    }
}

export default Setting;