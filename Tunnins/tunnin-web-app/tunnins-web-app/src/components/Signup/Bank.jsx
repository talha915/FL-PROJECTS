import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

// Constants
import { profile_face } from '../../constants/constants';

// Style
import '../../styles/signupface.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { profileFace } from '../../actions/profileFace';

// Router
import { withRouter } from 'react-router-dom';

function Bank() {
    return(
        <div>
            Bank
        </div>
    )
}

export default withRouter(Bank);