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
                    <Col sm="6" key={index} className="rightbody-padding">
                        <Card body className="card-style">
                            <CardTitle tag="h5">{data.heading}</CardTitle>
                            <CardText>{data.date}</CardText>
                            <CardText>{data.time}</CardText>
                            <Button>{data.golive}</Button>
                        </Card>
                    </Col>
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
                    <Col sm="4" key={index} className="btn-padding">
                        <Button className={data.sessionType ? "true-btn": "false-btn"} onClick={()=>routeTo(data.route)}>
                            {data.title}
                        </Button>
                    </Col>
                )
            });
            return btns;
        }
    }

    const routeTo=(location)=> {
        props.history.push(location);
    }

    return(
        <div className="notifications">
            <Row>
                <Col sm="2" className="left-container">
                    <Sidebar />
                </Col>
                <Col sm="10">
                    <Row>
                        {getBtns()}
                        {getCards()}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(Notification);