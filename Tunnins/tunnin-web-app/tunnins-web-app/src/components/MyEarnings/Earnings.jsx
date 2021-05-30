import React, { useEffect } from 'react';
import { Table, Row, Col, Card, CardText, 
    CardTitle} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { fetchEarning } from '../../actions/earnings';
import { getFetchParam } from '../../actions/getFetchParam';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { getEarnings, total_earnings } from '../../constants/constants';

// Styles
import '../../styles/earnings.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Earnings(props) {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatchEarnings();
        dispatchTrainerEarning();
    }, []);

    const dispatchEarnings=()=> {
        dispatch(fetchEarning(getEarnings));
    }

    const getEarn = useSelector(state => state.earnings);
    const postFetch = useSelector(state=> state.postFetch);

    const dispatchTrainerEarning=()=> {
        if(postFetch.hasOwnProperty('userLogged')) {
            let trainerId = postFetch.userLogged._id;
            console.log("UserId: ", trainerId);
            dispatch(getFetchParam(total_earnings, trainerId));
        }
    }

    const getUpperPart=()=> {
        if(getEarn.hasOwnProperty('data')) {
            let earnings = getEarn.data;
            return(
                <Row>
                    <Col>
                        <div className="d-flex align-items-center">
                            <h1 className="earning-heading">
                                {earnings.heading}
                            </h1>
                           <div className="d-flex align-items-center earning-stats-wrapper">
                                {getUpperCards(earnings.upperCards)}
                           </div>
                        </div>
                    </Col>
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
                            <div className="stock-icon-wrapper">
                                <i className="icon-stocks"></i>
                            </div>
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
                        <td>
                            {data.nameofSession}
                        </td>
                        <td>
                            {data.date}
                        </td>
                        <td>
                            {data.time}
                        </td>
                        <td>
                            {data.users}
                        </td>
                        <td>
                            {data.earnings}
                        </td>
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
                    <Col>
                        <div className="earnings-right-container">
                            <div className="mb-5">
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

export default withRouter(Earnings);