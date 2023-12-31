import React from 'react';
import './Scss/SuspenseLoader.scss';

const SuspenseLoader = () => {
    return (
        <div className="SuspenseLoader">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" fill="white" fillOpacity="0.01" />
                <path className='load-path3' d="M40.579 7.34871C44.3436 11.1133 39.9566 21.6041 30.7803 30.7804C21.604 39.9567 11.1133 44.3437 7.34863 40.5791C3.58399 36.8144 7.97101 26.3237 17.1473 17.1474C26.3236 7.97109 36.8143 3.58407 40.579 7.34871Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path className='load-path3' d="M7.48532 7.34871C3.72068 11.1133 8.1077 21.6041 17.284 30.7804C26.4603 39.9567 36.951 44.3437 40.7157 40.5791C44.4803 36.8144 40.0933 26.3237 30.917 17.1474C21.7407 7.97109 11.25 3.58407 7.48532 7.34871Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" fill="white" fillOpacity="0.01" />
                <path className='load-path1' d="M40.579 7.34871C44.3436 11.1133 39.9566 21.6041 30.7803 30.7804C21.604 39.9567 11.1133 44.3437 7.34863 40.5791C3.58399 36.8144 7.97101 26.3237 17.1473 17.1474C26.3236 7.97109 36.8143 3.58407 40.579 7.34871Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path className='load-path2' d="M7.48532 7.34871C3.72068 11.1133 8.1077 21.6041 17.284 30.7804C26.4603 39.9567 36.951 44.3437 40.7157 40.5791C44.4803 36.8144 40.0933 26.3237 30.917 17.1474C21.7407 7.97109 11.25 3.58407 7.48532 7.34871Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

export default SuspenseLoader;