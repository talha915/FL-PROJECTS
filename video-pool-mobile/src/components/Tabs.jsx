import React, { Component } from 'react';
import '../../src/styles/main.css';

class Tabs extends Component {
    render() {
        return (
            <main>
                <div className="dashboard-wrap">
                    <div className="container-fluid">
                        <div className="main-tabs-wrap">
                            <aside className="aside">
                                <ul className="nav nav-pills main-nav-pills" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#video" role="tab" aria-selected="false">
                                            <span className="align">
                                                <i className="icon icon-video"></i>
                                                <span className="text d-block">Video</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#question" role="tab" aria-selected="false">
                                            <span className="align">
                                                <i className="icon icon-communications"></i>
                                                <span className="text d-block">Question</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#outro" role="tab" aria-selected="false">
                                            <span className="align">
                                                <i className="icon icon-chat"></i>
                                                <span className="text d-block">Outro</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#branding" role="tab" aria-selected="false">
                                            <span className="align">
                                                <i className="icon icon-branding"></i>
                                                <span className="text d-block">Branding</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#g-setting" role="tab" aria-selected="false">
                                            <span className="align">
                                                <i className="icon icon-interface"></i>
                                                <span className="text d-block"><span className="d-none d-sm-inline">General</span> Setting</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#results" role="tab" aria-selected="false">
                                            <span className="align">
                                                <i className="icon icon-results"></i>
                                                <span className="text d-block">Results</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                            <div className="personal-poll">
                                <div className="icon-logo">
                                    <a href="#"><img src="images/logo-v.png" width="80" height="70" alt="image description" /></a>
                                </div>
                                <div className="large-text">
                                    <p>Hi, add a video clip to start creating your personal poll</p>
                                </div>
                                <div className="btn-wrap">
                                    <a href="#" className="btn btn-primary btn-sm"><i className="icon-recording"></i> Record</a>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="icon-upload"></i> Upload</a>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="icon-url"></i> URL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Tabs;