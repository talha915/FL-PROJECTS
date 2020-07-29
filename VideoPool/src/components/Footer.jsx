import React from 'react';

/* Styles */
import '../styles/main.css';

function Footer() {
    return (
        <div className="dashboard-footer">
            <div className="next-prev-btns-wrap">
                <div className="next-prev-btns">
                    <a href="#" className="btn"><i className="icon-prev"></i></a>
                    <a href="#" className="btn"><i className="icon-next"></i></a>
                </div>
            </div>
            <div className="media-panel d-none d-lg-block">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <div className="audio-wrap flex-grow-1">
                            <audio controls>
                                <source src="horse.ogg" type="audio/ogg" />
                                <source src="horse.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
								</audio>
                        </div>
                        <div className="btn-wrap flex-shrink-0 ml-20">
                            <a href="#" className="btn btn-primary"><i className="icon-trim"></i> Trim</a>
                            <a href="#" className="btn btn-primary"><i className="icon-preview"></i> Preview</a>
                            <a href="#" className="btn btn-primary"><i className="icon-share"></i> Share</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;