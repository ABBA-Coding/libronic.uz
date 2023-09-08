import React from 'react';
import './Scss/NotFound.scss';

const NotFound = () => {
    return (
        <div className='NotFound'>
            <div className="wrapper">
                <div className="number">                    
                    <h1 className='not-found1'>4</h1>
                    <div className="radius"></div>
                    <h1 className='not-found2'>4</h1>
                </div>
                <p className="text">Not found</p>
            </div>
            <div className="circle-0"></div>
            <div className="circle-1"></div>
            <div className="circle-2"></div>
        </div>
    );
};

export default NotFound;