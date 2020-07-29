import React from 'react';

function Video() {
    return (
        <div class="tab-pane fade show active" id="video">
            <div class="d-flex flex-wrap flex-lg-nowrap w-100">
                <div class="inner-tab-container order-2 order-lg-1">
                    <div class="inner-tabs-wrap">
                        <ul class="nav inner-tabs nav-pills" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="pill" href="#video1" role="tab" aria-selected="true">
                                    <span class="align">
                                        <i class="icon icon-video d-lg-none"></i>
                                        <span class="text d-block">video</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div class="inner-tabs-content tab-content">
                            <div class="tab-pane fade show active" id="video1">
                                <div class="inner-tabs-holder w-100">
                                    <div class="scroll-area sm-scroll">
                                        <div class="video-block-wrap">
                                            <ul class="video-bloks-list list-unstyled">
                                                <li>
                                                    <div class="video-block">
                                                        <div class="img">
                                                            <img src="images/img2.jpg" class="img-fluid" alt="image description" />
                                                            <a href="#" class="btn-play"><i class="icon-play"></i></a>
                                                            <span class="video-time">00:30</span>
                                                        </div>
                                                        <div class="video-descrip">
                                                            <strong class="video-title d-block"><a href="#">Video_1245.mp4</a></strong>
                                                            <span class="video-size d-block">3.2 MB</span>
                                                        </div>
                                                        <a href="#conformationModal" data-toggle="modal" class="btn-delete"><i class="icon-delete"></i></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="btn-wrap">
                                        <a href="#" class="btn rounded-btn btn-warning btn-sm"><i class="icon-recording"></i> Record</a>
                                        <a href="#" class="btn rounded-btn btn-warning btn-sm"><i class="icon-upload"></i> Upload</a>
                                        <a href="#" class="btn rounded-btn btn-warning btn-sm"><i class="icon-url"></i> URL</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="video-box order-1 order-lg-2 text-center">
                    <a href="#" class="btn-paly"><img src="images/play.png" width="76" height="76" alt="play button" /></a>
                    <div class="d-none d-lg-block">
                        <img src="images/frame-video-desktop.png" class="img-fluid" width="364" height="718" alt="image description" />
                    </div>
                    <div class="d-lg-none">
                        <img src="images/frame-video-mobile.png" class="img-fluid" width="394" height="218" alt="image description" />
                    </div>
                </div>
            </div>
            <div class="personal-poll d-none">
                <div class="icon-logo">
                    <a href="#"><img src="images/logo-v.png" width="80" height="70" alt="image description" /></a>
                </div>
                <div class="large-text">
                    <p>Hi, add a video clip to start creating your personal poll</p>
                </div>
                <div class="btn-wrap">
                    <a href="#" class="btn btn-primary btn-sm"><i class="icon-recording"></i> Record</a>
                    <a href="#" class="btn btn-primary btn-sm"><i class="icon-upload"></i> Upload</a>
                    <a href="#" class="btn btn-primary btn-sm"><i class="icon-url"></i> URL</a>
                </div>
            </div>
        </div>
    )
}
export default Video;