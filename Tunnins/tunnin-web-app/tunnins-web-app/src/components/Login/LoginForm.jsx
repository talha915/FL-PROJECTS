import React, { useState, useEffect } from 'react';

function LoginForm(props) {
    
    const [loginForm, setForm] = useState({});

    useEffect(() => {
        setFormData();
    }, []);

    const setFormData = ()=> {  
        setForm(props.formData);
    }

    const getFormData=()=> {
        if(Object.keys(loginForm).length > 0) {
            console.log(loginForm);
        }
    }
    
    return(
        <div>
            {getFormData()}
        </div>
    )
}

export default LoginForm;