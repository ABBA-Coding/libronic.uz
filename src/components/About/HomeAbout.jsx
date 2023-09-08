import React, { useState } from 'react';
import './Scss/HomeAbout.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Img1 from '../../assets/images/play.png';
import Img2 from '../../assets/images/about.png';

const HomeAbout = ({ russian }) => {

    // video

    const [showVideo, setShowVideo] = useState(false);

    // i18nexus

    const { t } = useTranslation();

    return (
        <>
            <div className='HomeAbout' id='about'>
                <div className="wrapper">
                    <div className="cards">
                        <div className="body">
                            <div className="col-12 titles">
                                <h1 className="title" style={{ fontFamily: `${russian ? "CraftWork600" : "Sfpro"}` }}>{t("about1")}</h1>
                                <div className="play">
                                    <h4 style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("about2")}</h4>
                                    <img src={Img1} alt="play" onClick={() => setShowVideo(true)} />
                                </div>
                            </div>
                            <div className="col-12 desc">
                                <div className="col-5 img">
                                    <img src={Img2} alt="img" />
                                </div>
                                <div className="col-7 texts">
                                    <p style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("about6").slice(0, 320)}...</p>
                                    <div className="btns">
                                        <Link to='/about' className='explore' style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("explore")}</Link>
                                        <a href='#contacts' className='contact' style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("aloqa")}</a>
                                    </div>
                                </div>
                                <p style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} className='col-6 slogan'>{t("about4")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showVideo &&
                <div className="media">
                    <div className="contrast" onClick={() => setShowVideo(false)}></div>
                    <div className="video col-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wWNPW73juI4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            }
        </>
    );
};

export default HomeAbout;