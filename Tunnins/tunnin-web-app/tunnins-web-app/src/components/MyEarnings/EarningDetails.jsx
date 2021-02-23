import React, { useEffect } from 'react';
import {
    Table, Row, Col, Card, CardText,
    CardTitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { fetchEarningDetail } from '../../actions/earningDetails';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { getEarningDetail } from '../../constants/constants';

// Styles
import '../../styles/earnings.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function EarningDetails(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchEarningDetail();
    }, []);

    const dispatchEarningDetail = () => {
        dispatch(fetchEarningDetail(getEarningDetail));
    }

    const getEarn = useSelector(state => state.earningDetails);

    const getUpperPart = () => {
        if (getEarn.hasOwnProperty('data')) {
            let earnings = getEarn.data;
            return (
                <div>
                    <Row>
                        <div>
                            {earnings.heading}
                        </div>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <Card body className="card-style">
                                <div className="card-content">
                                    <div>
                                        <CardTitle tag="h5">{earnings.leftSection.name}</CardTitle>
                                        <CardText>{earnings.leftSection.date}</CardText>
                                        <CardText>{earnings.leftSection.time}</CardText>
                                    </div>
                                    <div>
                                        <CardText className="session-amount">{earnings.leftSection.price}</CardText>
                                        <CardText>{earnings.leftSection.booked}</CardText>
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
        let cards = data.map((items, index) => {
            return (
                <Col key={index} sm="2">
                    <Card body className="card-style">
                        <div className="card-content">
                            <div>
                                <CardTitle tag="h5">{items.price}</CardTitle>
                                <CardText>{items.title}</CardText>
                            </div>
                        </div>
                    </Card>
                </Col>
            )
        });
        return cards;
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
        if (getEarn.hasOwnProperty('data')) {
            let getValues = getEarn.data.tableValues.map((data, index) => {
                return (
                    <tr key={index}>
                        <th>
                            {data.name}
                        </th>
                        <th>
                            {data.card}
                        </th>
                        <th>
                            {data.date}
                        </th>
                    </tr>
                )
            });
            return getValues;
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
                    <Col sm="9" className="custom-offset">
                        <div className="session-btn-wrapper">
                            {getUpperPart()}
                        </div>
                        <div className="session-cards-wrapper">
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
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(EarningDetails);