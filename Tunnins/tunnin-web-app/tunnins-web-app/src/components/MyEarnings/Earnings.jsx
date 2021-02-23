import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { ListNotification } from '../../actions/notification';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { listed_notification } from '../../constants/constants';

// Styles
import '../../styles/earnings.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Earnings() {
    return(
        <div className="earning">
            <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col sm="9" className="custom-offset">
                        <div className="session-btn-wrapper">
                            
                        </div>
                        <div className="session-cards-wrapper">
                            
                        </div>      
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Earnings;