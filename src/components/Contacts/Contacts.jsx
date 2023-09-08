import './Scss/Contacts.scss';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Img from '../../assets/images/contact.png';
import { PhoneInTalk } from '@mui/icons-material';

const Contacts = ({ changeModal, russian }) => {

    const [nameValue, setNameValue] = useState("");
    const [textValue, setTextValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [invalidName, setInvalidName] = useState(false);
    const [invalidText, setInvalidText] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);

    function changeName(e) {
        setNameValue(e.target.value)
        setInvalidName(false)
    };

    function changeText(e) {
        setTextValue(e.target.value)
        setInvalidText(false)
    };

    function changeNumber(e) {
        setNumberValue(e.target.value)
        setInvalidNumber(false)
    };

    let bot = {
        TOKEN: "5423486564:AAHrAg3TkCPBIpiCqua0uWseOE1IhJy8_jY",
        chatID: "-1001883616599",
        message: `%0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}; %0AXabar: ${textValue}`
    };

    function sendMessage() {
        if (nameValue === "") {
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

            changeModal();
            setNameValue("");
            setTextValue("");
            setNumberValue("");
        }
    };

    const { t } = useTranslation();

    return (
        <div className='Contacts' id='contacts'>
            <div className="wrapper">
                <div className="col-12 forms">
                    <div className="titles col-12">
                        <h1 className="title" style={{fontFamily: `${russian ? "CraftWork600" : "Sfpro"}`}}>{t("contact1")}</h1>
                        <p className="title-text" style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("contact2")}</p>
                    </div>
                    <div className="cards col-12">
                        <div className="col-8 inputs">
                            <div className="col-12">
                                <div className="col-6">
                                    <input style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} type="text" className={`forms-control ${invalidName && "red-line"}`} placeholder={`${t("contact3")}`} value={nameValue} onChange={(e) => changeName(e)} />
                                </div>
                                <div className="col-6">
                                    <input style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} type="number" className={`forms-control ${invalidNumber && "red-line"}`} placeholder={`${t("contact4")}`} value={numberValue} onChange={(e) => changeNumber(e)} />
                                </div>
                            </div>
                            <div className="col-12">
                                <textarea style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}} rows="5" className={`forms-control ${invalidText && "red-line"}`} placeholder={`${t("contact5")}`} value={textValue} onChange={(e) => changeText(e)}></textarea>
                            </div>
                            <button onClick={() => sendMessage()} style={{fontFamily: `${russian ? "CraftWork500" : "Sfpro"}`}}>{t("contact6")}</button>
                        </div>
                        <div className="col-4 imgs">
                            <img src={Img} alt="img" />
                            <a href="tel:+99897-362-33-33">
                                <PhoneInTalk className='phone-icon' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;