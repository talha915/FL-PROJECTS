import React, { useEffect } from 'react';
import { Table, Row, Col, Card, CardText,  Input,
    CardTitle} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { fetchPayout } from '../../actions/payouts';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { getPayouts } from '../../constants/constants';

// Styles
import '../../styles/payout.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Payouts(props) {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatchPayouts();
    }, []);

    const dispatchPayouts=()=> {
        dispatch(fetchPayout(getPayouts));
    }

    const payouts = useSelector(state => state.payouts);

    const getUpperPart=()=> {
        if(payouts.hasOwnProperty('data')) {
            let pays = payouts.data;
            return(
                <div>
                    <Row>
                        <Col>
                            {pays.heading}
                        </Col>
                    </Row>
                    <Row>
                        {getInputs(pays.inputs)}
                    </Row>
                </div>
            )
        }
    }

    const getInputs=(data)=> {
        let cards = data.map((items, index)=> {
            return(
                <Col key={index}>
                    <Input type={items.type} placeholder={items.placeholder} />
                </Col>
            )
        });
        return cards;
    }

    const getTableHeaders=()=> {
        if(payouts.hasOwnProperty('data')) {
            let tableHeaders = payouts.data.tableHeader.map((data, index)=> {
                return (
                    <th key={index}>
                        {data.title}
                    </th>
                )
            });
            return tableHeaders;
        }
    }

    const getTableValues=()=> {
        if(payouts.hasOwnProperty('data')) {
            let getValues = payouts.data.tableValues.map((data, index)=>{
                return (
                    <tr key={index}>
                        <th>
                            {data.date}
                        </th>
                        <th>
                            {data.period}
                        </th>
                        <th>
                            {data.earnings}
                        </th>
                        <th>
                            {data.fees}
                        </th>
                        <th>
                            {data.totalpayouts}
                        </th>
                    </tr>
                )
            });
            return getValues;
        }
    }

    return(
        <div className="payouts">
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

export default withRouter(Payouts);