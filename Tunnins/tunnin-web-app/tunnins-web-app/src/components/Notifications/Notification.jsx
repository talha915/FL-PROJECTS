import React, { useEffect } from 'react';
import {
    Button, Row, Col, Card, CardText, CardTitle
} from 'reactstrap';

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
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Notification(props) {

    const dispatch = useDispatch();
    const getNotification = useSelector(state => state.notification);

    const userInfo = useSelector(state => state.postFetch);

    let userType;

    if(userInfo.hasOwnProperty('userLogged')) {
        userType = userInfo.userLogged.userType;
    }

    useEffect(() => {
        dispatchNotification();
    }, []);

    const dispatchNotification = () => {
        dispatch(ListNotification(listed_notification));
    }

    const getCards = () => {
        if (getNotification.hasOwnProperty('data')) {
            let lists = getNotification.data.cards;
            let cards = lists.map((data, index) => {
                return (
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
                            <Button onClick={()=>{cardRoute(data, index)}}>{data.golive}</Button>
                        </Card>
                    </div>
                )
            })
            return cards;
        }
    }

    const cardRoute=(data, index)=> {
        props.history.push(data.routeTo);
    }

    const getBtns = () => {
        if (getNotification.hasOwnProperty('data')) {
            let btnList = getNotification.data.btns;
            let btns = btnList.map((data, index) => {
                return (
                    <div key={index} className="session-btns">
                        <Button color="outline-secondary" className={data.sessionType ? "true-btn" : "false-btn"} onClick={() => routeTo(data, index)}>
                            {data.title}
                        </Button>
                    </div>
                )
            });
            return btns;
        }
    }

    const routeTo = (data, index) => {
        if (data.sessionType) {
            dispatch(ListNotification(data.route));
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
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(Notification);