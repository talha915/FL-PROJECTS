import React, { useState } from 'react';
import {
    Button, Row, Col
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Router
import { withRouter } from 'react-router-dom';

// Styles
import '../../styles/notifications.scss';

// Components
import WebcamComponent from './WebCam';
import Header from '../Header/Header';
import App from '../Agora/App';

// image
import start_session_img from '../../images/start-session-img.png';

function AudioVideo(props) { 

    const [status, setStatus] = useState(false);

    const startSession=()=> {
        setStatus(!status);
    }

    let sessionId = props.location.sessionRes._id;

    return (
        <div className="notifications">
            <Header />
            <div className="container-fluid">
                <Row>
                    <Col sm="12" className={status ? "session-user-right-container audio-video-container session-started" : "session-user-right-container audio-video-container"}>
                        <p className="title">
                            <i className="icon-chevron-left" onClick={()=>props.history.goBack()}></i>
                            Test Audio & Video
                        </p>
                        {status ? 
                        <App sessionId={sessionId}/>
                         : <WebcamComponent />}
                        <div className="start-session-btn-wrapper">
                            {status ? 
                                <Button className="start-session-btn" onClick={()=>startSession()}>
                                    End Session
                                </Button>
                                :
                                <Button className="start-session-btn" onClick={()=>startSession()}>
                                    Start Session
                                </Button>
                            }
                        </div>                     
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(AudioVideo);