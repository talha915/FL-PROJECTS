import React from 'react';

/* Styles */
import '../styles/main.css';

function Footer() {
    return (
        <div class="dashboard-footer">
            <div class="next-prev-btns-wrap">
                <div class="next-prev-btns">
                    <a href="#" class="btn"><i class="icon-prev"></i></a>
                    <a href="#" class="btn"><i class="icon-next"></i></a>
                </div>
            </div>
            <div class="media-panel d-none d-lg-block">
                <div class="container-fluid">
                    <div class="d-flex align-items-center">
                        <div class="audio-wrap flex-grow-1">
                            <audio controls>
                                <source src="horse.ogg" type="audio/ogg" />
                                <source src="horse.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
								</audio>
                        </div>
                        <div class="btn-wrap flex-shrink-0 ml-20">
                            <a href="#" class="btn btn-primary"><i class="icon-trim"></i> Trim</a>
                            <a href="#" class="btn btn-primary"><i class="icon-preview"></i> Preview</a>
                            <a href="#" class="btn btn-primary"><i class="icon-share"></i> Share</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;