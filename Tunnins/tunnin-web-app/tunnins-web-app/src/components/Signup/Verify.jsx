import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

// Constants
import signed_up from '../../constants/constants';

// Router
import { useLocation } from "react-router-dom";

// Actions
import { SignedUp } from '../../actions/Signup';

// Redux
import { useDispatch, useSelector } from "react-redux";

function Verify() {

    const location = useLocation();
    console.log("Loc",  location);

    return(
        <div>
            Verify
        </div>
    )
}

export default Verify;