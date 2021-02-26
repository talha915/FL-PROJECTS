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
                        <h1 className="payouts-heading">
                            {pays.heading}
                        </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="payout-date-wrapper">
                                {getInputs(pays.inputs)}
                            </div>
                        </Col>
                    </Row>
                </div>
            )
        }
    }

    const getInputs=(data)=> {
        let cards = data.map((items, index)=> {
            return(
                <div className="payout-date-feilds"  key={index}>
                    <span className="date-label">{items.label}</span> <Input type={items.type}  placeholder={items.placeholder} />
                </div>
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
                        <td>
                            {data.date}
                        </td>
                        <td>
                            {data.period}
                        </td>
                        <td>
                            {data.earnings}
                        </td>
                        <td>
                            {data.fees}
                        </td>
                        <td>
                            {data.totalpayouts}
                        </td>
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
                    <Col>
                        <div className="payouts-right-container">
                            <div>
                                {getUpperPart()}
                            </div>
                            <div>
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

export default withRouter(Payouts);