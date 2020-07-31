import React, { Component } from 'react';

class Generals extends Component {
    render() {
        return (
            <div class="tab-pane fade show active" id="g-setting">
                <div class="d-flex flex-wrap flex-lg-nowrap w-100">
                    <div class="inner-tab-container order-2 order-lg-1">
                        <div class="inner-tabs-wrap">
                            <ul class="nav inner-tabs nav-pills" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="pill" href="#setting" role="tab" aria-selected="true">
                                        <span class="align">
                                            <i class="icon icon-interface d-lg-none"></i>
                                            <span class="text d-block">Settings</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#export" role="tab" aria-selected="false">
                                        <span class="align">
                                            <i class="icon icon-export d-lg-none"></i>
                                            <span class="text d-block">Export</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div class="inner-tabs-content tab-content">
                                <div class="tab-pane fade show active" id="setting">
                                    <div class="inner-tabs-holder w-100">
                                        <div class="scroll-area">
                                            <form class="settings-form">
                                                <div class="form-group">
                                                    <label for="pass">Password</label>
                                                    <div class="inpupt-wrap">
                                                        <input class="form-control" type="password" id="pass" placeholder="Enter your password" />
                                                        <i class="icon icon-preview"></i>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="date">Start Date</label>
                                                    <div class="inpupt-wrap">
                                                        <input class="form-control" type="text" id="date" placeholder="DD/MM/YYYY" />
                                                        <i class="icon icon-calendar"></i>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <span class="label">Do you want the recipient to see the poll result?</span>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                        <label class="custom-control-label" for="customCheck1">No</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                        <label class="custom-control-label" for="customCheck2">Yes, show result during voting?</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                                        <label class="custom-control-label" for="customCheck3">Yes, show result after voting?</label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="export">
                                    <div class="inner-tabs-holder w-100">
                                        <div class="scroll-area sm-scroll">
                                            <div class="exports-btns-wrap">
                                                <div class="hold">
                                                    <a href="#" class="btn btn-warning btn-sm rounded-btn"><i class="icon-share"></i> Share result</a>
                                                    <a href="#" class="btn btn-warning btn-sm rounded-btn"><i class="icon-upload"></i> Export result</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="video-box d-none d-lg-block order-1 order-lg-2 text-center">
                        <a href="#" class="btn-paly"><img src="/images/play.png" width="76" height="76" alt="play button" /></a>
                        <div class="d-none d-lg-block">
                            <img src="/images/frame-video-desktop.png" class="img-fluid" width="364" height="718" alt="image description" />
                        </div>
                        <div class="d-lg-none">
                            <img src="/images/frame-video-mobile.png" class="img-fluid" width="394" height="218" alt="image description" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Generals;