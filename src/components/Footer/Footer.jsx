import React from 'react';
import './Scss/Footer.scss';
import { useTranslation } from 'react-i18next';
import Map from '../../assets/images/media.png';
import Img1 from '../../assets/images/logo1.png';
import Coding from '../../assets/images/coding.png';
import { Link } from 'react-router-dom';

const Footer = ({ russian, changeScrollBlog, changeScrollAbt, changeScrollCalc, changeScrollProds, changeScrollCeo, changeScrollComm, changeScrollLoc, changeScrollServ }) => {

    const { t } = useTranslation();

    return (
        <div className='Footer'>
            <div className="wrapper">
                <div className="footer-tools">
                    <div className="col-3 tool">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img src={Img1} alt="logo" />
                        </Link>
                        <div className="icons">
                            <a href="https://www.facebook.com/libronic.uz" target="blank">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/libronic.uz" target="blank">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="http://t.me/libronicuz" target="blank">
                                <i className="fa fa-telegram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title-footer' style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("foot0")}</li>
                            <li className="link"><Link style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} to="/" onClick={() => changeScrollProds()} className='nav-link p-0'>{t("foot1")}</Link></li>
                            <li className="link"><Link  style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}to="/" onClick={() => window.scrollTo(0, 0)} className='nav-link p-0'>{t("foot2")}</Link></li>
                            <li className="link"><Link style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} to="/" onClick={() => changeScrollServ()} className='nav-link p-0'>{t("foot3")}</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title-footer' style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("foot4")}</li>
                            <li className="link"><Link style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} to="/" onClick={() => changeScrollAbt()} className='nav-link p-0'>{t("foot5")}</Link></li>
                            <li className="link"><Link style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} to="/" onClick={() => changeScrollCeo()} className='nav-link p-0'>{t("foot6")}</Link></li>
                            <li className="link"><Link style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} to="/" onClick={() => changeScrollComm()} className='nav-link p-0'>{t("foot7")}</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title-footer' style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("foot8")}</li>
                            <li className="link"><Link style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} to="/" onClick={() => changeScrollCalc()} className='nav-link p-0'>{t("foot9")}</Link></li>
                            <li className="link"><Link style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} to="/" onClick={() => changeScrollBlog()} className='nav-link p-0'>{t("foot10")}</Link></li>
                            <li className="link"><Link style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} to="/" onClick={() => changeScrollLoc()} className='nav-link p-0'>{t("foot11")}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="copywrite">
                    <p className="reserve" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("foot12")}</p>
                    <div className="developed">
                        <p style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("foot13")}</p>
                        <img src={Coding} alt="coding" />
                        <img src={Map} alt="media" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;