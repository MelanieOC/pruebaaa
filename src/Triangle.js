import React from 'react';
import './Triangle.css';

const Triangle = ({ grado }) => {
    return (
        <div>
            <div className='before'></div>
            <div className='after triangle-up' style={{ transform: 'rotate(' + grado + 'deg)' }}></div>
        </div>
    )
}

export default Triangle;