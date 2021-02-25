import React, { useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { ratingReview } from '../../actions/ratingReview';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { ratingReviews } from '../../constants/constants';

// Styles
import '../../styles/profile.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function UserProfile() {


    return(
        <div className="profiles">
           <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col sm="9" className="custom-offset">
                            
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default UserProfile;