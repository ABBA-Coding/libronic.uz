import React, { useState } from 'react';
import './Scss/SingleProduct.scss';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import FullImageModal from '../FullImageModal/FullImageModal';

const SingleProduct = ({ uzbek, english, russian, dataProducts, changeContactModal }) => {

    const { id } = useParams();

    // change-images

    const [imgIndex, setImgIndex] = useState(0);

    function changeIndex(item) {
        setImgIndex(item)
    };

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
            <div className='SingleProduct'>
                {dataProducts.filter((c) => c.id == id).map((data) => (
                    <div key={data.id} className="wrapper">
                        <div className="links">
                            <a href="/#" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("link1")} /</a>
                            <Link to={`/products/${data.category}`} style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("link4")} /</Link>
                            <a href="#" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("link3")}</a>
                        </div>
                        <div className="cards">
                            <div className="col-7 texts">
                                <h3 style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}} className="name">{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</h3>
                                <p style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} className="desc">{english && data.description_en} {russian && data.description_ru} {uzbek && data.description_uz}</p>
                                <div style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} className="size">{t("prod1")}: <div className="value">{data.height} cm</div></div>
                                <div style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} className="size">{t("prod2")}: <div className="value">{data.length} cm</div></div>
                                <div style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} className="size">{t("prod3")}: <div className="value">{data.weight} kg</div></div>
                                <button style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} className="buy" onClick={() => changeContactModal()}>{t("buyurtma")}</button>
                            </div>
                            <div className="col-6 imgs">
                                <div className="col-12 basic-img">
                                    <i className="fa fa-search" onClick={() => getFullImg(imgIndex == 0 ? data.image1 : imgIndex == 1 ? data.image2 : data.image3)}></i>
                                    {imgIndex == 0 ?
                                        <img src={data.image1} alt="img" className='main-image' /> :
                                        imgIndex == 1 ?
                                            <img src={data.image2} alt="img" className='main-image' /> :
                                            <img src={data.image3} alt="img" className='main-image' />
                                    }
                                </div>
                                <div className="other-imgs">
                                    <div className="col-4">
                                        <div className="body" onClick={() => changeIndex(0)}>
                                            <img src={data.image1} alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="body" onClick={() => changeIndex(1)}>
                                            <img src={data.image2} alt="image1" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="body" onClick={() => changeIndex(2)}>
                                            <img src={data.image3} alt="image2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <FullImageModal fullImg={fullImg} getFullImg={getFullImg} image={fullImgValue} />
        </>
    );
};

export default SingleProduct;