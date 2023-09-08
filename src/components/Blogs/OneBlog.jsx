import React from 'react';
import './Scss/OneBlog.scss';
import HomeBlogs from './HomeBlogs';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const OneBlog = ({ english, russian, uzbek, dataNews }) => {

    const { id } = useParams();

    const {t} = useTranslation();

    return (
        <div className='OneBlog'>
            {dataNews.filter((c) => c.id == id).map((data) => (
                <div key={data.id} className="wrapper card-new">
                    <div className="links">
                        <a href="/#" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("link1")} /</a>
                        <a href="#" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("link5")}</a>
                    </div>
                    <h1 className="name col-12 mt-2" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{english && data.name_en}{russian && data.name_ru}{uzbek && data.name_uz}</h1>
                    <div className="col-6 image">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="col-6 text">
                        <p style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{english && data.description_en}{russian && data.description_ru}{uzbek && data.description_uz}</p>
                    </div>
                </div>
            ))}
            <HomeBlogs english={english} russian={russian} uzbek={uzbek} other={true} id={id} dataNews={dataNews} />
        </div>
    );
};

export default OneBlog;