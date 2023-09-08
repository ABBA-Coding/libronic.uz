import React from 'react';
import './Scss/Modal.scss';

const Modal = ({ english, russian, changeModal }) => {
    return (
        <>
            <div className='Modal'>
                {english &&
                    <h1>THANK YOU FOR YOUR APPEAL &#128522;</h1>
                }
                {russian &&
                    <h1>СПАСИБО 3A ОБРАЩЕНИЕ &#128522;</h1>
                }
                <button onClick={() => changeModal()}>OK</button>
            </div>
            <div className="contrast" onClick={() => changeModal()}></div>
        </>
    );
};

export default Modal;