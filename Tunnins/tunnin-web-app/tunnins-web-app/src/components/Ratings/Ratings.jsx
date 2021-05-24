import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { ratingReview } from '../../actions/ratingReview';
import { getFetchParam } from '../../actions/getFetchParam';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { ratingReviews, get_reviews } from '../../constants/constants';

// Styles
import '../../styles/ratings.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import dp from '../../images/dp.png';

function Ratings(props) {

    const trainerId = useSelector(state => state.postFetch);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchRatings();
    }, []);


    const dispatchRatings = () => {
        dispatch(ratingReview(ratingReviews));
        if(trainerId.hasOwnProperty('userLogged')) {
            let trainId = trainerId.userLogged._id;
            console.log("Trainer Id: ", trainId);
            dispatch(getFetchParam(get_reviews, trainId));
        }
    }

    const getRatings = useSelector(state => state.ratingReview);
    const getRatingReviews = useSelector(state => state.getApi);

    const getRating=()=> {
        if(getRatings.hasOwnProperty('data')) {
            return (
                <Row>
                    <Col>
                        <h6 className="ratings-heading">
                            {getRatings.data.heading}
                        </h6>
                    </Col>
                    <Col>
                        <p className="number-of-ratings">
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
                    <div className="ratings-main-card" key={index}>
                        <i className="icon-chevron-left" onClick={()=>props.history.goBack()}></i>
                        <Card body className="card-style">
                            <div className="card-content">
                                <div>
                                    <CardTitle tag="h5">{data.date}</CardTitle>
                                    <CardText className="duration">{data.time}</CardText>
                                </div>
                                <div>
                                    <CardText className="earned">{data.earned}</CardText>
                                    <CardText className="viewers">{data.content}</CardText>
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
        if(getRatingReviews.hasOwnProperty('getReviews')) {
            let cards = getRatingReviews.getReviews.UserData.map((data, index)=> {
                return(
                    <Col sm="4" key={index}>
                        <div  className="ratings-cards">
                            <Card body className="card-style">
                                <div className="card-content">
                                    <div className="d-flex justify-content-between align=items-center">
                                        <CardTitle className="d-flex align=items-center" tag="h5">
                                            <img src={data.userProfilePic}  />
                                            <span className="name-date-wrapper"> 
                                                <span className="name">{data.userfullName}</span>
                                                <span className="date">{data.dateTime}</span>
                                            </span>
                                        </CardTitle>                                   
                                        <CardText className="rating">
                                            {data.userRating}
                                            <i className="icon-Star"></i>
                                        </CardText>
                                    </div>
                                    <div>
                                        <CardText className="rating-content">{data.userReview}</CardText>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                )
            });
            return cards;
        }
       
    }

    const getpagePoint=()=> {
        return(
            <div className="rating-detail-page-points">
                <div className="rating-points-container">
                    <div className="rating-points">
                        <div>
                            <div className="d-flex align-items-center">
                                <span className="rating" >4.7</span>
                                <i className="icon-Star"></i>
                            </div>
                            <p className="out-of-five">Out of 5</p>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="rating-count">500 Ratings & Reviews</span>
                </div>
            </div>
        )
    }

    const getSessionRating=()=> {
        return(
            <div className="rating-points-container">
                <div className="rating-points">
                    <div>
                        <div className="d-flex align-items-center">
                            <span className="rating" >4.7</span>
                            <i className="icon-Star"></i>
                        </div>
                        <p className="out-of-five">Out of 5</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="ratings">
           <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col className="mt-3">
                        <div className="ratings-right-container">
                            <div className="d-flex align-items-center rating-header-block">
                                {/* display this section for session details*/}
                                
                                {props.history.location.pathname != "/session-ratings" ?
                                    getpagePoint()
                                    :
                                    getUpperCard()    
                                }
                                
                                {/* display this secton for session details*/}


                               {/* display this section for session ratings*/}

                                {props.history.location.pathname == "/session-ratings" ?
                                    getSessionRating()
                                    :
                                    ''
                                }
                                
                                {/* display this secton for session ratings*/}
                            </div>
                            <div className="mt-4 mb-4">
                                {getRating()}
                            </div>
                            <Row>
                                {getList()}
                            </Row>        
                        </div>            
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default withRouter(Ratings);