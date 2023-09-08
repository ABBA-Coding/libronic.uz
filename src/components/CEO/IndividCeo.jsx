import React from 'react';
import './Scss/IndividCeo.scss';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/images/logo.png';
import Person from '../../assets/images/person.png';

const IndividCeo = ({ russian }) => {

    const { t } = useTranslation();

    return (
        <div className='IndividCeo'>
            <div className="wrapper">
                <div className="links">
                    <a href="/#" style={{ fontFamily: `${russian ? "CraftWork500" : "Sfpro"}` }}>{t("link1")} /</a>
                    <a href="#" style={{ fontFamily: `${russian ? "CraftWork500" : "Sfpro"}` }}>{t("link2")}</a>
                </div>
                <h1 style={{ fontFamily: `${russian ? "CraftWork500" : "Sfpro"}` }} className="mini-title">{t("ceo1")}</h1>
                <h1 style={{ fontFamily: `${russian ? "CraftWork500" : "Sfpro"}` }} className="title">{t("ceo2")}</h1>
                {/* <div className="badges">
                    <a href="#">{t("ceo5")}</a>                    
                </div> */}
                <div className="texts col-12">
                    <div className="col-12">
                        <div className="circle"></div>
                        <div className="col-5 img">
                            <img src={Person} alt="person" />
                        </div>
                        <div className="col-7 logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <p style={{ fontFamily: `${russian ? "CraftWork500" : "Sfpro"}` }} className="desc">{t("ceo3")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividCeo;