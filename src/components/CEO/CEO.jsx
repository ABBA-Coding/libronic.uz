import './Scss/CEO.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Img1 from '../../assets/images/person.png';

const CEO = ({ russian }) => {

    const { t } = useTranslation();

    return (
        <div className='CEO' id='ceocomp'>
            <div className="wrapper">
                <div className="cards">
                    <div className="body">
                        <div className="col-12 titles">
                            <h1 className="title" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("ceo1")}</h1>
                            <p style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("ceo2")}</p>
                        </div>
                        <div className="col-12 desc">
                            <div className="col-5 img">
                                <img src={Img1} alt="img" />
                            </div>
                            <div className="col-7 texts">
                                <p style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("ceo3").slice(0, 320)}...</p>
                                <h6 style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("ceo4")}</h6>
                                <div className="btns">
                                    <Link to='/ceo' className='explore' style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("explore")}</Link>
                                    <a href='#contacts' className='contact' style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("aloqa")}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CEO;