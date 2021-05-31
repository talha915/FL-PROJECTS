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

import moment from 'moment';

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
                let fromDate = moment(data.fromDate, "x").format("DD MMMM, YYYY");
                let todayDate = moment().format("DD MMMM, YYYY");
                let fromTime = moment(data.fromTime,'HHmmss').format("hh:mm A");
                let toTime = moment(data.toTime,'HHmmss').format("hh:mm A");
                let statusLive = false;
                // let date = new Date(JSON.parse(data.fromDate));
                // let fromDate = (date.getMonth()+1)+"/"+(date.getDate())+"/"+(date.getFullYear());
                // let fromTime = new Date(fromDate+" "+data.fromTime).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
                // let toTime = new Date(fromDate+" "+data.toTime).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
                // let today = new Date();
                // let todayDate = (today.getMonth()+1)+"/"+(today.getDate())+"/"+(today.getFullYear());
                if(fromDate == todayDate) {
                    let currentTime = moment().format('x');
                    let currentHour = moment().format('hh');
                    let fromHour = moment(data.fromTime,'HH').format("hh");
                    let fromTime = moment(data.fromTime, 'HH:mm').format('x');
                    let diff = fromHour - currentHour;
                    console.log("Diff: ", diff);
                    let timeDiff = currentTime - fromTime;
                    console.log("Time Diff: ", timeDiff);
                    if(timeDiff > 0 && timeDiff <= 3600000) {
                        statusLive = true;
                    }
                    // if(diff == 1 && currentTime == toTime) {
                    //     setStatusLive(true);
                    // }


                    // let cTime = new Date();
                    // let currentTime = Date.parse(cTime.getHours())+Date.parse(cTime.getMinutes());
                    // console.log("Current Time: ", currentTime);
                    // let fromHour = JSON.parse(data.fromDate.split(":"));
                    // console.log("From Time: ", fromHour);
                    // let diff = currentTime - fromHour;
                    // if(diff <= 3600000 && diff>=0) {
                    //     setStatusLive(true);
                    // }
                }
                return (
                    <div key={index} className="session-cards">
                        <Card body className="card-style">
                            <div className="card-content">
                                <div>
                                    <CardTitle tag="h5">{data.title}</CardTitle>                              
                                    <CardText>{fromDate}</CardText>
                                    <CardText>{fromTime} - {toTime}</CardText>
                                </div>
                                {userType && userType === "user" ?
                                    <div>
                                        {data.status !== "Booked" ? <CardText>{data.status}</CardText> : ''}
                                        {/* <Button onClick={() => { cardRouteUser(data, index) }}>View Details</Button> */}
                                    </div>
                                    :
                                    <div>
                                        <CardText className="session-amount">${data.price}</CardText>
                                        <CardText>{data.detail}</CardText>
                                    </div>
                                }
                            </div>
                            {((userType && userType === trainer_user_type) && (statusLive && statusLive)) ?
                                <Button onClick={() => { cardRouteAgora(data) }}>Go Live</Button> 
                                // ((userType && userType === trainer_user_type) && (!statusLive&&statusLive)) ?
                                :
                                (userType && userType === trainer_user_type) && (statusLive && statusLive) ?
                                <Button onClick={() => { cardRouteAgora(data) }}>Go Live</Button>
                                :
                                <Button onClick={() => { cardRouteUserDetails(data, index) }}>View Details</Button>
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

    const cardRouteUserDetails=(data, index)=> {
        data.routeTo = "/session-details";
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