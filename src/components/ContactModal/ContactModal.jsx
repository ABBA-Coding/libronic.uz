import React, { useState } from 'react';
import './Scss/ContactModal.scss';
import { useTranslation } from 'react-i18next';

const ContactModal = ({ changeModal, changeContactModal }) => {

    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [invalidName, setInvalidName] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);

    function changeName(e) {
        setNameValue(e.target.value)
        setInvalidName(false)
    };

    function changeNumber(e) {
        setNumberValue(e.target.value)
        setInvalidNumber(false)
    };

    let bot = {
        TOKEN: "5423486564:AAHrAg3TkCPBIpiCqua0uWseOE1IhJy8_jY",
        chatID: "-1001883616599",
        message: `%0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}`
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
            setNumberValue("");
            changeContactModal();
        }
    };

    const { t } = useTranslation();

    return (
        <>
            <div className='ContactModal'>                
                <h3>{t("contact7")}</h3>
                <input type="text" className={`forms-control ${invalidName && "red-line"}`} placeholder={`${t("contact3")}`} value={nameValue} onChange={(e) => changeName(e)} />
                <input type="number" className={`forms-control ${invalidNumber && "red-line"}`} placeholder={`${t("contact4")}`} value={numberValue} onChange={(e) => changeNumber(e)} />
                <button onClick={() => sendMessage()}>{t("contact6")}</button>
            </div>
            <div className="contrast" onClick={() => changeContactModal()}></div>
        </>
    );
};

export default ContactModal;