import React, { useState } from 'react';
import './Scss/Comments.scss';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import FullImageModal from '../FullImageModal/FullImageModal';
import { Star, VisibilityOutlined } from '@mui/icons-material';

const Comments = ({ uzbek, english, russian, dataComments }) => {

    const settings = {
        dots: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
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
            <div className='Comments' id='comments'>
                <div className="wrapper">
                    <h1 className="title" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("comment")}</h1>
                    <Slider {...settings} className='carousel'>
                        {dataComments.map((data) => (
                            <div key={data.id} className="comment">
                                <div className="body">
                                    <img src={data.image} className="person" alt="person" />
                                    <p className="name" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</p>
                                    <p className="desc" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{english && data.description_en.slice(0, 30)}{russian && data.description_ru.slice(0, 30)}{uzbek && data.description_uz.slice(0, 30)}...</p>
                                    <div className="stars">
                                        <Star className='icon' />
                                        <Star className='icon' />
                                        <Star className='icon' />
                                        <Star className='icon' />
                                        <Star className='icon' />
                                    </div>
                                    <div className="bottom">
                                        <div className="icon-contr" onClick={() => getFullImg(data.photo)}>
                                            <VisibilityOutlined className='eye' />
                                        </div>
                                        <img src={data.photo} className="prod" alt="img" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <FullImageModal fullImg={fullImg} getFullImg={getFullImg} image={fullImgValue} />
        </>
    );
};

export default Comments;