import React from 'react';
import './Scss/HomeProducts.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomeProducts = ({ uzbek, english, russian, dataCategories }) => {

    const { t } = useTranslation();

    return (
        <div className='HomeProducts' id='categories'>
            <div className="wrapper">
                <h1 className="title" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("products")}</h1>
                <div className="cards col-12">
                    {dataCategories.slice(0, 1).map((data) => (
                        <div key={data.id} className="col-8 product">
                            <Link to={`/products/${data.id}`} className="body">
                                <img src={data.image} alt="img" />
                                <p className="name" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</p>
                            </Link>
                        </div>
                    ))}
                    <div className="col-4 middle">
                        {dataCategories.slice(1, 3).map((data) => (
                            <div key={data.id} className="col-12 product standart">
                                <Link to={`/products/${data.id}`} className="body">
                                    <img src={data.image} alt="img" />
                                    <p className="name" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    {dataCategories.slice(3).map((data) => (
                        <div key={data.id} className={`product standart ${(dataCategories.slice(3).indexOf(data)+1)%2 == 0 ? "col-7" : "col-5"}`}>
                            <Link to={`/products/${data.id}`} className="body">
                                <img src={data.image} alt="img" />
                                <p className="name" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;