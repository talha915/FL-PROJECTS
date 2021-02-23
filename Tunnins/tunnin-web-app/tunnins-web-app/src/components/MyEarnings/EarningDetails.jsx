import React, { useEffect } from 'react';
import { Table, Row, Col, Card, CardText, 
    CardTitle} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { fetchEarning } from '../../actions/earnings';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { getEarnings } from '../../constants/constants';

// Styles
import '../../styles/earnings.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Earnings(props) {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatchEarnings();
    }, []);

    const dispatchEarnings=()=> {
        dispatch(fetchEarning(getEarnings));
    }

    const getEarn = useSelector(state => state.earnings);

    console.log("Earn: ", getEarn);

    const getUpperPart=()=> {
        if(getEarn.hasOwnProperty('data')) {
            let earnings = getEarn.data;
            return(
                <Row>
                    <Col>
                        {earnings.heading}
                    </Col>
                    {getUpperCards(earnings.upperCards)}
                </Row>
            )
        }
    }

    const routeTo=(location)=> {
        props.history.push(location);
    }

    const getUpperCards=(data)=> {
        let cards = data.map((items, index)=> {
            return(
                <Col key={index}>
                    <Card body className="card-style" onClick={()=>routeTo(items.route)}>
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

    const getTableHeaders=()=> {
        if(getEarn.hasOwnProperty('data')) {
            let tableHeaders = getEarn.data.tableHeader.map((data, index)=> {
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
        if(getEarn.hasOwnProperty('data')) {
            let getValues = getEarn.data.tableValues.map((data, index)=>{
                return (
                    <tr key={index}>
                        <th>
                            {data.nameofSession}
                        </th>
                        <th>
                            {data.date}
                        </th>
                        <th>
                            {data.time}
                        </th>
                        <th>
                            {data.users}
                        </th>
                        <th>
                            {data.earnings}
                        </th>
                    </tr>
                )
            });
            return getValues;
        }
    }

    return(
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

export default withRouter(Earnings);