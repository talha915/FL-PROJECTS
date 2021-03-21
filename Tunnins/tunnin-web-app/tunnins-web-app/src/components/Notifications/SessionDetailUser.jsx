import React, { useEffect, useState } from 'react';
import {
    Button, Row, Col, Card, CardText, CardTitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { ListNotification } from '../../actions/notification';

// Router
import { withRouter } from 'react-router-dom';

// Styles
import '../../styles/notifications.scss';

// Components
import Header from '../Header/Header';
import Sliders from './Sliders';
import CancelledPolicy from '../Session/CancelPolicy';

function SessionDetailUser(props) {

    let data = props.location.state;
    console.log("Data: ", data);
    
    const getDetails=()=> {
        return(
            <Row>
                <Col>
                    <h6>
                        {data.heading}
                    </h6>
                </Col>
                <Col>
                    <p>
                        {data.need}
                    </p>
                </Col>
                <Col>
                    <p>
                        {data.about}
                    </p>
                </Col>
            </Row>
        )
    }

    const getDetailValue=()=> {
        return(
            <Row>
                <Col>
                    <p>
                        {data.cName}
                    </p>
                </Col>
                <Col>
                    <p>
                        {data.needContent}
                    </p>
                </Col>
                <Col>
                    <p>
                        {data.aboutContent}
                    </p>
                </Col>
            </Row>
        )
    }

    const seeCancelPolicy=()=> {
        props.history.push('/cancellation-policy');
    }

    return (
        <div className="notifications">
            <Header />
            <div className="container-fluid">
                <Row>
                   <Sliders />
                </Row>
                <Row>
                    <Col>
                        <h1>
                            {data.statusDetail}
                        </h1>
                    </Col>
                    <Col>
                        <p>
                            {data.amount}
                        </p>
                    </Col>
                    <Col>
                        <p onClick={()=>seeCancelPolicy()}>
                            {data.cancelPolicy}
                        </p>
                    </Col>
                </Row>
                {getDetails()}
                {getDetailValue()}             
                <div>
                    {data.time}
                </div>
                <div>
                    {data.date}
                </div>
            </div>
        </div>
    )
}

export default withRouter(SessionDetailUser);