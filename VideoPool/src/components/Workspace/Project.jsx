import React, { Component } from 'react';

// Components
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

class Project extends Component {
    render() {
        return (
            <body className="bg-white">
                <div className="workspace-page">
                    <Sidebar />
                    <div className="right-content">
                        <Header />
                        <main>
                            <div className="content-wrap">
                                <div className="project-holder">
                                    <div className="column">
                                        <div className="img-box">
                                            <a href="#">
                                                <img src="/images/img3.jpg" width="325" height="325" alt="img description" />
                                            </a>
                                        </div>
                                        <div className="text-box">
                                            <a className="more" href="#"></a>
                                            <strong className="title">Project Name</strong>
                                            <time className="date" datetime="2008-02-14">4/4/2020</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </body>
        )
    }
}

export default Project;