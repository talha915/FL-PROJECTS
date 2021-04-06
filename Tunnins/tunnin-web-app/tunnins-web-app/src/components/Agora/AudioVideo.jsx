import React, { useEffect, useState } from 'react';
import {
    Button, Row, Col, Card, CardText, CardTitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Router
import { withRouter } from 'react-router-dom';

// Styles
import '../../styles/notifications.scss';

// Components
import Header from '../Header/Header';

import App from '../Agora/App';

function AudioVideo(props) { 

    const [status, setStatus] = useState(false);

    const startSession=()=> {
        setStatus(true);
    }

    let sessionId = props.location.sessionRes._id;

    return (
        <div className="notifications">
            <Header />
            <div className="container-fluid">
                <Row>
                    <Col sm="12" className={status ? "session-user-right-container audio-video-container session-started" : "session-user-right-container audio-video-container"}>
                        <p className="title">
                            <i className="icon-chevron-left"></i>
                            Test Audio & Video
                        </p>
                        <App sessionId={sessionId}/>
                        <div className="start-session-btn-wrapper">
                            {status ? 
                                <Button className="start-session-btn">
                                    Close Session
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