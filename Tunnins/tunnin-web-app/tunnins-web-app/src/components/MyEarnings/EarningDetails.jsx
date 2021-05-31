import React, { useEffect } from 'react';
import {
    Table, Row, Col, Card, CardText,
    CardTitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { fetchEarningDetail } from '../../actions/earningDetails';
import { getFetchParam } from '../../actions/getFetchParam';

// Moment
import moment from 'moment';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { getEarningDetail, earning_details } from '../../constants/constants';

// Styles
import '../../styles/earnings.scss';

import tdp from '../../images/table-dp.png';
import cc from '../../images/credit-card.png';
import bookings from '../../images/bookings.png';
import stocks from '../../images/stocks.png';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function EarningDetails(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchEarningDetail();
        dispatchSessionEarningDetails();
    }, []);

    const dispatchEarningDetail = () => {
        dispatch(fetchEarningDetail(getEarningDetail));
    }

    const dispatchSessionEarningDetails=()=> {
        let id = props.location.res.SessionID;
        dispatch(getFetchParam(earning_details, id));
    }

    const getEarn = useSelector(state => state.earningDetails);

    console.log("Props: ", props.location);

    const getApi = useSelector(state=> state.getApi);

    const getUpperPart = () => {
        if (getEarn.hasOwnProperty('data') && getApi.hasOwnProperty('earningDetail')) {
            let earnings = getEarn.data;
            let detailEarning = getApi.earningDetail;
            let sessionDate = moment(detailEarning.sessionDate, "x").format("MMMM DD, YYYY");
            let fromTime = moment(detailEarning.sessionFromTime,'HHmmss').format("hh:mm A");
            let toTime = moment(detailEarning.sessionToTime,'HHmmss').format("hh:mm A");
            return (
                <div>
                    <Row>
                        <Col>
                            <h6 className="title">
                                <i className="icon-chevron-left" onClick={()=>props.history.goBack()}></i>
                                {earnings.heading}
                            </h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <Card body className="card-style earning-info-card">
                                <div className="card-content">
                                    <div>
                                        <CardTitle tag="h5">{detailEarning.sessionName}</CardTitle>
                                        <CardText className="date">{sessionDate}</CardText>
                                        <CardText className="time">{fromTime} - {toTime}</CardText>
                                    </div>
                                    <div>
                                        <CardText className="session-amount">{earnings.leftSection.price}</CardText>
                                        <CardText>{detailEarning.totalBooked} Users Booked</CardText>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        {getUpperCards(earnings.upperCards)}
                    </Row>
                </div>
            )
        }
    }

    const getUpperCards = (data) => {
        if(getApi.hasOwnProperty('earningDetail')) {
            let details = getApi.earningDetail;
            let cards = data.map((items, index) => {
                data[0].price = details.totalBooked;
                data[1].price = details.gross;
                data[2].price = details.netIncome;
                return (
                    <Col key={index} sm="2">
                        <Card body className="card-style earning-stats">
                            <div className="card-content ">
                                <div>
                                    <img src={stocks} alt="icons"/>
                                </div>
                                <div className="ml-4">
                                    <CardTitle className={items.textClass} tag="h5">{items.price}</CardTitle>
                                    <CardText>{items.title}</CardText>
                                </div>
                            </div>
                        </Card>
                    </Col>
                )
            });
            return cards;
        }
    }

    const getTableHeaders = () => {
        if (getEarn.hasOwnProperty('data')) {
            let tableHeaders = getEarn.data.tableHeader.map((data, index) => {
                return (
                    <th key={index}>
                        {data.title}
                    </th>
                )
            });
            return tableHeaders;
        }
    }

    const getTableValues = () => {
        if(getApi.hasOwnProperty('earningDetail')) {
            let res = getApi.earningDetail;
            if(res.hasOwnProperty('Data')) {
                let earnDetails = res.Data.map((data, index)=> {
                    let date = moment(data.receivingDate, "x").format("MMMM DD, YYYY");
                    return (
                        <tr key={index}>
                            <td>
                                <img className="dp-img" src={"uploads/" + data.profilePic} alt="credit-card-picture" />
                                {data.fullName}
                            </td>
                            <td>
                                {/* <img className="cc-img" src={cc} alt="credit-card-picture"/> */}
                                {data.method}
                            </td>
                            <td>
                                {date}
                            </td>
                        </tr>
                    );
                });
                return earnDetails;
            }
        }
    }

    return (
        <div className="earning">
            <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col>
                    <div className="earnings-right-container">
                        <div className="session-btn-wrapper">
                            {getUpperPart()}
                        </div>
                        <div className="session-details-table-wrapper">
                            <Table>
                                <thead>
                                    <tr>
                                        {getTableHeaders()}
                                    </tr>
                                </thead>
                                <tbody>
                                    {getTableValues()}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(EarningDetails);