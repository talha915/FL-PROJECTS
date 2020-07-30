import React, { Component } from 'react';

/* Data */

/* Router */
import { withRouter } from 'react-router-dom';


class Outros extends Component {

    constructor(props) {
        super(props);
        this.state = {
            outrosList: ''
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="tab-pane fade show active" id="outro">
                <div className="d-flex flex-wrap flex-lg-nowrap w-100">
                    <div className="inner-tab-container order-2 order-lg-1">
                        <div className="inner-tabs-wrap">
                            <ul className="nav inner-tabs nav-pills" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#video3" role="tab" aria-selected="true">
                                        <span className="align">
                                            <i className="icon icon-video d-lg-none"></i>
                                            <span className="text d-block">video</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#gif" role="tab" aria-selected="false">
                                        <span className="align">
                                            <i className="icon icon-gif d-lg-none"></i>
                                            <span className="text d-block">GIF</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#text" role="tab" aria-selected="false">
                                        <span className="align">
                                            <i className="icon icon-open-text d-lg-none"></i>
                                            <span className="text d-block">Text</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="inner-tabs-content tab-content">
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
                                <div className="tab-pane fade" id="gif">
                                    <div className="inner-tabs-holder w-100">
                                        <div className="scroll-area sm-scroll">
                                            <form className="search-form">
                                                <div className="search-wrap">
                                                    <input type="search" className="form-control" placeholder="Search for GIFs" />
                                                    <button type="submit" className="btn-search btn"><i className="icon-search"></i></button>
                                                </div>
                                            </form>
                                            <div className="gif-block-wrap">
                                                <ul className="gif-bloks-list list-unstyled">
                                                    <li><a href="#"><img src="/images/gif01.png" width="200" height="161" alt="image description" /></a></li>
                                                    <li><a href="#"><img src="/images/gif03.png" width="200" height="161" alt="image description" /></a></li>
                                                    <li><a href="#"><img src="/images/gif01.png" width="200" height="161" alt="image description" /></a></li>
                                                    <li><a href="#"><img src="/images/gif03.png" width="200" height="161" alt="image description" /></a></li>
                                                    <li><a href="#"><img src="/images/gif01.png" width="200" height="161" alt="image description" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="text">
                                    <div className="inner-tabs-holder w-100">
                                        <div className="scroll-area sm-scroll">
                                            <form>
                                                <div className="form-group mb-60">
                                                    <textarea className="form-control" placeholder="Type here ......"></textarea>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-submit btn-warning btn-sm rounded-btn">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video-box order-1 order-lg-2 text-center">
                        <a href="#" className="btn-paly"><img src="/images/play.png" width="76" height="76" alt="play button" /></a>
                        <div className="d-none d-lg-block">
                            <img src="/images/frame-video-desktop.png" className="img-fluid" width="364" height="718" alt="image description" />
                        </div>
                        <div className="d-lg-none">
                            <img src="/images/frame-video-mobile.png" className="img-fluid" width="394" height="218" alt="image description" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Outros);