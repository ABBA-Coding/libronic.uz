import React, { useEffect, useRef, useState } from 'react';
import './Scss/Navbar.scss';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/images/logo.png';
import Audio from '../../assets/audios/audio.mp3';
import Support from '../../assets/images/support.png';
import { Close, Menu, VolumeOff, VolumeUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = ({ russian, changeUzbek, changeEnglish, changeRussian, langTitle, changeScrollBlog, changeScrollAbt, changeScrollCalc, changeScrollProds }) => {

    window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle("black", window.scrollY > 10);
    });

    const [open, setOpen] = useState(false);

    // languages

    const [language, setLanguage] = useState(false);

    function changeHandleUzbek() {
        changeUzbek(true)
        setLanguage(!language)
    };

    function changeHandleEnglish() {
        changeEnglish(true)
        setLanguage(!language)
    }
    function changeHandleRussian() {
        changeRussian(true)
        setLanguage(!language)
    }

    // audio

    const audio = useRef(null)
    const [volume, setVolume] = useState(false)

    function playVolume() {
        setVolume(true)
        audio.current.play()
    }
    function endVolume() {
        setVolume(false)
        audio.current.pause()
    }


    const [cookie, setCookie] = useState(true)

    function showCookie(item) {
        playVolume()
        setCookie(item)
        localStorage.setItem("cookie", item)
    }

    useEffect(() => {
        setTimeout(() => {
            setCookie(localStorage.getItem("cookie") ? JSON.parse(localStorage.getItem("cookie")) : false)
        }, 2000);
    }, [])

    const { t } = useTranslation();    

    return (
        <>
            <div className={`cookie ${cookie && "d-none"}`}>
                <p>{t("cookie")}</p>
                <a href='cookie.html' target="_blank" onClick={() => showCookie(true)}>{t("cust")}</a>
                <button className="btn accept" onClick={() => showCookie(true)}>{t("accept")}</button>
            </div>
            <div className='Navbar' id='navbar'>
                <nav className='navbar navbar-expand'>
                    <audio autoPlay src={Audio} type="audio/mpeg" ref={audio}></audio>
                    <Link to="/" className='navbar-brand logo' onClick={() => window.scrollTo(0, 0)}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <ul className={`navbar-nav ${open && "open"}`}>
                        <li className="nav-item">
                            <Link style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} to="/" className="nav-link" onClick={() => changeScrollProds()}>{t("nav1")}</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} to="/" className="nav-link" onClick={() => changeScrollAbt()}>{t("nav2")}</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} to="/" className="nav-link" onClick={() => changeScrollCalc()}>{t("nav3")}</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} to="/" className="nav-link" onClick={() => changeScrollBlog()}>{t("nav4")}</Link>
                        </li>
                        <li className="nav-item">
                            <a style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} href="#contacts" className="nav-link">{t("nav5")}</a>
                        </li>
                        <li className="nav-item nav-tel">
                            <a style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} href='tel:+99897-362-33-33' className="nav-link">+99897 362 33 33</a>
                        </li>
                        <li className="nav-item">
                            <div className="language">
                                <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                <label style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} htmlFor='language'>{langTitle} <i className="fa fa-caret-down"></i></label>
                                <ul className={`language-menu ${!language && "d-none"}`}>
                                    <li onClick={() => changeHandleUzbek()}><div style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} className='lang-link'>O'Z</div></li>
                                    <li onClick={() => changeHandleEnglish()}><div style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} className='lang-link'>EN</div></li>
                                    <li onClick={() => changeHandleRussian()}><div style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} className='lang-link'>РУ</div></li>
                                    <div className={`contrast-0`} onClick={() => setLanguage(!language)}></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item volume">
                            <VolumeOff className={`volume-icon ${volume && "d-none"}`} onClick={() => playVolume()} />
                            <VolumeUp className={`volume-icon ${!volume && "d-none"}`} onClick={() => endVolume()} />
                        </li>
                        <Close className='close-icon' onClick={() => setOpen(false)} />
                    </ul>
                    <a href='tel:+99897-362-33-33' className='navbar-brand tel-number'>
                        <img src={Support} alt="support" />
                        <span className="aloqa" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("nav6")}</span>
                    </a>
                    <Menu className='open-icon' onClick={() => setOpen(true)} />
                </nav>
            </div>
        </>
    );
};

export default Navbar;