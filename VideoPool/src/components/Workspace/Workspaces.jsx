import React, { Component } from 'react';

// Components
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Project from './Project';
import Branding from './Branding';
import Setting from './Setting';


class Workspaces extends Component {
    render() {
        return(
            <body className="bg-white">
                <div className="workspace-page">
                    <Sidebar />
                    <div className="right-content">
                        <Header />
                        {
                            window.location.pathname === "/workspace/project" ?
                                <Project />
                                : 
                                window.location.pathname === "/workspace/branding" ?
                                <Branding />
                                :
                                <Setting />
                        }
                    </div>
                </div>
            </body>
        )
    }
}

export default Workspaces;