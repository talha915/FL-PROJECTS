import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

// Constants
import { signup_profile } from '../../constants/constants';

// Style
import '../../styles/signupprofile.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { signUpProfile } from '../../actions/signupProfile';

// Router
import { withRouter } from 'react-router-dom';

function Face() {
    return(
        <div className="signup-face">
            Face
        </div>
    )
}

export default Face;