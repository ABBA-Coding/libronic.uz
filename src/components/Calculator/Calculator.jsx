import './Scss/Calculator.scss';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Img1 from '../../assets/images/calc1.png';
import Img2 from '../../assets/images/calc2.png';

const Calculator = ({ dataCategories, uzbek, english, russian, filterData, inputValue, selectData, changeModal }) => {

    const [showBar, setShowBar] = useState(false);

    const [nameValue, setNameValue] = useState("");
    const [styleValue, setStyleValue] = useState("");
    const [widthValue, setWidthValue] = useState("");
    const [heightValue, setHeightValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [invalidName, setInvalidName] = useState(false);
    const [invalidValue, setInvalidValue] = useState(false);
    const [invalidStyle, setInvalidStyle] = useState(false);
    const [invalidWidth, setInvalidWidth] = useState(false);
    const [invalidHeight, setInvalidHeight] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);

    function selectValue(item) {
        selectData(item)
        setShowBar(false)
        setInvalidValue(false)
    };

    function changeName(e) {
        setNameValue(e.target.value)
        setInvalidName(false)
    };

    function changeValue(e) {
        filterData(e)
        setInvalidValue(false)
    };

    function changeStyle(e) {
        setStyleValue(e.target.value)
        setInvalidStyle(false)
    };

    function changeWidth(e) {
        setWidthValue(e.target.value)
        setInvalidWidth(false)
    };

    function changeHeight(e) {
        setHeightValue(e.target.value)
        setInvalidHeight(false)
    };

    function changeNumber(e) {
        setNumberValue(e.target.value)
        setInvalidNumber(false)
    };

    let bot = {
        TOKEN: "5423486564:AAHrAg3TkCPBIpiCqua0uWseOE1IhJy8_jY",
        chatID: "-1001883616599",
        message: `%0AMahsulot nomi: ${inputValue}; %0AUzunligi: ${heightValue}; %0AEni: ${widthValue}; %0AStili: ${styleValue}; %0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}.`
    };

    function sendMessage() {
        if (inputValue === "") {
            setInvalidValue(true)
        } else if (heightValue === "") {
            setInvalidHeight(true)
        } else if (widthValue === "") {
            setInvalidWidth(true)
        } else if (styleValue === "") {
            setInvalidStyle(true)
        } else if (nameValue === "") {
            setInvalidName(true)
        } else if (numberValue === "") {
            setInvalidNumber(true)
        } else {
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
                method: "GET"
            })
                .then(success => {
                    console.log('send message')
                }, error => {
                    console.log(error)
                })

            changeModal()
            selectValue("")
            setNameValue("")
            setStyleValue("")
            setWidthValue("")
            setHeightValue("")
            setNumberValue("")
        }
    };


    const { t } = useTranslation();

    return (
        <div className='Calculator' id='calculator'>
            <div className="wrapper">
                <div className="cards col-12">
                    <div className="col-8 forms">
                        <div className="body">
                            <h1 className="title"style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("calc1")}</h1>
                            <p className="title-text" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("calc2")}</p>
                            <div className="col-12 inputs">
                                <div className="search">
                                    <div className={`contrast-0 ${!showBar && "d-none"}`} onClick={() => setShowBar(false)}></div>
                                    <input style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} type="text" className={`forms-control ${invalidValue && "red-line"}`} placeholder={`${t("calc3")}`} value={inputValue} onChange={(e) => changeValue(e)} onClick={() => setShowBar(true)} />
                                    <ul className={`search-bar ${!showBar && "d-none"}`}>
                                        {dataCategories.map((data) => (
                                            <li key={data.id} onClick={() => selectValue(english ? data.name_en : russian ? data.name_ru : data.name_uz)}>{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="size">
                                    <input style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} min={0} className={`forms-control height ${invalidHeight && "red-line"}`} type="number" placeholder={`${t("calc4")}`} value={heightValue} onChange={(e) => changeHeight(e)} />
                                    <div className="limit"></div>
                                    <input style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} min={0} className={`forms-control width ${invalidWidth && "red-line"}`} type="number" placeholder={`${t("calc5")}`} value={widthValue} onChange={(e) => changeWidth(e)} />
                                </div>
                                <input style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} type="text" className={`forms-control ${invalidStyle && "red-line"}`} placeholder={`${t("calc6")}`} value={styleValue} onChange={(e) => changeStyle(e)} />
                                <input style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} type="text" className={`forms-control ${invalidName && "red-line"}`} placeholder={`${t("calc7")}`} value={nameValue} onChange={(e) => changeName(e)} />
                                <input style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} type="number" className={`forms-control ${invalidNumber && "red-line"}`} placeholder={`${t("calc8")}`} value={numberValue} onChange={(e) => changeNumber(e)} />
                                <button onClick={() => sendMessage()} style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("calc9")}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 imgs">
                        <div className="col-12">
                            <div className="body">
                                <img src={Img1} alt="img" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="body">
                                <img src={Img2} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;