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
import { listed_notification, trainer_user_type, upcoming_session, past_session, past_sessions, routeAgora } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import App from '../Agora/App';

function Notification(props) {

    const [userType, setUserType] = useState('');
    const [callAgora, setAgora] = useState(false);

    const dispatch = useDispatch();
    const getNotification = useSelector(state => state.notification);

    const userInfo = useSelector(state => state.postFetch);

    const upcomingSessions = useSelector(state => state.getApi);

    const dispatchCheckUser=()=> {
        if(userInfo.hasOwnProperty('userLogged')) {
            console.log("User Ifo: ", userInfo.userLogged.userType);
            setUserType(userInfo.userLogged.userType);  
            dispatch(ListNotification(listed_notification, userInfo.userLogged.userType)); 
            // UpComing Sessions
            let userId = userInfo.userLogged._id;
            dispatch(getFetchParam(upcoming_session, userId));
        }
        else {
            setUserType(trainer_user_type);
            //dispatch(ListNotification(listed_notification, userInfo.userLogged.userType)); 

        }
    }


    useEffect(() => {
        dispatchCheckUser();
        dispatchNotification();
        dipatchGetCards();
    },[]);

    const dipatchGetCards=()=> {
        if(upcomingSessions.hasOwnProperty('upcomingSession')) {

        }
    }

    const dispatchNotification = () => {
        dispatch(ListNotification(listed_notification, userType));
    }

    // const getCards = () => {
    //     if (getNotification.hasOwnProperty('data')) {
    //         let lists = getNotification.data.cards;
    //         let cards = lists.map((data, index) => {
    //             return (
    //                 <div key={index} className="session-cards">
    //                     <Card body className="card-style">
    //                         <div className="card-content">
    //                             <div>
    //                                 <CardTitle tag="h5">{data.heading}</CardTitle>
    //                                 <CardText>{data.date}</CardText>
    //                                 <CardText>{data.time}</CardText>
    //                             </div>
    //                             {userType && userType === "user" ? 
    //                                 <div>
    //                                     {data.status!=="Booked"?<CardText>{data.status}</CardText>: ''}
    //                                     <Button onClick={()=>{cardRouteUser(data, index)}}>{data.golive}</Button>
    //                                 </div>
    //                             :
    //                                 <div>
    //                                     <CardText className="session-amount">$21</CardText>
    //                                     <CardText>10 users booked</CardText>
    //                                 </div>
    //                             }
    //                         </div>
    //                         {userType && userType === trainer_user_type ? 
    //                             <Button onClick={()=>{cardRoute(data, index)}}>{data.golive}</Button> :
    //                             ''
    //                         }
    //                     </Card>
    //                 </div>
    //             )
    //         })
    //         return cards;
    //     }
    // }


    const getCards = () => {
        if (upcomingSessions.hasOwnProperty('upcomingSession')) {
            let lists = upcomingSessions.upcomingSession;
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
                                        {data.status!=="Booked"?<CardText>{data.status}</CardText>: ''}
                                        <Button onClick={()=>{cardRouteUser(data, index)}}>View Details</Button>
                                    </div>
                                :
                                    <div>
                                        <CardText className="session-amount">${data.price}</CardText>
                                        <CardText>{data.detail}</CardText>
                                    </div>
                                }
                            </div>
                            {userType && userType === trainer_user_type ? 
                                <Button onClick={()=>{cardRouteAgora(data)}}>Go Live</Button> :
                                ''
                            }
                        </Card>
                    </div>
                )
            })
            return cards;
        }
    }

    const cardRouteAgora=(data)=> {
        props.history.push({
            pathname: routeAgora,
            sessionRes: data
        });
    }

    const cardRoute=(data, index)=> {
        if(data.golive === data.past) {
            props.history.push(data.routeTo);
        }
        else {
            //setAgora(true);
            props.history.push(data.routeToTest);
        }
    }

    const cardRouteUser=(data, index)=> {
        props.history.push({
            pathname: data.routeTo,
            state: data
        })
    }

    const getBtns = () => {
        if (getNotification.hasOwnProperty('data')) {
            let btnList = getNotification.data.btns;
            if(userType !== trainer_user_type) {
                btnList = JSON.parse(JSON.stringify(getNotification.data.btns));
                for(let i=0; i<btnList.length; i++) {
                    btnList[i].flag = btnList[i].sessionType;
                }
            }            
            let btns = btnList.map((data, index) => {
                return (
                    <div key={index} className="session-btns">
                        {data.flag ?                   
                        <Button color="outline-secondary" className={data.sessionType ? "true-btn" : "false-btn"} onClick={() => routeTo(data, index)}>
                            {data.title}
                        </Button>: ''}     
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
            if(data.route === past_session) {
                console.log("Calling Past");
                dispatch(getFetchParam(past_sessions, userId));
            }
            else {
                console.log("Calling Upcoming");
                dispatch(getFetchParam(upcoming_session, userId));
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
                        {callAgora ? <App/> : ''}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(Notification);