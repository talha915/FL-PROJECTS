import React, {useEffect} from 'react';

// ReactStrap
import { Row, Col } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { cancelPolicy } from '../../actions/cancelPolicy';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { cancel_policy } from '../../constants/constants';

// Components
import Sidebar from '../Sidebar/Sidebar';

// Styles
import '../../styles/cancelpolicy.scss';

function CancelledPolicy() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatchSessionPolicy();
    }, []);

    const dispatchSessionPolicy=()=> {
        dispatch(cancelPolicy(cancel_policy));
    }

    const cancelationPolicy = useSelector(state => state.cancelPolicy);
    console.log("Cons, ", cancelationPolicy);

    const getCancelPolicyData=()=> {
        if(cancelationPolicy.hasOwnProperty('data')) {
            return(
                <Col sm="10">
                    <div className="cancel">
                        <h6>
                            {cancelationPolicy.data.title}
                        </h6>
                        <p>
                            {cancelationPolicy.data.content}
                        </p>
                    </div>
                </Col>
            )
        }
    }

    return(
        <div className="session-details">
            <Row>
                <Col sm="2" className="left-container">
                    <Sidebar />
                </Col>
                {getCancelPolicyData()}
            </Row>
        </div>
    )
}

export default CancelledPolicy;