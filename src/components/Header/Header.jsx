import React, { useState } from 'react';
import './Scss/Header.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Stories from 'react-insta-stories';
import { useTranslation } from 'react-i18next';
import Img2 from '../../assets/images/prod1.png';
import Img3 from '../../assets/images/prod2.png';
import Img4 from '../../assets/images/prod3.png';
import FullImageModal from '../FullImageModal/FullImageModal';
import { Close, NavigateBefore, NavigateNext } from '@mui/icons-material';

const Header = ({ uzbek, english, russian, dataProducts, dataStory }) => {

    const dataProducts1 = [
        { id: 1, image1: Img2, image2: Img3, image3: Img4, name_uz: "Hi-tech va loft stilidagi Libronic metall mahsulotlariga aksiya!", name_ru: "Продвижение металлопродукции Libronic в стиле хай-тек и лофт!", name_en: "Hi-tech and loft-style Libronic metal products promotion!", description_uz: "Libronic metall mahsulotlaridan 20.000.000 so'm yoki undan ko'proq miqdordagi xaridni amalga oshiring va eksklyuziv stolni sovg'aga qo'lga kiriting. Stollarimiz alohida dizayn va e'tibor bilan ishlangan bo'lib mijoz uchun unutilmas tuyg'ularni baxshida etadi. Shoshiling, sovg'alar soni cheklangan", description_ru: "Совершите покупку на 20.000.000 сумов и более в металлопродукции Libronic и получите эксклюзивный кованный стол в подарок. Наши столы специально разработаны и изготовлены с особым вниманием, чтобы подарить клиенту незабываемые впечатления. Спешите, количество подарков ограничено", description_en: "Make a purchase of 20,000,000 soums or more from Libronic metal products and get an exclusive table as a gift. Our tables are specially designed and made with attention to give the customer an unforgettable experience. Hurry, the number of gifts is limited" }
    ];

    const settings = {
        dots: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        cssEase: "linear",
        pauseOnHover: false,
    };

    const settings1 = {
        dots: true,
        speed: 2000,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplaySpeed: 6000,
    };

    // change-images

    const [imgIndex, setImgIndex] = useState(0);

    function changeIndex(item) {
        setImgIndex(item)
    };

    // stories video

    const [short, setShort] = useState(false);
    const [shortIndex, setShortIndex] = useState(false);

    function openShort(item) {
        setShort(true)
        setShortIndex(item)
    };

    function closeShort() {
        setShort(false)
    };

    function changeVideoIndex() {
        if (shortIndex < dataStory.length - 1) {
            setShortIndex(shortIndex + 1)
        } else if (shortIndex == dataStory.length - 1) {
            setShortIndex(0)
        }
    };

    function changeVideoIndex1() {
        if (shortIndex > 0) {
            setShortIndex(shortIndex - 1)
        } else if (shortIndex == 0) {
            setShortIndex(4)
        }
    };

    const stories = [
        {
            url: dataStory.map((c) => c.video)[shortIndex],
            duration: 2000,
            type: 'video'
        },
    ];

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
            <div className='Header'>
                <div className="wrapper">
                    <Slider {...settings} className='stories-navbar col-7'>
                        {dataStory.map((data, index) => (
                            <div key={index} className="story-tool">
                                <div className="body" onClick={() => openShort(dataStory.indexOf(data))}>
                                    <img src={data.image} alt="story" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <Slider {...settings1} className='products-slider col-12'>
                        {dataProducts1.map((data) => (
                            <div key={data.id} className="col-12 head">
                                <div className="product-tool">
                                    <div className="col-6 texts">
                                        <h1 className="name" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</h1>
                                        <p className="desc" style={{fontFamily: `${russian ? "CraftWork400" : "Sfpro"}`}}>{english && data.description_en.slice(0, 270)}{russian && data.description_ru.slice(0, 270)}{uzbek && data.description_uz.slice(0, 270)}...</p>
                                        <div className="link">
                                            {/* <Link to={`product/${data.id}`} className='explore' >{t("explore")}</Link> */}
                                            <a href="#categories" className='explore' style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} >{t("explore")}</a>
                                        </div>
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
                    </Slider>
                </div>
            </div>
            {short &&
                <div className={`instagram ${!short && "d-none"}`}>
                    <Stories className="story" stories={stories} />
                    <div className="close-icon" onClick={() => closeShort()}><Close className='close' /></div>
                    <div className="right-icon" onClick={() => changeVideoIndex()}><NavigateNext className='icon' /></div>
                    <div className="left-icon" onClick={() => changeVideoIndex1()}><NavigateBefore className='icon' /></div>
                    <div className="contr-story" onClick={() => closeShort()}></div>
                </div>
            }
            <FullImageModal fullImg={fullImg} getFullImg={getFullImg} image={fullImgValue} />
        </>
    );
};

export default Header;