import './Scss/Loader.scss';
import React, { useEffect, useState } from 'react';

const Loader = () => {

    const [loader, setLoader] = useState(sessionStorage.getItem("loader") ? false : true);

    function removeLoader() {
        setLoader(false)
        sessionStorage.setItem("loader", "false")
    };

    useEffect(() => {
        setTimeout(() => {
            removeLoader()
        }, 10000);
    }, []);

    return (
        <div className={`Loader`}>
            <div className="tool"></div>
        </div>
    );
};

export default Loader;