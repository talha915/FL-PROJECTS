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
import '../../styles/notifications.scss';

// Components
import Sidebar from '../Sidebar/Sidebar';

import dp from '../../images/dp.png';

function Notification(props) {

    const dispatch = useDispatch();
    const getNotification = useSelector(state => state.notification);

    useEffect(() => {
        dispatchNotification();
    }, []);

    const dispatchNotification=()=> {
        dispatch(ListNotification(listed_notification));
    }

    const getSidebar=()=> {
        if(getNotification.hasOwnProperty('data')) {
            let lists = getNotification.data.sideList;
            let sidebar = lists.map((data, index)=> {
                return(
                    <li key={index} className="list">
                        {data.name}
                    </li>
                )
            })
            return sidebar;
        }       
    }

    const getCards=()=> {
        if(getNotification.hasOwnProperty('data')) {
            let lists = getNotification.data.cards;
            let cards = lists.map((data, index)=> {
                return(
                    <div key={index} className="session-cards">
                        <Card body className="card-style">
                            <div className="card-content">
                                <div>
                                    <CardTitle tag="h5">{data.heading}</CardTitle>
                                    <CardText>{data.date}</CardText>
                                    <CardText>{data.time}</CardText>
                                </div>
                                <div>
                                    <CardText className="session-amount">$21</CardText>
                                    <CardText>10 users booked</CardText>
                                </div>
                            </div>
                            <Button>{data.golive}</Button>
                        </Card>
                    </div>
                )
            })
            return cards;
        }
    }

    const getBtns =()=> {
        if(getNotification.hasOwnProperty('data')) {
            let btnList = getNotification.data.btns;
            let btns = btnList.map((data, index)=> {
                return(
                    <div key={index} className="session-btns">
                        <Button className={data.sessionType ? "true-btn": "false-btn"} onClick={()=>routeTo(data, index)}>
                            {data.title}
                        </Button>
                    </div>
                )
            });
            return btns;
        }
    }

    const routeTo=(data, index)=> {
        if(index == 1) {
            let location = data.routeTo;
            props.history.push(location);
        }
        else {
            let location = data.route;
            props.history.push(location);
        }
    }

    return(
        <div className="notifications">
            <div className="profile-actions d-flex align-items-center justify-content-end">
                <div className="user-notification-wrapper">
                    <span className="icon-Group-22380">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>

                    </span>
                </div>
                <div className="user-profile">
                    <span className="dp-wrapper">
                    <img src={dp} alt="user-dp" />
                    </span>
                    <span className="credentials">
                        <span className="name">
                            Sanjay Singh
                        </span>
                        <span className="email">
                            sanjay.singh@gmail.com
                        </span>
                    </span>
                </div>
            </div>
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col sm="9" className="custom-offset">
                        <div className="session-btn-wrapper">
                            {getBtns()}
                        </div>
                        <div className="session-cards-wrapper">
                            {getCards()}
                        </div>
                        
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(Notification);