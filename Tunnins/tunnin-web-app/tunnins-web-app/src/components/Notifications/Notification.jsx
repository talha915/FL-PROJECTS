import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { updateModal } from '../../actions/updateModal';

// Router
import { withRouter } from 'react-router-dom';

function Notification() {
    return(
        <div>
            Notification
        </div>
    )
}

export default Notification;