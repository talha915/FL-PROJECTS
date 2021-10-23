
import React from 'react';
import MultiStep from 'react-multistep';
import StepOne from './Stepone';
import StepTwo from './Steptwo';
import StepThree from './Stepthree';

const steps = [
    { component: <StepOne /> },
    { component: <StepTwo /> },
    { component: <StepThree /> }
]

const prevStyle = {
    'display': 'inline-block',
    'font-weight': '400',
    'color': '#212529',
    'text-align': 'center',
    'vertical-align': 'middle',
    '-webkit-user-select': 'none',
    'user-select': 'none',
    'background-color': '#0FA0CE',
    'border': '1px solid transparent',
    'padding': '.375rem .75rem',
    'font-size': '1rem',
    'line-height': '1.5',
    'border-radius': '.25rem',
    'padding-right': '10px'
}
const nextStyle = {
    'display': 'inline-block',
    'font-weight': '400',
    'color': '#212529',
    'text-align': 'center',
    'vertical-align': 'middle',
    '-webkit-user-select': 'none',
    'user-select': 'none',
    'background-color': '#0FA0CE',
    'border': '1px solid transparent',
    'padding': '.375rem .75rem',
    'font-size': '1rem',
    'line-height': '1.5',
    'border-radius': '.25rem',
    'padding-right': '10px',
    'margin-left': '995px'
}

function Signup() {
    return (
        <div className='container'>
            <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
        </div>
    )
}
export default Signup;