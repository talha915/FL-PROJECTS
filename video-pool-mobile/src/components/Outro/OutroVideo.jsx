import React, { Component } from 'react';

class OutroVideo extends Component {
    render() {
        return (
            <div className="tab-pane fade show active" id="video3">
                <div className="inner-tabs-holder w-100">
                    <div className="scroll-area sm-scroll">
                        <div className="video-block-wrap">
                            <ul className="video-bloks-list list-unstyled">
                                <li>
                                    <div className="video-block">
                                        <div className="img">
                                            <img src="/images/img2.jpg" className="img-fluid" alt="image description" />
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
                        <a href="#" className="btn btn-sm rounded-btn btn-warning"><i className="icon-recording"></i> Record</a>
                        <a href="#" className="btn btn-sm rounded-btn btn-warning"><i className="icon-upload"></i> Upload</a>
                        <a href="#" className="btn btn-sm rounded-btn btn-warning"><i className="icon-url"></i> URL</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default OutroVideo;