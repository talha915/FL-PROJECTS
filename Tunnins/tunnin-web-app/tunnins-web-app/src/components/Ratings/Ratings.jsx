import React, { useState, useEffect } from 'react';
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
import '../../styles/ratings.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import dp from '../../images/dp.png';

function Ratings(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchRatings();
    }, []);


    const dispatchRatings = () => {
        dispatch(ratingReview(ratingReviews));
    }

    const getRatings = useSelector(state => state.ratingReview);

    const getRating=()=> {
        if(getRatings.hasOwnProperty('data')) {
            return (
                <Row>
                    <Col>
                        <h6>
                            {getRatings.data.heading}
                        </h6>
                    </Col>
                    <Col>
                        <p>
                            {getRatings.data.rightheaing}
                        </p>
                    </Col>
                </Row>
            )
        }
    }

    const getUpperCard=()=> {
        if(getRatings.hasOwnProperty('data')) {
            let upperCards = getRatings.data.upperCard.map((data, index)=> {
                return(
                    <div className="session-cards" key={index}>
                        <Card body className="card-style">
                            <div className="card-content">
                                <div>
                                    <CardTitle tag="h5">{data.date}</CardTitle>
                                    <CardText>{data.time}</CardText>
                                    <CardText>{data.earned}</CardText>
                                </div>
                                <div>
                                    <CardText>{data.content}</CardText>
                                </div>
                            </div>
                        </Card>
                    </div>
                )
            });
            return upperCards;
        }
    }

    const getList=()=> {
        if(getRatings.hasOwnProperty('data')) {
            let ratingList = getRatings.data.ratingList.map((data, index)=> {
                return(
                    <Col sm="4" key={index}>
                        <div  className="session-cards">
                            <Card body className="card-style">
                                <div className="card-content">
                                    <div>
                                        <CardTitle tag="h5">{data.name}</CardTitle>
                                        <CardText>{data.date}</CardText>
                                        <CardText>{data.rating}</CardText>
                                    </div>
                                    <div>
                                        <CardText>{data.content}</CardText>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                )
            });
            return ratingList;
        }
    }

    return (
        <div className="ratings">
           <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col sm="9" className="custom-offset">
                        {getRating()}
                        {getUpperCard()}
                        <Row>
                            {getList()}
                        </Row>                    
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default Ratings;