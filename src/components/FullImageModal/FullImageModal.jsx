import React from 'react';
import './Scss/FullImageModal.scss';

const FullImageModal = ({ fullImg, getFullImg, image }) => {
    return (
        fullImg &&
        <div className='FullImageModal' onClick={() => getFullImg(null)}>
            <img src={image} alt="img" />
        </div>
    );
};

export default FullImageModal;