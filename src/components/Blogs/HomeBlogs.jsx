import './Scss/HomeBlogs.scss';
import { Link } from 'react-router-dom';
import { East } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import FullImageModal from '../FullImageModal/FullImageModal';

const HomeBlogs = ({ english, russian, uzbek, other, id, dataNews }) => {

    const [viewCount, setViewCount] = useState(localStorage.getItem("view") ? localStorage.getItem("view") : 0)

    function increment() {
        setViewCount(Number(viewCount) + 1)
        localStorage.setItem("view", Number(viewCount) + 1)
    }

    const [newsIndex, setNewsIndex] = useState(window.innerWidth > 767 ? 3 : 2)
    const [active, setActive] = useState(true)

    function showAll(item) {
        setNewsIndex(item)
        setActive(!active)
    }

    // scroll animation

    const [scroll, setScroll] = useState(0);
    const [rotate, setRotate] = useState(false);

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                window.addEventListener("scroll", () => {
                    if (window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight) / 10 - 90 <= 0 && window.innerHeight > 850 && window.innerWidth > 500) {
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                        setRotate(false)
                    }
                    if ((window.scrollY - entry.target.offsetTop + window.innerHeight) / 8 - 90 >= 0 && window.innerHeight > 850 && window.innerWidth > 500) {
                        setScroll(720)
                        setRotate(true)
                    }

                    if (window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight) / 5 - 90 <= 0 && window.innerHeight > 850 && window.innerWidth <= 500) {
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                        setRotate(false)
                    }
                    if ((window.scrollY - entry.target.offsetTop + window.innerHeight) / 5 - 90 >= 0 && window.innerHeight > 850 && window.innerWidth <= 500) {
                        setScroll(450)
                        setRotate(true)
                    }

                    //-----

                    if (window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight) / 5 - 90 <= 0 && window.innerHeight <= 850 && window.innerWidth > 500) {
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                        setRotate(false)
                    }
                    if ((window.scrollY - entry.target.offsetTop + window.innerHeight) / 5 - 90 >= 0 && window.innerHeight <= 850 && window.innerWidth > 500) {
                        setScroll(450)
                        setRotate(true)
                    }

                    if (window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight) / 5 - 90 <= 0 && window.innerHeight <= 850 && window.innerWidth <= 500) {
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                        setRotate(false)
                    }
                    if ((window.scrollY - entry.target.offsetTop + window.innerHeight) / 5 - 90 >= 0 && window.innerHeight <= 850 && window.innerWidth <= 500) {
                        setScroll(450)
                        setRotate(true)
                    }
                })
            })
        }
    );

    useEffect(() => {
        const gallery = document.getElementById("blogs");
        observer.observe(gallery);
    }, []);

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
            <div className='HomeBlogs' id='blogs'>
                <div className="wrapper">
                    <div className="section">
                        {other ?
                            <h1 className="title" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("blog3")}</h1> :
                            <h1 className="title" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("blog1")}</h1>
                        }
                        <div className="cards">
                            {dataNews.filter((c) => c.id != id).slice(0, newsIndex).map((data) => (
                                <div key={data.id} className="col-4 new">
                                    <div className="body" style={{ transform: `rotateY(${window.innerHeight > 850 ? window.innerWidth > 500 ? -180 + scroll / 4 : -180 + 2 * scroll / 5 : -180 + scroll * 2 / 5}deg)` }}>
                                        <span className='stamp'>new</span>
                                        <div className='col-12 basic-img'>
                                            <i className="fa fa-search" onClick={() => getFullImg(data.image)}></i>
                                            <img src={data.image} alt="new" />
                                        </div>
                                        <div className="texts">
                                            <p className="name" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</p>
                                            <h3 className="desc" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{english && data.description_en.slice(0, 44)}{russian && data.description_ru.slice(0, 44)}{uzbek && data.description_uz.slice(0, 44)}...</h3>
                                            <div className="bottom">
                                                <div className="views" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{viewCount} {t("views")}</div>
                                                <div className="point"></div>
                                                <div className="date">{data.date}</div>
                                            </div>
                                            <Link to={`/blog/${data.id}`} className={`explore ${rotate && "rotate"}`} onClick={() => increment()}>
                                                <i className="fa fa-angle-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`more ${!active && "d-none"}`}>
                            <button className='button' onClick={() => showAll(dataNews.length)}>
                                <East className='right-icon' />
                                <p style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("blog2")}</p>
                                {/* <div className='second button' onClick={() => showAll(dataNews.length)}>{t("blog2")}</div> */}
                            </button>
                        </div>
                        <div className={`more ${active && "d-none"}`}>
                            <button className='button' onClick={() => showAll(window.innerWidth > 767 ? 3 : 2)}>
                                <East className='right-icon' />
                                <p style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("blog4")}</p>
                                {/* <div className='second button' onClick={() => showAll(window.innerWidth > 767 ? 3 : 2)}>{t("blog4")}</div> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FullImageModal fullImg={fullImg} getFullImg={getFullImg} image={fullImgValue} />
        </>
    );
};

export default HomeBlogs;