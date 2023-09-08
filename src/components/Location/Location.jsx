import React from 'react';
import './Scss/Location.scss';
import Img from '../../assets/images/map.png';
import { useTranslation } from 'react-i18next';

const Location = ({ russian }) => {

    const { t } = useTranslation();

    return (
        <div className='Location' id='location'>
            <div className="wrapper">
                <div className="col-12 adress">
                    {/* <a href='https://www.google.com/maps?ll=41.275097,69.246451&z=18&t=m&hl=en-GB&gl=US&mapclient=embed&cid=417581367289279708' target="blank" className="col-4 img">
                        <img src={Img} alt="map" />
                    </a> */}
                    <div className="col-6 img">
                        <iframe src="https://yandex.uz/map-widget/v1/-/CCUbN-dQ9C" frameBorder="0"></iframe>
                    </div>
                    <div className="col-6 texts">
                        <h1 className="title" style={{ fontFamily: `${russian ? "CraftWork600" : "Sfpro"}` }}>{t("loc1")}</h1>
                        <p style={{ fontFamily: `${russian ? "CraftWork500" : "Sfpro"}` }}>{t("loc2")}</p>
                        {/* <p>{t("loc3")}</p>
                        <p>{t("loc4")}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;