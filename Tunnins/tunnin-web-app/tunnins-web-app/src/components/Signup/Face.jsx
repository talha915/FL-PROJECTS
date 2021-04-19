import React, { useState, useEffect } from 'react';

import { Button } from 'reactstrap';

import logo from '../../images/tunnin-logo.png';

// Constants
import { profile_face } from '../../constants/constants';

// Style
import '../../styles/signupface.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { profileFace } from '../../actions/profileFace';
import { uploadFile } from '../../actions/uploadedFile';

// Router
import { withRouter } from 'react-router-dom';

function Face(props) {
   
    const [uploaded_image, setImage] = useState([]);
    const dispatch = useDispatch();
    const signUpFace = useSelector(state => state.profileFace);

    useEffect(() => {
        dispatchProfileFace();
    }, [])

    const dispatchProfileFace = () => {
        dispatch(profileFace(profile_face));
    }

    const getProfileFace = () => {
        if (signUpFace.hasOwnProperty('data')) {
            return (
                <div className="container">
                    <h5 className="heading">
                        {signUpFace.data.heading}
                        <img src={logo} alt="Logo" />
                    </h5>
                    <h6 className="subheading">
                        {signUpFace.data.subHeading}
                    </h6>
                    <h6 className="upload-heading">
                        {signUpFace.data.upload}
                    </h6>
                    <div className="d-flex">
                        {uploads(signUpFace.data)}
                    </div>
                    {getUploadedImages()}
                    <div className="next-btn-wrapper">
                        <Button color="primary" size="lg" onClick={()=>routeTo(signUpFace.data.route)}>
                            {signUpFace.data.btnText}
                        </Button>
                    </div>
                </div>
            )
        }
    }

    const routeTo=(data)=> {
        dispatch(uploadFile(uploaded_image));
        props.history.push(data);
    }

    const uploads=(data)=> {
        let uploads = data.imageList.map((item, index)=> {
            return(
                <div className="uploads" key={index}>
                    <label htmlFor="fileUpload">
                        <span className="upload-icon-wrapper" >
                            <i className="icon-cloud"></i>
                        </span>
                        <p>{item.label}</p>
                    </label>
                    <input hidden id="fileUpload" type="file" onChange={(e)=>uploadedFile(e)} />
                </div>
            )
        });
        return uploads;
    }

    // let uploaded_image;

    // const uploadedFile=(event)=> {
    //     uploaded_image = event.target.files[0];
    // }


    const getUploadedImages=()=> {
        if(uploaded_image) {
            let images = uploaded_image.map((data, index)=> {
                return(
                    <span key={index} >
                        {data}
                    </span>
                );
            });
            return images;
        }
    }

    const uploadedFile=(event)=> {
        let image = URL.createObjectURL(event.target.files[0]);
        setImage(uploaded_image=>[...uploaded_image, <img src={image} alt={image.name} style={{height: "150px"}}/>]);
    }

    return (
        <div className="signup-face">
            {getProfileFace()}
        </div>
    )
}

export default withRouter(Face);