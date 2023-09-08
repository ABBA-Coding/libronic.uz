import React from 'react';
import './Scss/HomeServices.scss';
import { useTranslation } from 'react-i18next';

const HomeServices = ({ uzbek, english, russian, changeContactModal, dataServices }) => {

    const {t} = useTranslation();

    return (
        <div className='HomeServices' id='services'>
            <div className="wrapper">
                <div className="cards">
                    <div className="body-0">
                        <h1 className="title" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("services")}</h1>                        
                        <div className="col-12 services">
                            {dataServices.map((data) => (
                                <div key={data.id} className="col-4 serv">
                                    <div className="body" onClick={() => changeContactModal()}>
                                        <img src={data.image} alt="img" />
                                        <p style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} className="name">{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="link">
                    <button style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} className="explore" onClick={() => changeContactModal()}>{t("buyurtma")}</button>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;