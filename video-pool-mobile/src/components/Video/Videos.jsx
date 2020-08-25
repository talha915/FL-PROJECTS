import React, { Component } from 'react';

import '../../styles/main.css';


class Video extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="dashboard-wrap">
                        <div className="container-fluid">
                            <div className="main-tabs-wrap">
                                <div className="main-tabs-content tab-content">
                                    <div className="tab-pane fade show active" id="video">
                                        <div className="d-flex flex-wrap w-100">
                                            <div className="inner-tab-container order-2">
                                                <div className="inner-tabs-wrap">
                                                    <ul className="nav inner-tabs nav-pills" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" data-toggle="pill" href="#video1" role="tab" aria-selected="true">
                                                                <span className="align">
                                                                    <i className="icon icon-video"></i>
                                                                    <span className="text d-block">video</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="inner-tabs-content tab-content">
                                                        <div className="tab-pane fade show active" id="video1">
                                                            <div className="inner-tabs-holder w-100">
                                                                <div className="scroll-area sm-scroll">
                                                                    <div className="video-block-wrap">
                                                                        <ul className="video-bloks-list list-unstyled">
                                                                            <li>
                                                                                <div className="video-block">
                                                                                    <div className="img">
                                                                                        <img src="images/img2.jpg" className="img-fluid" alt="image description" />
                                                                                        <a href="#" className="btn-play"><i className="icon-play"></i></a>
                                                                                        <span className="video-time">00:30</span>
                                                                                    </div>
                                                                                    <div className="video-descrip">
                                                                                        <strong className="video-title d-block"><a href="#">Video_1245.mp4</a></strong>
                                                                                        <span className="video-size d-block">3.2 MB</span>
                                                                                    </div>
                                                                                    <a href="#conformationModal" data-toggle="modal" className="btn-delete"><i className="icon-delete"></i></a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="btn-wrap">
                                                                    <a href="#" className="btn rounded-btn btn-warning btn-sm"><i className="icon-recording"></i> Record</a>
                                                                    <a href="#" className="btn rounded-btn btn-warning btn-sm"><i className="icon-upload"></i> Upload</a>
                                                                    <a href="#" className="btn rounded-btn btn-warning btn-sm"><i className="icon-url"></i> URL</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="video-box order-1 text-center">
                                                <a href="#video-Modal" data-toggle="modal" className="btn-play"><img src="images/play.png" width="76" height="76" alt="play button" /></a>
                                                <img src="images/frame-video-mobile.png" className="img-fluid" width="394" height="218" alt="image description" />
                                            </div>
                                        </div>
                                        <div className="personal-poll d-none">
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
                        </div>
                    </div>
                </main>
                <div className="next-prev-btns-wrap">
                    <div className="next-prev-btns">
                        <a href="#" className="btn"><i className="icon-prev"></i></a>
                        <a href="#" className="btn"><i className="icon-next"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;