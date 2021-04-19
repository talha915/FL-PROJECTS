import React, { useEffect, useState } from 'react';
import {
    Button, Row, Col, Card, CardText, CardTitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { ListNotification } from '../../actions/notification';
import { getFetchParam } from '../../actions/getFetchParam';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { 
    listed_notification, 
    trainer_user_type, 
    upcoming_session, 
    upcoming_client_sessions, 
    client_user_type, 
    upcoming, 
    past, 
    past_sessions, 
    past_client_sessions,
    routeAgora } 
    from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import App from '../Agora/App';

function Notification(props) {

    const [userType, setUserType] = useState('');
    const [callAgora, setAgora] = useState(false);
    const [sessionType, setSessionType] = useState();

    const dispatch = useDispatch();
    const getNotification = useSelector(state => state.notification);

    const userInfo = useSelector(state => state.postFetch);

    const sessions = useSelector(state => state.getApi);

    const dispatchCheckUser = () => {
        if (userInfo.hasOwnProperty('userLogged')) {
            console.log("User: ", userInfo.userLogged.userType);
            if(userInfo.userLogged.userType === client_user_type) {
                setUserType(userInfo.userLogged.userType);
                dispatch(ListNotification(listed_notification, userInfo.userLogged.userType));
                // UpComing Sessions By Default
                let userId = userInfo.userLogged._id;
                setSessionType(upcoming);
                dispatch(getFetchParam(upcoming_client_sessions, userId));
            }
            else {
                setUserType(userInfo.userLogged.userType);
                dispatch(ListNotification(listed_notification, userInfo.userLogged.userType));
                // UpComing Sessions By Default
                let userId = userInfo.userLogged._id;
                setSessionType(upcoming);
                dispatch(getFetchParam(upcoming_session, userId));
            }
        }
    }


    useEffect(() => {
        dispatchCheckUser();
        dispatchNotification();
        dipatchGetCards();
    }, []);

    const dipatchGetCards = () => {
        if (sessions.hasOwnProperty('upcomingSession')) {

        }
    }

    const dispatchNotification = () => {
        dispatch(ListNotification(listed_notification, userType));
    }

    const getCards = () => {
        let lists;
        if (sessionType === past) {
            if (sessions.hasOwnProperty('pastSession')) {
                lists = sessions.pastSession;
            }
        }
        else {
            if (sessions.hasOwnProperty('upcomingSession')) {
                lists = sessions.upcomingSession;
            }
        }
        if (lists instanceof Array) {
            let cards = lists.map((data, index) => {
                return (
                    <div key={index} className="session-cards">
                        <Card body className="card-style">
                            <div className="card-content">
                                <div>
                                    <CardTitle tag="h5">{data.title}</CardTitle>
                                    <CardText>{data.fromDate}</CardText>
                                    <CardText>{data.fromTime} - {data.toTime}</CardText>
                                </div>
                                {userType && userType === "user" ?
                                    <div>
                                        {data.status !== "Booked" ? <CardText>{data.status}</CardText> : ''}
                                        <Button onClick={() => { cardRouteUser(data, index) }}>View Details</Button>
                                    </div>
                                    :
                                    <div>
                                        <CardText className="session-amount">${data.price}</CardText>
                                        <CardText>{data.detail}</CardText>
                                    </div>
                                }
                            </div>
                            {userType && userType === trainer_user_type ?
                                <Button onClick={() => { cardRouteAgora(data) }}>Go Live</Button> :
                                ''
                            }
                        </Card>
                    </div>
                )
            })
            return cards;
        }
    }

    const cardRouteAgora = (data) => {
        props.history.push({
            pathname: routeAgora,
            sessionRes: data
        });
    }

    const cardRoute = (data, index) => {
        if (data.golive === data.past) {
            props.history.push(data.routeTo);
        }
        else {
            //setAgora(true);
            props.history.push(data.routeToTest);
        }
    }

    const cardRouteUser = (data, index) => {
        props.history.push({
            pathname: data.routeTo,
            state: data
        })
    }

    const getBtns = () => {
        if (getNotification.hasOwnProperty('data')) {
            let btnList = getNotification.data.btns;
            if (userType !== trainer_user_type) {
                btnList = JSON.parse(JSON.stringify(getNotification.data.btns));
                for (let i = 0; i < btnList.length; i++) {
                    btnList[i].flag = btnList[i].sessionType;
                }
            }
            let btns = btnList.map((data, index) => {
                return (
                    <div key={index} className="session-btns">
                        {data.flag ?
                            <Button color="outline-secondary" className={data.sessionType ? "true-btn" : "false-btn"} onClick={() => routeTo(data, index)}>
                                {data.title}
                            </Button> : ''}
                    </div>
                )
            });
            return btns;
        }
    }

    const routeTo = (data, index) => {
        if (data.sessionType) {
            let userId = userInfo.userLogged._id;
            console.log("Data: ", data);
            if (data.route === past) {
                // Past Sessions On Click
                if(userType === client_user_type) {
                    setSessionType(past);
                    dispatch(getFetchParam(past_client_sessions, userId));
                }
                else {
                    setSessionType(past);
                    dispatch(getFetchParam(past_sessions, userId));
                }
            }
            else {
                // UpComing Sessions On Click
                if(userType === client_user_type) {
                    setSessionType(upcoming);
                    dispatch(getFetchParam(upcoming_client_sessions, userId));
                }
                else {
                    setSessionType(upcoming);
                    dispatch(getFetchParam(upcoming_session, userId));
                }
            }
            dispatch(ListNotification(data.route, userType));
        }
        else {
            props.history.push(data.route);
        }
    }

    return (
        <div className="notifications">
            <Header />
            <div className="container-fluid">
                <Row>
                    {userType === "user" ?
                        '' :
                        <Col className="left-container">
                            <Sidebar />
                        </Col>
                    }
                    <Col sm="9" className="custom-offset">
                        <div className="session-btn-wrapper">
                            {getBtns()}
                        </div>
                        <div className="session-cards-wrapper">
                            {getCards()}
                        </div>
                        {callAgora ? <App /> : ''}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(Notification);