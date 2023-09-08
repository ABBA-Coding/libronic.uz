import { North } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Scss/ScrollPercent.scss';

const ScrollPercent = () => {

    const [scrollValue, setScrollValue] = useState(0)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            let pos = document.documentElement.scrollTop
            let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            setScrollValue(Math.round((pos * 100)/calcHeight))
        })
    }, [])

    function scrollToTop(){
        document.documentElement.scrollTop = 0
    }

    return (
        <div onClick={() => scrollToTop()} className={`ScrollPercent ${scrollValue == 0 && "bottom1"}`} style={{background: `conic-gradient(black ${scrollValue}%, white ${scrollValue}%)`}}>
            <North className='arrow' />
        </div>
    );
};

export default ScrollPercent;