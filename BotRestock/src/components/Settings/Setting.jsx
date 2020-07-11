import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import SettingContent from '../Settings/SettingContent';
import PopupTweets from '../Settings/PopupTweets';
import {withRouter} from 'react-router-dom';
import '../../styles/main.css';

class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popupTweet: false
        }
    }

    popUpTweets=()=> {
        this.props.history.push('/settings/PopupTweets');
    }

    render() {
        return (
            <div>
                <div id="page">
                    <main className="dashboard-wrap">
                        <Sidebar />
                        <SettingContent />
                    </main>
                </div>
            </div>
        )
    }
}

export default withRouter(Setting);