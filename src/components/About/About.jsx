import React, { useState } from 'react';
import './Scss/About.scss';
import { useTranslation } from 'react-i18next';
import Img1 from '../../assets/images/prod1.png';
import Img2 from '../../assets/images/about.png';
import { PlayArrowRounded } from '@mui/icons-material';

const About = ({ russian }) => {

    const [showVideo, setShowVideo] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <div className='About'>
                <div className="wrapper">
                    <div className="links">
                        <a href="/#" style={{ fontFamily: `${russian ? "CraftWork500" : "Sfpro"}` }}>{t("link1")} /</a>
                        <a href="#" style={{ fontFamily: `${russian ? "CraftWork500" : "Sfpro"}` }}>{t("link2")}</a>
                    </div>
                    <h1 className="title" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("about5")}</h1>
                    <div className="badges">
                        <a href="/#categories" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("nav1")}</a>
                        <a href="/#ceocomp" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("ceo1")}</a>
                    </div>
                    <div className="texts col-12">
                        <div className="col-12">
                            <p className="desc" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("about6")}</p>
                            <img src={Img1} alt="img" />
                            <p className="desc" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("about8")}</p>
                            <div className="video-iframe col-12">
                                <iframe src="https://www.youtube.com/embed/wWNPW73juI4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            {/* <div className="video col-12">
                                <img src={Img2} alt="video" />
                                <div className="play-button" onClick={() => setShowVideo(true)}><PlayArrowRounded className='icon' /></div>
                            </div>                             */}
                        </div>
                    </div>
                </div>
            </div>
            {showVideo &&
                <div className="media">
                    <div className="contrast" onClick={() => setShowVideo(false)}></div>
                    <div className="video-iframe col-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wWNPW73juI4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            }
        </>
    );
};

export default About;