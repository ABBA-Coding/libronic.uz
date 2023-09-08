import React, { useState } from 'react';
import './Scss/Products.scss';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import FullImageModal from '../FullImageModal/FullImageModal';

const Products = ({ english, russian, uzbek, dataProducts, dataCategories }) => {

    const { id } = useParams();

    // full image

    const [fullImg, setFullImg] = useState(false);
    const [fullImgValue, setFullImgValue] = useState(null);

    function getFullImg(image) {
        setFullImg(!fullImg);
        setFullImgValue(image);
    };

    // i18nexus

    const { t } = useTranslation();

    return (
        <>
            <div className='Products'>
                <div className="wrapper">
                    <div className="links">
                        <a style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} href="/#">{t("link1")} /</a>
                        <a style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} href="#">{t("link4")}</a>
                    </div>
                    <h1 className="title" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("products")}</h1>
                    <div className="categories">
                        {dataCategories.map((data) => (
                            <Link to={`/products/${data.id}`} key={data.id} className={`category ${data.id == id && "active"}`} style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</Link>
                        ))}
                    </div>
                    <div className="cards">
                        {dataProducts.filter((c) => c.category == id).map((data) => (
                            <div key={data.id} className="product col-4">
                                <div className="body">
                                    <div className="col-12 basic-img">
                                        <i className="fa fa-search" onClick={() => getFullImg(data.image1)}></i>
                                        <img src={data.image1} alt="img" className='main-img' onClick={() => getFullImg(data.image1)} />
                                    </div>
                                    <Link to={`/product/${data.id}`} className="name" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</Link>
                                    <div className="link">
                                        <Link to={`/product/${data.id}`} className="explore" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("explore")} <i className="fa fa-angle-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FullImageModal fullImg={fullImg} getFullImg={getFullImg} image={fullImgValue} />
        </>
    );
};

export default Products;