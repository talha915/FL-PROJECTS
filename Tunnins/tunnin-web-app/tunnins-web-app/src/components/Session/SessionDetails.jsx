import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionModal } from '../../actions/sessionModal';
import { addSession } from '../../actions/addSession';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { add_session, add_session_modal } from '../../constants/constants';

// Styles
import '../../styles/newsession.scss';

// Components
import Sidebar from '../Sidebar/Sidebar';
import Popup from './Popup';

function SessionDetail() {
    return (
        <div>
            Session Detail
        </div>
    )
}

export default SessionDetail;