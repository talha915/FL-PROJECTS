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

    addToken=(props)=> {
        this.setState({ popupTweet: props });
    }

    closeTweets=(props)=> {
        this.setState({ popupTweet: props });
    }

    render() {
        return (
            <div>
                <div id="page">
                    <main className="dashboard-wrap">
                        <Sidebar />
                        <SettingContent addToken={this.addToken}/>
                    </main>
                </div>
                
                {   
                    this.state.popupTweet && this.state.popupTweet ? 
                        <PopupTweets closeTweets={this.closeTweets}/>
                    :
                        ''    
                }
            </div>
        )
    }
}

export default Setting;