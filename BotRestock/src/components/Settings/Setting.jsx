import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import SettingContent from '../Settings/SettingContent';

import '../../styles/main.css';

class Setting extends Component {
    render() {
        return(
            <div>
                <div id="page">
                    <Sidebar />
                    <SettingContent />
                </div>
                
            </div>
        )
    }
} 

export default Setting;